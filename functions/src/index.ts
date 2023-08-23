import * as admin from 'firebase-admin';
import express from 'express';
import cors from 'cors';
admin.initializeApp();
const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

app.get('/userEmail', async (req: any, res: any) => {
	const userToken = req.headers.authorization?.split('Bearer ')[1];

	if (!userToken) {
		return res.status(401).send('Unauthorized');
	}

	try {
		const decodedToken = await admin.auth().verifyIdToken(userToken);
		const uid = decodedToken.uid;

		const userRecord = await admin.auth().getUser(uid);

		return res.json({ email: userRecord.email });
	} catch (error) {
		console.error('Error verifying token:', error);
		return res.status(500).send('Internal Server Error');
	}
});
