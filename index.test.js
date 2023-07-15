import inquirer from "inquirer";
import * as fs from'fs';
import * as d3 from 'd3';
import { csvSort } from './bin/index.js';
import { jest } from '@jest/globals';


 describe('csvSort', () => {
  
// Test 1: Test that the user is prompted for the name of the file to be sorted and its location

  it('should prompt user for the name of the file to be sorted and its location', () => {
    const spy = jest.spyOn(inquirer, 'prompt');
      csvSort();
     expect(spy).toHaveBeenCalled();
    
   });

// Test 2: Test that the user is prompted for the location to save the sorted file
test('Test that the user is prompted for the location to save the sorted file', () => {
  const spy = jest.spyOn(inquirer, 'prompt');
  csvSort();
  expect(spy).toHaveBeenCalled();
}
);


});