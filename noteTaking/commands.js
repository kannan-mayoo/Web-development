const fs = require('fs');

const readFile = (functionName) => {
    try {
        return JSON.parse(fs.readFileSync('notes.json'));
    } catch (e) {
        return [];
    }
}

const add = (title, body) => {
    let noteList = readFile('notes.json');

    let index = noteList.findIndex((x) => x.title === title);
    if (index === -1) {
        noteList.push({ title, body });
        console.log(noteList);
    } else {
        noteList[index].body += ", " + body;
    }

    fs.writeFileSync('notes.json', JSON.stringify(noteList));
}

const remove = (title) => {
    let noteList = readFile('notes.json');


    const filteredList = noteList.filter((x) => x.title !== title);
    console.log(filteredList);

    fs.writeFileSync('notes.json', JSON.stringify(filteredList));
}


const list = () => {
    let noteList = readFile('notes.json');


    // let index = noteList.findIndex((x) => x.title === title);
    console.log(noteList);
}
const bodyContents = (title) => {
    let noteList = readFile('notes.json');


    let index = noteList.findIndex((x) => x.title === title);

    if (index !== -1) {
        console.log(noteList[index].body);
    }
}



module.exports = {
    add,
    remove,
    list,
    bodyContents
}