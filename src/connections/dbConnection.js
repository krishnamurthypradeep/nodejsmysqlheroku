const mysql = require('promise-mysql');

const dbConfig ={
    user:'bf1d661d1bdd60',
    password:'af940f20',
    database: 'heroku_cb422b84ff43fef',
    host: 'us-cdbr-east-03.cleardb.com',
    connectionLimit:10
}

module.exports = async ()=>{
    try{
        let pool;
        let connection;
        if (pool) connection = pool.getConnection();
        else{
            pool = await mysql.createPool(dbConfig);
            connection = pool.getConnection();
        }
        return connection;

    }catch(e){
        throw e;
    }
}