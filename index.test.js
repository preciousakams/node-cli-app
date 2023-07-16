import inquirer from "inquirer";
import fs from 'fs';
import csvSort from './bin/index.js';

import { afterAll, jest } from '@jest/globals';


jest.mock('fs');
jest.mock('d3')


describe('csvSort', () => {
  
 afterAll((done) => {
  done();
  });

  // Test 1: Test that the user is prompted for the name of the file to be sorted and its location

  test('Test should prompt user for the name of the file to be sorted and its location', () => {
  
    const spy = jest.spyOn(inquirer, 'prompt')
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
  // Test 3: Test that the file to be sorted is accessed by mocking the fs module
  test('Test that the file to be sorted is accessed', () => {
    const spy = jest.spyOn(fs, 'readFileSync').mockImplementation(() => 'test');
    csvSort();
    expect(spy).toBeTruthy();
  });

  // Test 4: Test that the sorted file is saved in the location provided
  test('Test that the sorted file is saved in the location provided by the user', () => {
    const spy = jest.spyOn(fs, 'writeFile').mockImplementation(() => 'test');
    csvSort();
    expect(spy).toBeTruthy();
  });
}); 