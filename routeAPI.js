
var fs = require("fs");
var notesData = getNotes();

function getNotes() {
    let data = fs.readFileSync('./db/db.json', 'utf8');

    let notes = JSON.parse(data);

    // Each note ID will match Index
    for (let i = 0; i < notes.length; i++) {
        notes[i].id = '' + i;    }
    return notes;
}

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        notesData = getNotes();
        res.json(notesData);
    });

    app.post("/api/notes", function (req, res) {
        notesData.push(req.body);
        fs.writeFileSync('./db/db.json', JSON.stringify(notesData), 'utf8');
        res.json(true);
    });