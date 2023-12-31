#!/usr/bin/env node

import inquirer from "inquirer";
import * as fs from 'fs';
import * as d3 from 'd3';

export default function csvSort() {


  inquirer
  
    // Recieves the file name and location of the file to be sorted and the location to save the sorted file
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Name Of File (Include The File's Location e.g. `/Documents/textfile.csv`)?"
      },
      {
        type: "input",
        name: "newFileLocation",
        message: "Location To Save Sorted File ( e.g. `/Documents`)?"
      }
    ])
    .then(answers => {

      const file = answers["name"];
      const newFileLocation = answers["newFileLocation"];
      const date = new Date();
      const time = date.getTime();
      const newFileName = `SortedFile-${time}.csv`;

      // Reads the file and sorts it by the first column and then the second column
      const data = d3.csvParseRows(fs.readFileSync(file, 'utf8'))
      const flatRollup = d3.flatRollup(data, v => d3.sum(v, d => d[2]).toFixed(2), d => d[0], d => d[1])

      // Converts the sorted file to csv format and saves it in the location provided
      const newCsvFile = d3.csvFormatBody(flatRollup);
      fs.writeFile(`${newFileLocation}/${newFileName}`, newCsvFile, (err) => {
        if (err) {
          throw err;
        }
        else {
          console.log('The Sorted File Is Saved In The Location Provided');
        }
      }
      );

    })
    .catch(error => {
      if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
      } else {
        console.log(error);
      }
    }
    );
};
csvSort();




