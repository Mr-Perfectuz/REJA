const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  // "mongodb+srv://ziyodovanvar1999:uEdzu4SGtE0MX7yk@cluster0.cgucseg.mongodb.net/Reja";

  // new one
  "mongodb+srv://ziyodovanvar1999:v16c41PgWTNhPSWz@mit.kpqoeyc.mongodb.net/Reja";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("Error on connection MongoDb");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;
      // console.log(client);
      const app = require("./app");
      const server = http.createServer(app);

      let PORT = process.env.PORT || 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running on port ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);

// Start line  URL qismi
//  HTTP request header
//  Request body

// MVC , injections ,middleware

// cluster = database = collection
