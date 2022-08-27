
const fs = require('fs');
const { storagesModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;

const getItems = async (req, res) => {

    try {
        const data = await storagesModel.find({});
        res.send({data});
    }catch(err) {
        handleHttpError(res, "Error getting items", err);
    }
}
const getItem = async (req, res) => {
    try {
        const {id} = matchedData(req);
        const data = await storagesModel.findById({id});
        res.send({data});
    }catch(err) {
        handleHttpError(res, "Error getting items", err);
    }
}
const createItem = async (req, res) => {
    try {
        const {file } = req;
        const fileData = {
            filename: file.filename,
            url: `${PUBLIC_URL}/${file.filename}`,
        };
        const data = await storagesModel.create(body);
        res.send({file});
    }catch(err) {
        handleHttpError(res, "Error creating item", err);
    }
}
const updateItem = async (req, res) => {
}
const deleteItem = async (req, res) => {
    try {
        const {id} = matchedData(req);
        const dataFile = await storagesModel.findById({id});
        await storagesModel.deleteOne({_id: id });
        const {filename} = dataFile;
        const filePath = `${MEDIA_PATH}/${filename}`;
        fs.unlink(filePath);
        const data = {
            filePath,
            deleted: 1
        }
    }catch(err) {
        handleHttpError(res, "Error getting items", err);
    }
}

module.exports = {getItems, getItem, createItem, updateItem, deleteItem};