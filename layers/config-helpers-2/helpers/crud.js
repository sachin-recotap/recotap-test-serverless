'use strict';
const mongo = require('/opt/helpers/mongo');
//const mariadb = require('/opt/helpers/mariadb');
const ObjectId = require('/opt/node_modules/mongodb').ObjectId;
const mariadb = require('/opt/node_modules/mariadb');
let pool;

exports.findOneDetails = async (dbName, collection, condition, queryObject = {}) => {
    try {
        const dbObj = await mongo.connectToDatabase(dbName);
        const collectionObj = dbObj.collection(collection);

        var ObjectDetails = await collectionObj.findOne(condition, { projection: queryObject });
        return { type: 'success', result: ObjectDetails };
    } catch (e) {
        var errorMessage = e;
        if (e.response) {
            if (e.response.data) {
                errorMessage = JSON.stringify(e.response.data);
            } else {
                errorMessage = JSON.stringify(e.response);
            }
        }

        return { type: 'failed', result: errorMessage };
    }
};

exports.findNoOfRecords = async (dbName, collection, condition, queryObject = {}) => {
    try {
        const dbObj = await mongo.connectToDatabase(dbName);
        const collectionObj = dbObj.collection(collection);

        var ObjectDetails = await collectionObj.count(condition);
        return { type: 'success', result: ObjectDetails };
    } catch (e) {
        var errorMessage = e;
        if (e.response) {
            if (e.response.data) {
                errorMessage = JSON.stringify(e.response.data);
            } else {
                errorMessage = JSON.stringify(e.response);
            }
        }

        return { type: 'failed', result: errorMessage };
    }
};

exports.findDetails = async (dbName, collection, condition, queryObject = {}) => {
    try {
        const dbObj = await mongo.connectToDatabase(dbName);
        const collectionObj = dbObj.collection(collection);

        var ObjectDetails = await collectionObj.find(condition, { projection: queryObject }).toArray();
        return { type: 'success', result: ObjectDetails };
    } catch (e) {
        var errorMessage = e;
        if (e.response) {
            if (e.response.data) {
                errorMessage = JSON.stringify(e.response.data);
            } else {
                errorMessage = JSON.stringify(e.response);
            }
        }

        return { type: 'failed', result: errorMessage };
    }
};

exports.findDetailsWithLimit = async (dbName, collection, condition, skip = 0, limit = 0, queryObject = {}) => {
    try {
        const dbObj = await mongo.connectToDatabase(dbName);
        const collectionObj = dbObj.collection(collection);

        var ObjectDetails = await collectionObj.find(condition, { projection: queryObject }).skip(skip).limit(limit).toArray();
        return { type: 'success', result: ObjectDetails };
    } catch (e) {
        var errorMessage = e;
        if (e.response) {
            if (e.response.data) {
                errorMessage = JSON.stringify(e.response.data);
            } else {
                errorMessage = JSON.stringify(e.response);
            }
        }

        return { type: 'failed', result: errorMessage };
    }
};

exports.findDetailsWithSortAndLimit = async (dbName, collection, condition, skip = 0, limit = 0,sort = {}, queryObject = {}) => {
    try {
        const dbObj = await mongo.connectToDatabase(dbName);
        const collectionObj = dbObj.collection(collection);

        var ObjectDetails = await collectionObj.find(condition, { projection: queryObject }).skip(skip).sort(sort).limit(limit).toArray();
        return { type: 'success', result: ObjectDetails };
    } catch (e) {
        var errorMessage = e;
        if (e.response) {
            if (e.response.data) {
                errorMessage = JSON.stringify(e.response.data);
            } else {
                errorMessage = JSON.stringify(e.response);
            }
        }

        return { type: 'failed', result: errorMessage };
    }
};

exports.updateOneDetails = async (dbName, collection, condition, queryObject = {}) => {
    if (Object.keys(queryObject).length <= 0) {
        return { type: 'failed', result: 'QueryObjEmpty' }
    }

    try {
        const dbObj = await mongo.connectToDatabase(dbName);
        const collectionObj = dbObj.collection(collection);

        var ObjectDetails = await collectionObj.updateOne(condition, queryObject);
        return { type: 'success', result: ObjectDetails };
    } catch (e) {
        var errorMessage = e;
        if (e.response) {
            if (e.response.data) {
                errorMessage = JSON.stringify(e.response.data);
            } else {
                errorMessage = JSON.stringify(e.response);
            }
        }

        return { type: 'failed', result: errorMessage };
    }
};

exports.upsertDetails = async (dbName, collection, condition, queryObject = {}) => {
    if (Object.keys(queryObject).length <= 0) {
        return { type: 'failed', result: 'QueryObjEmpty' }
    }
    try {
        const dbObj = await mongo.connectToDatabase(dbName);
        const collectionObj = dbObj.collection(collection);

        var ObjectDetails = await collectionObj.updateMany(condition, queryObject, { upsert: true });
        return { type: 'success', result: ObjectDetails };
    } catch (e) {
        var errorMessage = e;
        if (e.response) {
            if (e.response.data) {
                errorMessage = JSON.stringify(e.response.data);
            } else {
                errorMessage = JSON.stringify(e.response);
            }
        }

        return { type: 'failed', result: errorMessage };
    }
};

