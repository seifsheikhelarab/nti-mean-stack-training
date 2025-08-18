const mysql = require("mysql2/promise");

async function main() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "northwind",
  });

  const [rows] = await connection.execute(
    "SELECT * FROM `products` WHERE `UnitPrice`>=90;",
    [1]
  );
  console.log(rows);
  return;
}

main();
