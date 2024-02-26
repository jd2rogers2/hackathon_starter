// const fs = require('fs');
// const jwt = require('jsonwebtoken');
const { MongoClient } = require("mongodb");


const MONGO_CONNECTION = process.env.MONGO_CONNECTION;
const client = new MongoClient(MONGO_CONNECTION);
const MONGO_DATABASE_NAME = process.env.MONGO_DATABASE_NAME;


const createEvent = async (req, res) => {
    try {
        const database = client.db(MONGO_DATABASE_NAME);
        const collection = database.collection("messages");
        await collection.insertOne(req.body);
        res.send({ success: true });
    } catch (e) {
        console.error(e);
        res.status(500).send({ success: false });
    }
};

const getEventById = async (req, res) => {
    res.send({ hello: 'world' });
};

const getAllEvents = async (req, res) => {
    const database = client.db(MONGO_DATABASE_NAME);
    const collection = database.collection("messages");
    const messages = await collection.find().toArray();
    res.send({ messages });
};

const updateEvent = async (req, res) => {
    res.send();
};
const deleteEvent = async (req, res) => {
    res.send();
};

module.exports = {
    createEvent,
    getEventById,
    getAllEvents,
    updateEvent,
    deleteEvent,
};
