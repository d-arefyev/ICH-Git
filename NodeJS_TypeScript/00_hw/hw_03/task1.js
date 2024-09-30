import fs from "fs";

// Create a catalog
fs.mkdir('myFolder', (err) => {
    if (err) {
        // Handling an error if the directory could not be created
        console.error('Error creating directory:', err);
        return;
    }
    // Message that the directory was created successfully
    console.log('The directory "myFolder" was successfully created');

    // Delete the directory 'myFolder'
    setTimeout(() => {
        // Deleting directory 'myFolder'
        fs.rmdir('myFolder', (err) => {
            if (err) {
                // Handling an error if a directory cannot be deleted
                console.error('Error deleting directory:', err);
                return;
            }
            // Message that the directory was successfully deleted
            console.log('The directory "myFolder" was successfully deleted');
        });
    }, 3000);
});


/* Рекурсивное создание папки со вложенностями (такое удаление не рекомендуется)

import fs from "fs";

// Create a catalog
fs.mkdir('./myFolder/second/third', { recursive: true }, (err) => {
    if (err) {
        // Handling an error if the directory could not be created
        console.error('Error creating directory:', err);
        return;
    }
    // Message that the directory was created successfully
    console.log('The directory "myFolder" was successfully created');

    // Delete the directory 'myFolder'
    setTimeout(() => {
        // Deleting directory 'myFolder'
        fs.rmdir('myFolder', { recursive: true }, (err) => {
            if (err) {
                // Handling an error if a directory cannot be deleted
                console.error('Error deleting directory:', err);
                return;
            }
            // Message that the directory was successfully deleted
            console.log('The directory "myFolder" was successfully deleted');
        });
    }, 3000);
});

*/
