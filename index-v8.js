
import credentials from './credentials-v8.js';

//npm i firebase-admin
import admin from 'firebase-admin';

admin.initializeApp({ credential: admin.credential.cert(credentials) });

const db = admin.firestore();

const createCustomer = async (customerName) => {
    const custCol = db.collection('customers');
    const result = await custCol.add(customerName);

    console.log(result);
    return result;
}

// createCustomer({make: 'Dogde', model: 'Charge'});
