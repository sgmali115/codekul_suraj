"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SqlTable = /** @class */ (function () {
    function SqlTable() {
    }
    Object.defineProperty(SqlTable.prototype, "sql", {
        get: function () {
            return this._sql;
        },
        set: function (sql) {
            this._sql = sql;
        },
        enumerable: true,
        configurable: true
    });
    SqlTable.prototype.query = function (hi, sql) {
        if (sql === void 0) { sql = 'sdsdlkgjsflkfjg'; }
        console.log("Executing SQL " + sql);
    };
    return SqlTable;
}());
exports.SqlTable = SqlTable;
var sqlTab = new SqlTable();
sqlTab.sql = 'select * from tabs';
console.log(sqlTab.sql);
sqlTab.query("slvvjslk");
sqlTab.query();
