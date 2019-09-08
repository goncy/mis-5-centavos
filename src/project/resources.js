import { database, firestore } from "../firebase";

export default {
  addDonation: (project, user, ammount = 100) =>
    database
      .collection("projects")
      .doc(project)
      .update({
        donations: firestore.FieldValue.arrayUnion({
          ammount,
          donor: user.id,
          avatar: user.avatar,
          message: `${user.name} hizo una donacion`,
          timestamp: +new Date(),
        }),
      }),
  onChange: callback =>
    database.collection("projects").onSnapshot(snapshot =>
      callback(
        snapshot.docs.map(doc => {
          const project = doc.data();

          return {
            id: doc.id,
            ...project,
            funded: project.donations.reduce((funded, donation) => funded + donation.ammount, 0),
          };
        })
      )
    ),
};
