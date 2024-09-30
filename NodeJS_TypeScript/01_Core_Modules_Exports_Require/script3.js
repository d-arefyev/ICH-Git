const fs = require('fs');
// относительные пути и абсолютные

// относительные пути
// example.txt     ./example.txt

// абсолютный путь
// C:/nodejs-course/example.txt       https://www.googlefont.com/helvetica/file.woff

fs.readFile('example.txt', 'utf-8', (error, data) => {
//  условие    операция 1 если true  операция 2 если false
    // error ? console.log(error) : console.log(data);
    if(error){
        console.error(error);
        return;
    }
    console.log(data);
}); 