var Database = /** @class */ (function () {
    function Database(data) {
        this.data = data;
    }
    Database.getInstance = function (data) {
        if (!Database.exists) {
            Database.instance = new Database(data);
            Database.exists = true;
        }
        return Database.instance;
    };
    Database.prototype.getData = function () {
        return this.data;
    };
    Database.exists = false;
    return Database;
}());
var mongo = Database.getInstance('MongoDB');
console.log(mongo.getData());
var mysql = Database.getInstance('MySQL');
console.log(mysql.getData());
