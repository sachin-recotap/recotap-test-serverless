
'use strict';
const timeseries_mongo = require('/opt/helpers/timeseries_mongo');
const ObjectId = require('/opt/node_modules/mongodb').ObjectId;

exports.findDetailsWithTimeseriesReports = async (dbName, collection, condition, queryObject, data= {}) => {
    try {
        const dbObj = await timeseries_mongo.connectToDatabase(dbName);
        const collectionObj = dbObj.collection(collection);        


        var ObjectDetails = await collectionObj.aggregate([ {
            '$match': {
                $and: condition
            }
            }, {
                '$project': {
                    queryObject
                },
                
            },{ $limit : 5 }]).toArray();
        //var ObjectDetails = await collectionObj.find(condition, {projection: queryObject}).toArray();
        return {type: 'success',  result: ObjectDetails};
    } catch (e) {
        var errorMessage = e;
        if (e.response) {
            if (e.response.data) {
                errorMessage = JSON.stringify(e.response.data);
            } else {
                errorMessage = JSON.stringify(e.response);
            }
        }

        return {type: 'failed',  result: errorMessage};
    }
};
exports.findDetails = async (dbName, collection, condition, queryObject = {}) => {
    try {
        const dbObj = await timeseries_mongo.connectToDatabase(dbName);
        const collectionObj = dbObj.collection(collection);

        var ObjectDetails = await collectionObj.find(condition, {projection: queryObject}).toArray();
        return {type: 'success',  result: ObjectDetails};
    } catch (e) {
        var errorMessage = e;
        if (e.response) {
            if (e.response.data) {
                errorMessage = JSON.stringify(e.response.data);
            } else {
                errorMessage = JSON.stringify(e.response);
            }
        }

        return {type: 'failed',  result: errorMessage};
    }
};

exports.findDetailsWithLimit = async (dbName, collection, condition, skip = 0, limit = 0, queryObject = {}) => {
    try {
        const dbObj = await timeseries_mongo.connectToDatabase(dbName);
        const collectionObj = dbObj.collection(collection);

        var ObjectDetails = await collectionObj.find(condition, {projection: queryObject}).skip(skip).limit(limit).toArray();
        return {type: 'success',  result: ObjectDetails};
    } catch (e) {
        var errorMessage = e;
        if (e.response) {
            if (e.response.data) {
                errorMessage = JSON.stringify(e.response.data);
            } else {
                errorMessage = JSON.stringify(e.response);
            }
        }

        return {type: 'failed',  result: errorMessage};
    }
};