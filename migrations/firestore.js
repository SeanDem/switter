
async function renameFieldInCollection() {
  const sweetsCollectionRef = db.collection("sweets");
  const snapshot = await sweetsCollectionRef.get();

  let batch = db.batch();

  snapshot.docs.forEach((doc) => {
    const docRef = sweetsCollectionRef.doc(doc.id);
    const userUid = doc.data().userUid;

    // Check if userUId is not undefined
    if (typeof userUid !== "undefined") {
      // Set the new field 'uid'
      batch.set(docRef, { uid: userUid }, { merge: true });
      // Remove the old field 'userUId'
      batch.update(docRef, { userUid: admin.firestore.FieldValue.delete() });
    } else {
      console.error(`Document with id ${doc.id} has undefined userUId.`);
    }
  });

  // Commit the batch
  await batch.commit();
  console.log("Field renamed successfully!");
}

renameFieldInCollection().catch(console.error);
