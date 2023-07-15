#!/usr/bin/env node

import inquirer from "inquirer";
import * as fs from'fs';
import * as d3 from 'd3';

export function csvSort() {

inquirer
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
      
      const data= d3.csvParseRows(fs.readFileSync(file, 'utf8'))
      const flatRollup = d3.flatRollup(data, v => d3.sum(v, d =>  d[2]).toFixed(2), d => d[0], d => d[1])
      const newCsvFile = d3.csvFormatBody(flatRollup);
    
      fs.writeFile(`${newFileLocation}/newSortedFile.csv`, newCsvFile, (err) => {
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
    if(error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      console.log("Something else went wrong");
    }
  }
  );
};

csvSort();
