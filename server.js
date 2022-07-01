import express from 'express';
import { getAllCustomers } from './customers.js';

const app = express()
app.get('/customers', async (req, res) => {
    const result = await getAllCustomers()
    res.send(result)
})

const port = 5002
app.listen(port, ()=> {
    console.log(`We are Listening ${port}`)
})



