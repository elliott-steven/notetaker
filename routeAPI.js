
var fs = require("fs");
var noteInput = getNotes();

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
        noteInput = getNotes();
        res.json(noteInput);
    });
    app.post("/api/notes", function (req, res) {
        noteInput.push(req.body);
        fs.writeFileSync('./db/db.json', JSON.stringify(noteInput), 'utf8');
        res.json(true);
    });
    app.delete("/api/notes/:id", function (req, res) {
        noteInput = deleteNote(req.id);
        fs.writeFileSync('./db/db.json', JSON.stringify(noteInput), 'utf8');
        res.json(noteInput);
    });
}