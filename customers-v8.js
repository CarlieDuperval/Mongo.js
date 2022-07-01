import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import credentials from "./credentials-v8.js";

const db = () => {
  if (!getApps().length) {
    const app = initializeApp({
      credential: cert(credentials),
    });
  }
  return getFirestore();
};

const customerCollection = db().collection("customers");

export const getAllCustomers= async () => {
  const result = await customerCollection.get();

  const customers = result.docs.map((customer) => {
    return { id: customer.id, ...customer.data() };
  });
  console.log(...customers);
  return customers;
};

// create customer

const createCustomer = async (customer) => {
  const result = await customerCollection.add(customer);
  console.log(result);
};

createCustomer({
    id: "",
    name:"Techico Pam",
    email:"techico@gmail.com",
})


// delete

const deleteCustomer = async (customerId) => {
  const result = await customerCollection.doc(customerId).delete();
  console.log();
};

// const deleteCar = async (carId) => {
//   const result = await carCollection.doc(carId).collection.delete()
//   console.log()
// }
//deleteCar('D8DeiHKBfVpImAbsdE2C')

//update

const updateCustomer= async (customerId, email) => {
  const result = await customerCollection.doc(customerId).update({
    email: email,
  });

  console.log(result);
};

//updateCarModel("TMFm7fEEWJPLoWtmoGiH", "charger")

//getAllCustomers()
