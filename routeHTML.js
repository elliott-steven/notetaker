var path = require("path");

module.exports = function(app) {

  //This should make * GET `/notes` return the notes.html file
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  });

  //This should make * GET `*` return the index.html file
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname + "/public/index.html"));
  });
};