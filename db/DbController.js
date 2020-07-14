const db = require('./config');
class DbController {
    constructor() {
        this.Instance;
    }
    static getInstance = () => {
        if (this.Instance == null)
            return new DbController();
        else
            return this.Instance;
    }
    //create db
    createDb = async (title, callback) => {
        let sql = `CREATE DATABASE ${title};`;
        db.query(sql, callback);
    }
    //create table//coal cost
    createCoalCostTable = async (callback) => {
        let sql = `CREATE TABLE COAL_COST_TABLE(
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            cost_title varchar(200) DEFAULT "COAL_COST",
            coal_weight double,
            coal_total_price double,
            coal_arrival_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

            payment_amount double ,
            payment_due_amount double ,
            payment_date  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            created_by_uid INT,
            updated_by_uid INT
            );`;
        db.query(sql, callback);
    }
    //create soil cost table
    createSoilCostTable = async (callback) => {
        let sql = `CREATE TABLE SOIL_COST_TABLE(
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            cost_title varchar(200) DEFAULT "SOIL_COST",
            contractor_name varchar(200),
            soil_car_quantity double,
            soil_per_car_price double,

            payment_amount double ,
            payment_due_amount double ,
            payment_date  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            created_by_uid INT,
            updated_by_uid INT
        );`;
        db.query(sql, callback);
    }
    //create ____ cost table


}

module.exports = DbController;