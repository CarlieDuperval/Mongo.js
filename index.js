import { MongoClient } from "mongodb";

const url = 'mongodb://localhost:27017';

const client = new MongoClient(url)

// const getAllCustomers = async () => {
//       await client.connect()
//      const db = client.db('Commerce')

//      const customerCollection = db.collection('customers')

//      const customers = await customerCollection.find({}).toArray()

//      console.log(...customers)

//      //client.close()// to end connection


// }


// // const createCustomer = async (cust) => {
// //      await client.connect()
// //     const db = client.db('Commerce')

// //     const customerCollection = db.collection('customers')

// //     const customer = await customerCollection.insertOne(cust)

// //     console.log(customer)

// //     //client.close()// to end connection


// // }

// // createCustomer({
// //     id: 3,
// //     name: "Claire Dorlus",
// //     email: "claire@dorlus.com"
// // })


// const createMiltipleCustomer = async (multicust) => {
//      await client.connect()
//     const db = client.db('Commerce')

//     const customerCollection = db.collection('customers')

//     const customer = await customerCollection.insertMany(multicust)

//     console.log(customer)

// }

// createMiltipleCustomer([
//      {id: 3,
//     name: "Claire Dorlus",
//     email: "claire@dorlus.com"
//      },

//     {id: 4,
//      name: "Harold Duperval",
//      email: "harold@gmail.com"
//      },

//      {id:5,
//      name:"Jayden Duperval",
//      email: "Jayden@gmail.com"
//      },

//      {id:6,
//       name:"Ritch Duperval",
//       email:"ritch@gmail.com"
//      },

//      {id:7,
//       name:"Aliya Gonzalez",
//       email:"aliya@gmail.com"
//      },

//      ])

//getAllCustomers()


const getAllSuppliers = async () => {
      await client.connect()
     const db = client.db('Commerce')

     const supplierCollection = db.collection('suppliers')

     const suppliers = await supplierCollection.find({}).toArray()

     console.log(...suppliers)


}

// const createSupplier = async (supl) => {
//     await client.connect()
//    const db = client.db('Commerce')

//    const supplierCollection = db.collection('suppliers')

//    const supplier = await supplierCollection.insertOne(supl)

//    console.log(supplier)

//    //client.close()// to end connection


// }


// createSupplier({
//    id: 3,
//    name: "Mica Millien ",
//    address:"9730 Miami Garden drive Miami Fl ",
//    phone: "561-3061021 ",
//    contactpersonId: 5
// })

// getAllSuppliers()

const createMiltipleSupplier = async (multisupl) => {
   await client.connect()
  const db = client.db('Commerce')

  const supplierCollection = db.collection('suppliers')

  const supplier = await supplierCollection.insertMany(multisupl)

  console.log(supplier)

}

createMiltipleSupplier([
   {id: 2,
      name: " Jean Jacques",
      address:"8927 Miami Gardesn Fl ",
      phone: "786-2301919 ",
      contactpersonId:3
   },

  {id: 3,
      name: "Pierre Jean ",
      address:"1022 Lake Worth Fl",
      phone: "786-1032099 ",
      contactpersonId: 5
   },

   {id:4 ,
      name: "Joseph Hill ",
      address:"3440 Miami Fl ",
      phone: "560-4050990 ",
      contactpersonId:6
   },

   {id: 5,
      name: "Marie Felix ",
      address:"5670 Miami Fl ",
      phone: "456-6701023",
      contactpersonId:6
   },

   {id: 6,
      name: "Jule Michel ",
      address:"6659 Jog Ave Miami Fl ",
      phone: "786-8991034",
      contactpersonId:7
   },

   ])

getAllSuppliers()

