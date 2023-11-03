
var admin = require("firebase-admin");
var serviceAccount = require("./admin-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function renameFieldInSubCollection() {
  const parentCollectionRef = db.collection("messages");
  const snapshot = await parentCollectionRef.get();

  for (const doc of snapshot.docs) {
    const messagesSubCollectionRef = doc.ref.collection("messages");
    const subCollectionSnapshot = await messagesSubCollectionRef.get();

    let batch = db.batch();

    subCollectionSnapshot.docs.forEach((messageDoc) => {
      const messageDocRef = messagesSubCollectionRef.doc(messageDoc.id);
      const senderUId = messageDoc.data().senderUid;

      // Check if senderUid is not undefined
      if (typeof senderUId !== 'undefined') {
        // Set the new field 'uid'
        batch.set(messageDocRef, { uid: senderUId }, { merge: true });
        // Remove the old field 'senderUid'
        batch.update(messageDocRef, { senderUid: admin.firestore.FieldValue.delete() });
      } else {
        console.error(`Document with id ${messageDoc.id} in subcollection of parent document ${doc.id} has undefined senderUid.`);
      }
    });

    // Commit the batch
    await batch.commit();
  }
  console.log("Field renamed successfully in all subcollection documents!");
}

renameFieldInSubCollection().catch(console.error);
