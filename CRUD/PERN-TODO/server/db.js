const Pool = require("pg").Pool;

const pool = new Pool({ //FILL IN AFTER POSTGRES INSTALLED
    user: "postgres", //USERNAME CREATED FOR POSTGRESQL
    password: "", //PASSWORD CREATED FOR POSTGRES
    host: "localhost",
    databse: "pernstack",
    port: 5432,
});

module.exports = pool;