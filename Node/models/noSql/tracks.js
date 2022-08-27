
const mongooose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const TracksScheme = new mongooose.Schema(
    {
        name: {
            type: String, 
        },
        album: {
            type: String,
        },
        cover: {
            type: String,
            validate: {
                validator: (req) => {
                    return true;
                },
                message: 'Url Error',
            },
        },
        artist: {
            name: {
                type: String,
            },
            nickname: {
                type: String,
            },
            nationality: {
                type: String,
            },
        },
        duration: {
            start: {
                type: Number,
            },
            end: {
                type: Number,
            },
        },
        mediaId: {
            type: mongooose.Types.ObjectId,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    } 
);

TracksScheme.plugin(mongooseDelete, { overrideMethods: 'all' });
module.exports = mongooose.model('tracks', TracksScheme);