exports.updateManyDetails = async (dbName, collection, condition, queryObject = {}) => {
    if (Object.keys(queryObject).length <= 0) {
        return { type: 'failed', result: 'QueryObjEmpty' }
    }

    try {
        const dbObj = await mongo.connectToDatabase(dbName);
        const collectionObj = dbObj.collection(collection);

        var ObjectDetails = await collectionObj.updateMany(condition, queryObject);
        return { type: 'success', result: ObjectDetails };
    } catch (e) {
        var errorMessage = e;
        if (e.response) {
            if (e.response.data) {
                errorMessage = JSON.stringify(e.response.data);
            } else {
                errorMessage = JSON.stringify(e.response);
            }
        }

        return { type: 'failed', result: errorMessage };
    }
};

exports.insertOneDetails = async (dbName, collection, queryObject = {}) => {
    if (Object.keys(queryObject).length <= 0) {
        return { type: 'failed', result: 'QueryObjEmpty' }
    }

    try {
        const dbObj = await mongo.connectToDatabase(dbName);
        const collectionObj = dbObj.collection(collection);

        var ObjectDetails = await collectionObj.insertOne(queryObject);
        return { type: 'success', result: ObjectDetails };
    } catch (e) {
        var errorMessage = e;
        if (e.response) {
            if (e.response.data) {
                errorMessage = JSON.stringify(e.response.data);
            } else {
                errorMessage = JSON.stringify(e.response);
            }
        }

        return { type: 'failed', result: errorMessage };
    }
};

exports.insertManyDetails = async (dbName, collection, queryObject = {}) => {
    if (Object.keys(queryObject).length <= 0) {
        return { type: 'failed', result: 'QueryObjEmpty' }
    }

    try {
        const dbObj = await mongo.connectToDatabase(dbName);
        const collectionObj = dbObj.collection(collection);

        var ObjectDetails = await collectionObj.insertMany(queryObject);
        return { type: 'success', result: ObjectDetails };
    } catch (e) {
        var errorMessage = e;
        if (e.response) {
            if (e.response.data) {
                errorMessage = JSON.stringify(e.response.data);
            } else {
                errorMessage = JSON.stringify(e.response);
            }
        }

        return { type: 'failed', result: errorMessage };
    }
};


exports.findDetailsWithAggregate = async (dbName, collection, condition, queryObject, data = {}) => {
    try {
        const dbObj = await mongo.connectToDatabase(dbName);
        const collectionObj = dbObj.collection(collection);



        var ObjectDetails = await collectionObj.aggregate([{
            $unwind: {
                path: '$projects',
            }
        }, {
            '$match': {
                $and: condition
            }
        }, {
            $lookup: {
                from: 'projects', localField: 'projects.project_id', foreignField: '_id', as: 'projectObj'
            }
        }, {
            '$project': {
                queryObject
            }
        }]).toArray();
        //var ObjectDetails = await collectionObj.find(condition, {projection: queryObject}).toArray();
        return { type: 'success', result: ObjectDetails };
    } catch (e) {
        var errorMessage = e;
        if (e.response) {
            if (e.response.data) {
                errorMessage = JSON.stringify(e.response.data);
            } else {
                errorMessage = JSON.stringify(e.response);
            }
        }

        return { type: 'failed', result: errorMessage };
    }
};

exports.findDetailsWithAggregateQuery = async (dbName, collection, aggregateQuery, data = {}) => {
    try {
        const dbObj = await mongo.connectToDatabase(dbName);
        const collectionObj = dbObj.collection(collection);



        var ObjectDetails = await collectionObj.aggregate(aggregateQuery).toArray();
        //var ObjectDetails = await collectionObj.find(condition, {projection: queryObject}).toArray();
        return { type: 'success', result: ObjectDetails };
    } catch (e) {
        var errorMessage = e;
        if (e.response) {
            if (e.response.data) {
                errorMessage = JSON.stringify(e.response.data);
            } else {
                errorMessage = JSON.stringify(e.response);
            }
        }

        return { type: 'failed', result: errorMessage };
    }
};

