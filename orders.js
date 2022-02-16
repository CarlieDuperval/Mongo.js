import { MongoClient } from "mongodb";

const url = 'mongodb://localhost:37017';

const client = new MongoClient(url)

const getAllOrders = async() =>{
    await client.connect()
}