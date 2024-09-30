import fs from 'fs';
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

// Get the file name from the FILENAME environment variable
const fileName = process.env.FILENAME;

// Text to be written into the file
const textToWrite = 'Hello, world! This is some text from the file.';

// Create a text file and write the text into it
fs.writeFile(fileName, textToWrite, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log(`File ${fileName} has been successfully created and written.`);

    // Read the contents of the file and output it to the console
    fs.readFile(fileName, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log(`Contents of the file ${fileName}:`);
        console.log(data);
    });
});
