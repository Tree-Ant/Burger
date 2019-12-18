var connection = require("../config/connection.js");
// ============IMPORT============
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function (table, cols, vals, cb) {
        var queryString = `INSERT INTO ${table} ("${cols}") VALUES ("${printQuestionMarks(vals.length)}")`;
        console.log(queryString);
        connection.query(queryString, (err, res) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function (table, objColVals, condition, cb) {
        const queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;
        connection.query(queryString, (err, res) => {
            if (err) {
                throw err;           
            }

            cb(result);
    });
    }
};

// ============EXPORT============
module.exports = orm;

