# CSV-Sort

> This is a command line tool that sorts a CSV file by a given column and order (For now it only sorts 3-column CSV files and sums up the third column based on the sorted data). 

> It takes in the path to the CSV file and the path to the location to save the sorted CSV file as input from the command line or terminal and returns the sorted CSV file.

> The tool is built with Node.js and Inquirer.js for the CLI and D3.js for the sorting algorithm. The application is tested with Jest.

***
### CSV file to be sorted
> ![CSV file to be sorted](<Medic take-home exercise - Google Chrome 7_16_2023 5_14_07 PM.png>)

### Sorted CSV file
> ![Sorted CSV File](<Medic take-home exercise - Google Chrome 7_16_2023 5_18_35 PM.png>)

***
## Built With
* Node.js
* Inquirer.js
* D3.js
  
***
## Getting Started

Clone the repository to get a local copy
From the cloned project directory
* Run `npm install` to install all dependencies
* Run `npm install -g .` from the project directory to install the CLI tool globally
* Run `npm test` to run the unit tests

***
## Usage
* Run `csv` from the terminal or command line to run the tool if you installed it globally
* Run `node .` from the project directory to run the tool locally from the project directory
  
* First Prompt is to enter the path to the CSV file you want to sort (eg.'/Documents/textfile.csv' or 'E:/Documents/textfile.csv' if you are on a different drive) 
* Second Prompt is to enter the location to save the sorted CSV file (eg.'/Documents' or 'E:/Documents' if you are on a different drive)

***  
### Prerequisites
* Node.JS
  
***
### Author

👤 Onyeagoziri Precious Akams

* GitHub: [@preciousakams](https://github.com/preciousakams)
* Twitter:[@precious_akams](https://twitter.com/precious_akams)
* LinkedIn:[Onyeagoziri Akams](https://www.linkedin.com/in/onyeagoziri-akams/)
* AngelList:[Onyeagoziri Akams](https://angel.co/u/onyeagoziri-akams)
  
***
### 🤝 Contributing
Contributions, issues, and feature requests are welcome!

***
Show your support
Give a ⭐️ if you like this project!
