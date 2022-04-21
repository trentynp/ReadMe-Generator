const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./md-folder/generateMarkdown')

function userInput(){
    return inquirer.prompt([
    {name: 'title',
    message: 'What is the title of this application?',
    type: 'input'},
    {name: 'description',
    message: 'What does this application do?',
    type: 'input'},
    {name: 'install',
    message: 'How do I install this application?',
    type: 'input'},
    {name: 'usage',
    message: 'How do I use this application?',
    type: 'input'},
    {name: 'username',
    message: 'What is your Github username?',
    type: 'input'},
    {name: 'email',
    message: 'What is your e-mail?',
    type: 'input'},
    {name: 'fileName',
    message: 'What do you want to call this readme?',
    type: 'input'},
])};

function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data, 
    (err) => err ? console.error(err) : console.log(`${fileName}.md has been generated.`))
}

async function init() {
    let answers = await userInput();
    writeToFile((answers.fileName),(generateMarkdown(answers)));
}

init();