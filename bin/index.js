#!/usr/bin/env node

import inquirer from "inquirer";
import * as fs from'fs';
import * as d3 from 'd3';
// import chalk from "chalk";
// import boxen from "boxen";


// const greeting = chalk.cyan.bold("Hello!");


inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "what's the file name (include the file's location e.g. `/Documents/textfile.csv`)?"
    },
    {
      type: "input",
      name: "newFileLocation",
      message: "What's the location for the sorted document ( e.g. `/Documents`)?"
    }
  ])
  .then(answers => {
    // console.log(`${answers["name"]}`);
    const file = answers["name"];
    const newFileLocation = answers["newFileLocation"];
      fs.copyFile(file, `./file.csv`, (err) => {
        if (err) {
          throw err;
        } 
        else {
          console.log('file was copied to destination');
        }
    
      const data= d3.csvParseRows(fs.readFileSync(file, 'utf8'))
      const flatRollup = d3.flatRollup(data, v => d3.sum(v, d =>  d[2]).toFixed(2), d => d[0], d => d[1])
      const newCsvFile = d3.csvFormatBody(flatRollup);
          console.log(newCsvFile);
      fs.writeFile(`${newFileLocation}/newFile.csv`, newCsvFile, (err) => {
        if (err) {
          throw err;
        } 
        else {
          console.log('file was written to destination');
        }
      }
      );
        


  });
});
//   const boxenOptions = {
//     padding: 1,
//     margin: 1,
//     borderStyle: "none",
//    //  backgroundColor: "#ffffff"
//    };
//    const msgBox = boxen( boxenOptions );

// console.log(msgBox);
