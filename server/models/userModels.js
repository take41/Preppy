// File to connect Postgres ////////////
const { Pool } = require('pg');

/////// ElephantSQL url /////////
const PG_URI = 'postgres://bfzufuuy:QElbK_fE0_P6HgHwshur6xw61n4IAGWZ@ziggy.db.elephantsql.com:5432/bfzufuuy';

// Creates a new pool using the connection string
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};

// //////Creates Users Table
// const createUsersTable = () => {
//   const tableText = 
//   `CREATE TABLE IF NOT EXISTS 
//   users_table (
//     _id serial NOT NULL,
//     username varchar NOT NULL,
//     email varchar UNIQUE NOT NULL,
//     password varchar NOT NULL,
//     meals_id bigint,
//     CONSTRAINT "users_table_pk" PRIMARY KEY ("_id")
//   )`;
//   //queries the database to create the table
//   pool.query(tableText)
//     .then((res) => {
//       console.log(res);
//       pool.end();
//     })
//     .catch((err) => {
//       console.log(err);
//       pool.end();
//     });
// };

// ////Creates meals table
// const mealsTable = () => {
//   const tableText = 
//   `CREATE TABLE IF NOT EXISTS
//   meals_table (
//     _id serial NOT NULL,
//     meal_name varchar,
//     ingredients_id bigint,
//   )`;

//   pool.query(tableText)
//     .then((res) => {
//       console.log(res);
//       pool.end();
//     })
//     .catch((err) => {
//       console.log(err);
//       pool.end();
//     })
// };

// //Creates ingredients table
// const ingredientsTable = () => {
//   const tableText = 
//   `CREATE TABLE IF NOT EXISTS
//   ingredients_table (
//     _id serial NOT NULL,
//     ingredients_name varchar
//   )`;

//   pool.query(tableText)
//     .then((res) => {
//       console.log(res);
//       pool.end();
//     })
//     .catch((err) => {
//       console.log(err);
//       pool.end();
//     })
// };

// const createTables = () => {
//   createUsersTable();
//   mealsTable();
//   ingredientsTable();
// }

// //////// Still need to make delete functionality for when use deletes a meal entry //////////////////// 





// //// exporting fuction to query data from database ////
// module.exports = {
//   createUsersTable,
//   mealsTable,
//   ingredientsTable,
//   createTables,
// };

