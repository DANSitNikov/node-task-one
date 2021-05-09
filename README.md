# node-task-one

## How to use

### Installation
* Clone repository to your local computer with this command: git clone (repository)
* Go to "develop" branch: git checkout develop
* Then you need to install dependencies: npm i or npm install
    
### Usage
* node caesar-cli-tool -s 1 -a encode/decode - this command let you to use caesar-cipher right in command line
* node caesar-cli-tool -s 1 -a encode/decode -i input.txt - this command will read text from txt file and show in command line
* node caesar-cli-tool -s 1 -a encode/decode -o output.txt - this command will read text from command line and write it to txt file
* node caesar-cli-tool -s 1 -a encode/decode -o output.txt -i input.txt - this command will read text from txt file and write it to txt file

### Options
* -s or --shift - this parameter is responsible for the character shift (can be negative)
* -a or --action - this parameter is responsible for the oparation (encode/decode)
* -i or --input - this parameter is responsible for the input text file
* -o or --output - this parameter is responsible for the output text file
