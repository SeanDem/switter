
var admin = require("firebase-admin");
var serviceAccount = require("./admin-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function migrateFieldNames() {
  // Fetch all sweets documents
  const sweetsSnapshot = await db.collection('sweets').get();

  for (const sweetDoc of sweetsSnapshot.docs) {
    // Process likers subcollection
    await migrateSubCollectionField(sweetDoc, 'likers');
    // Process commenters subcollection
    await migrateSubCollectionField(sweetDoc, 'commenters');
  }
}

async function migrateSubCollectionField(sweetDoc, subCollectionName) {
  const subCollectionSnapshot = await sweetDoc.ref.collection(subCollectionName).get();

  for (const subDoc of subCollectionSnapshot.docs) {
    const data = subDoc.data();
    if (data.userId) {
      await subDoc.ref.update({
        uid: data.userId,
        userId: admin.firestore.FieldValue.delete() // remove the old userId field
      });
    }
  }
}

// Call the function
migrateFieldNames().then(() => {
  console.log('Migration completed!');
}).catch(error => {
  console.error('Error during migration:', error);
});
