import { dbClient } from "./db.js";

const getSupplierCollection =  async () => {
    const client = await dbClient();
    const db = client.db('Commerce')

    return db.collection('suppliers')
}




const createSupplier = async (supplier) => {

    const supplierCollection = await getSupplierCollection()

    const result = await supplierCollection.insertOne(supplier)

    console.log(result)

}

createSupplier({ id: 53, name: "Moic BelBagay ", address:"9030  Miami Fl ", phone: "561-3061021 ", contactpersonId: 5})



 //getAllSuppliers() 
