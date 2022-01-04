const yargs = require('yargs');
const fs = require('fs');

const command = yargs.argv._[0];
const title = yargs.argv.title;
const body = yargs.argv.body;


const commands = require('./commands');


if (command === 'add') {
    if (title && body) {
        commands.add(title, body);
    }
} else if (command === 'remove') {
    if (title) {
        commands.remove(title);
    }

} else if (command === 'list') {
    commands.list();
} else if (command === 'bodyContents') {
    if (title) {
        commands.bodyContents(title);
    }
} else {

}