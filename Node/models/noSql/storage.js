
const mongooose = require('mongoose');

const StorageScheme = new mongooose.Schema(
    {
        url: {
            type: String,
        },
        fileName: {
            type: Number,
        },

    },
    {
        timestamps: true,
        versionKey: false,
    } 
);

module.exports = mongooose.model('storages', StorageScheme);