#!/usr/bin/env node

'use strict';

const R = require('ramda');

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/database';

let duplicates = [];

MongoClient.connect(url, function(err, db) {
    countUniqElements(db, function() {
        db.close();
    });
});

var countUniqElements = function(db, callback) {
    db.collection('collection').aggregate([
        { $group: {
            _id: "$element_id",
            duplicates: { $push: "$_id" },
            count: { $sum: 1 }
        }},
        { $match: {
            count: { $gt: 1 }
        }}
    ]).toArray(function(err, elements) {
        const delElements = R.map(R.compose(R.nth(1), R.prop('duplicates')), elements);
        db.collection('collection').remove({'_id': {'$in': delElements}});
        console.log(delElements);
        callback(elements);
    });
};
