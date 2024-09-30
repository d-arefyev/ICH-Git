import fs from "fs";

// Create a file 'info.txt' and write text into it
fs.writeFile('info.txt', 'Node.js is awesome!', (err) => {
    if (err) {
        // Handling an error if a file could not be created or data could not be written to it
        console.error('Error writing to file:', err);
        return;
    }
    // Message indicating that data has been successfully written to the file
    console.log('File "info.txt" successfully created and written');

    // Read the contents of the file 'info.txt'
    fs.readFile('info.txt', 'utf8', (err, data) => {
        if (err) {
            // Handling an error if the file could not be read
            console.error('Error reading file:', err);
            return;
        }
        // We output the contents of the file to the console
        console.log('Contents of the file "info.txt":');
        console.log(data);
    });
});
