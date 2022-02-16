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




// CREATE CUSTOMERS 




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


// const getAllSuppliers = async () => {
//       await client.connect()
//      const db = client.db('Commerce')

//      const supplierCollection = db.collection('suppliers')

//      const suppliers = await supplierCollection.find({}).toArray()

//      console.log(...suppliers)


// }

// CREATE SUPPLIERS



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

// const createMiltipleSupplier = async (multisupl) => {
//    await client.connect()
//   const db = client.db('Commerce')

//   const supplierCollection = db.collection('suppliers')

//   const supplier = await supplierCollection.insertMany(multisupl)

//   console.log(supplier)

// }

// createMiltipleSupplier([
//    {id: 2,
//       name: " Jean Jacques",
//       address:"8927 Miami Gardesn Fl ",
//       phone: "786-2301919 ",
//       contactpersonId:3
//    },

//   {id: 3,
//       name: "Pierre Jean ",
//       address:"1022 Lake Worth Fl",
//       phone: "786-1032099 ",
//       contactpersonId: 5
//    },

//    {id:4 ,
//       name: "Joseph Hill ",
//       address:"3440 Miami Fl ",
//       phone: "560-4050990 ",
//       contactpersonId:6
//    },

//    {id: 5,
//       name: "Marie Felix ",
//       address:"5670 Miami Fl ",
//       phone: "456-6701023",
//       contactpersonId:6
//    },

//       {id: 6,
//       name: "Jule Michel ",
//       address:"6659 Jog Ave Miami Fl ",
//       phone: "786-8991034",
//       contactpersonId:7
//    },

//    ])

// getAllSuppliers()






// ORDER ITEM

const getAllOrderItems = async () => {
   await client.connect()
  const db = client.db('Commerce')

  const orderitemCollection = db.collection('orderitems')

  const orderitems = await orderitemCollection.find({}).toArray()

  console.log(...orderitems)
}

// CREATE one ORDER ITEM




const createOrderItem = async (orderIt) => {
     await client.connect()
    const db = client.db('Commerce')

    const orderitemCollection = db.collection('orderitems')

    const orderitem = await orderitemCollection.insertOne(orderIt)

    console.log(orderitem)

    //client.close()// to end connection


}

// createOrderItem({
//    id: 2,
//    productid: 20211011,
//    orderid: 20211012,
//    qty: 3
// })
// //getAllOrderItems()


// CREATE MULTIPLE ORDER ITEM

const createMiltipleOrderItem = async (multiOrderIt) => {
      await client.connect()
      const db = client.db('Commerce')
   
      const orderitemCollection = db.collection('orderitems')
   
      const orderitem = await orderitemCollection.insertMany(multiOrderIt)
   
   //   console.log(orderitem)
   
    }
   
    createMiltipleOrderItem([
         {
         id:3,
         productid:20211012,
         orderid:20211013,
         qty:4 },
         
         {id:4,
         productid:20211013,
         orderid:20211014,
         qty:5 },
         
         {id: 5,
         productid: 20211014,
         orderid: 20211015,
         qty: 6
      },

    ])
    getAllOrderItems()  
