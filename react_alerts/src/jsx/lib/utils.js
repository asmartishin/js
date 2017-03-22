const R = require('ramda');

/**
 * @param {Object}
 * @returns {String}
 */
exports.getFirstKey = R.compose(R.head, R.keys);

/**
 * @param {Object}
 * @returns {Boolean}
 */
exports.pathExists = (obj, prop) => {
    var parts  = prop.split('.');
    for (const part of parts) {
        if (obj !== null && typeof obj === 'object' && part in obj) {
            obj = obj[part];
        } else {
            return false;
        }
    }
    return true;
};

/**
 * @param {Array}
 * @returns {Array}
 */
exports.reverseArray = R.reverse;
