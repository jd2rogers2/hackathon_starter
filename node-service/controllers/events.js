// const fs = require('fs');
// const jwt = require('jsonwebtoken');


const createEvent = async (req, res) => {
    res.send({ hello: 'world' });
};

const getEventById = async (req, res) => {
    res.send({ hello: 'world' });
};

const getAllEvents = async (req, res) => {
    res.send({ hello: 'world' });
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