exports.findDetailsDynamicSegments = async (dbName, collection, condition, queryObject, data = {}) => {
    try {
        const dbObj = await mongo.connectToDatabase(dbName);
        const collectionObj = dbObj.collection(collection);



        var ObjectDetails = await collectionObj.aggregate([
            {
                $unwind: {
                    path: "$projects",
                }
            },
            {
                $match: {
                    $and: condition
                }
            },
            {
                $group: {
                    _id: null,
                    crm_account_ids: { $push: "$crmaccount_id" },
                    crm_contact_array: { $push: "$$ROOT" }
                }
            }
        ]).toArray();
        //var ObjectDetails = await collectionObj.find(condition, {projection: queryObject}).toArray();
        return { type: 'success', result: ObjectDetails };
    } catch (e) {
        var errorMessage = e;
        if (e.response) {
            if (e.response.data) {
                errorMessage = JSON.stringify(e.response.data);
            } else {
                errorMessage = JSON.stringify(e.response);
            }
        }

        return { type: 'failed', result: errorMessage };
    }
};
exports.findDistinctDetails = async (dbName, collection, condition, queryObject = {}) => {
    try {
        const dbObj = await mongo.connectToDatabase(dbName);
        const collectionObj = dbObj.collection(collection);

        var ObjectDetails = await collectionObj.distinct(condition, { projection: queryObject }).toArray();
        return { type: 'success', result: ObjectDetails };
    } catch (e) {
        var errorMessage = e;
        if (e.response) {
            if (e.response.data) {
                errorMessage = JSON.stringify(e.response.data);
            } else {
                errorMessage = JSON.stringify(e.response);
            }
        }

        return { type: 'failed', result: errorMessage };
    }
};


/**
 * For Bombora Database Query Transactions
 */

exports.findBomboraOneDetails = async (dbName, collection, condition, queryObject = {}) => {
    try {
        const dbObj = await mongo.connectToBomboraDatabase(dbName);
        const collectionObj = dbObj.collection(collection);

        var ObjectDetails = await collectionObj.findOne(condition, { projection: queryObject });
        return { type: 'success', result: ObjectDetails };
    } catch (e) {
        var errorMessage = e;
        if (e.response) {
            if (e.response.data) {
                errorMessage = JSON.stringify(e.response.data);
            } else {
                errorMessage = JSON.stringify(e.response);
            }
        }

        return { type: 'failed', result: errorMessage };
    }
};

exports.findBomboraDetails = async (dbName, collection, condition, queryObject = {}) => {
    try {
        const dbObj = await mongo.connectToBomboraDatabase(dbName);
        const collectionObj = dbObj.collection(collection);

        var ObjectDetails = await collectionObj.find(condition, { projection: queryObject }).toArray();
        return { type: 'success', result: ObjectDetails };
    } catch (e) {
        var errorMessage = e;
        if (e.response) {
            if (e.response.data) {
                errorMessage = JSON.stringify(e.response.data);
            } else {
                errorMessage = JSON.stringify(e.response);
            }
        }

        return { type: 'failed', result: errorMessage };
    }
};

exports.findBomboraDetailsWithLimit = async (dbName, collection, condition, skip = 0, limit = 0, queryObject = {}) => {
    try {
        const dbObj = await mongo.connectToBomboraDatabase(dbName);
        const collectionObj = dbObj.collection(collection);

        var ObjectDetails = await collectionObj.find(condition, { projection: queryObject }).skip(skip).limit(limit).toArray();
        return { type: 'success', result: ObjectDetails };
    } catch (e) {
        var errorMessage = e;
        if (e.response) {
            if (e.response.data) {
                errorMessage = JSON.stringify(e.response.data);
            } else {
                errorMessage = JSON.stringify(e.response);
            }
        }

        return { type: 'failed', result: errorMessage };
    }
};
exports.createBomboraAccountsIndex = async (dbName, indexObj, indexName = {}) => {
    var msg;
    try {
        const dbObj = await mongo.connectToDatabase(dbName);
        if (dbObj.bomboraaccounts.indexes.find({ name: indexName, ns: { $regex: '.collection$' } }).count() == 0) {
            msg = dbObj.collectionName.createIndex({ indexObj }, { name: indexName })
        }
        return { type: 'success', result: msg };
    } catch (e) {

        return { type: 'failed', result: msg };
    }
};

exports.createBomboraIndex = async (dbName, collectionName, indexObj, indexName = {}) => {
    var msg;
    try {
        const dbObj = await mongo.connectToDatabase(dbName);
        var collectionName = dbObj.collection(collectionName)
        msg = collectionName.createIndex(indexObj, indexName)
        return { type: 'success', result: msg };
    } catch (e) {

        return { type: 'failed', result: msg };
    }
};

exports.deleteManyDetails = async (dbName, collection, condition = {}) => {
    /* if (Object.keys(queryObject).length <= 0) {
         return { type: 'failed', result: 'QueryObjEmpty' }
     }*/

    try {
        const dbObj = await mongo.connectToDatabase(dbName);
        const collectionObj = dbObj.collection(collection);

        var ObjectDetails = await collectionObj.deleteMany(condition);
        return { type: 'success', result: ObjectDetails };
    } catch (e) {
        var errorMessage = e;
        if (e.response) {
            if (e.response.data) {
                errorMessage = JSON.stringify(e.response.data);
            } else {
                errorMessage = JSON.stringify(e.response);
            }
        }

        return { type: 'failed', result: errorMessage };
    }
};