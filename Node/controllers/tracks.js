
const { matchedData } = require('express-validator');
const { tracksModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');

const getItems = async (req, res) => {

    try{
        const data = await tracksModel.find({});
        res.send({data});
    }catch(error){
        handleHttpError(res, "Error Get Item", error.code);
    }
}
const getItem = async (req, res) => {

    try{
        req = matchedData(req);
        const {id} = req;
        const data = await tracksModel.findById(id);
        res.send({data});
    }catch(error){
        handleHttpError(res, "Error Get Item", error.code);
    }

}
const createItem = async (req, res) => {

    try{
        const body = matchedData(req);
        const data = await tracksModel.create(body);
        res.send({data});
    }catch(error){
        handleHttpError(res, "Error Create Item", error.code);
    }
}
const updateItem = async (req, res) => {
    try{
        const {id, ...body} = matchedData(req);
        const data = await tracksModel.findOneAndUpdate(id, body);
    }catch(error){
        handleHttpError(res, "Error Update Item", error.code);
    }
}
const deleteItem = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        const data = await tracksModel.deleteOne({_id: id});
        res.send({data});
    }catch(error){
        handleHttpError(res, "Error Get Item", error.code);
    }
}

module.exports = {getItems, getItem, createItem, updateItem, deleteItem};