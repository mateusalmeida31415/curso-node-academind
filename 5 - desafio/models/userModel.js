const fs = require("fs");
const path = require("path");

const p = path.join(__dirname, "..", "data", "users.json");

module.exports = class User {
  constructor(n) {
    this.name = n;
  }

  save() {
    let users = [];
    fs.readFile(p, (error, fileContent) => {
      if (fileContent) {
        users = JSON.parse(fileContent);
      }

      users.push(this);

      fs.writeFile(p, JSON.stringify(users), (error) => {
        console.log(error);
      });
    });

    return true;
  }

  static fetchAll(cb) {
    fs.readFile(p, (error, fileContent) => {
      if (!fileContent) {
        return cb([]);
      }

      return cb(JSON.parse(fileContent));
    });
  }
};
