import { database, firestore } from "../firebase";

export default {
  addDonation: (user, project, ammount = 100) =>
    database
      .collection("projects")
      .doc(project)
      .update({
        donations: firestore.FieldValue.arrayUnion({
          ammount,
          donor: user.uid,
          avatar: user.photoURL,
          message: `${user.displayName} hizo una donacion`,
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
            funded: project.donations.reduce((founded, donation) => founded + donation.ammount, 0),
          };
        })
      )
    ),
};
