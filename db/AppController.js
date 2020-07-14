const db = require('./config');
class AppController {
    constructor() {
        this.Instance;
    }
    static getInstance = () => {
        if (this.Instance == null)
            return new AppController();
        else
            return this.Instance;
    }
    //insert into database
    insert = async (table, obj, callback) => {
        let sql = `INSERT INTO ${table} SET ?`;
        db.query(sql, obj, callback);
    }
    //update a value
    update = async (table, obj, callback) => {
        let sql = `UPDATE ${table} SET ? WHERE id = ?`;
        db.query(sql, [obj, obj.id], callback);
    }

    //get list of rows
    getList = async (table, callback) => {
        let sql = `SELECT * from ${table}`;
        db.query(sql, callback);
    }
    //get single row
    get = async (table, id, callback) => {
        let sql = `SELECT * from ${table} where id=?`;
        db.query(sql, [id], callback);
    }


}

module.exports = AppController;