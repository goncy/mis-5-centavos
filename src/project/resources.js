import { database } from "../firebase";

export default {
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
