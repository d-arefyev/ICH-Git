import fs from 'fs';
import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    // Преобразуем данные в JSON строку с отступами для удобочитаемости
    const jsonData = JSON.stringify(response.data, null, 2);

    // Пишем данные в JSON файл
    fs.writeFile('./database/posts.json', jsonData, (error) => {
      if (error) {
        console.error('Error writing to JSON file:', error);
      } else {
        console.log('Data successfully written to JSON file.');
      }
    });
  })
  .catch((error) => {
    // Обработка ошибок запроса
    console.error('Error fetching data:', error);
  });




// import fs from 'fs';
// import axios from 'axios';

// axios.get('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => {
//     // Пишем данные в файл, обработка ошибок перенесена внутрь функции
//     fs.writeFile('./database/posts.txt', JSON.stringify(response.data), (error) => {
//       if (error) {
//         console.error('Error writing to file:', error);
//       } else {
//         console.log('Data successfully written to file.');
//       }
//     });
//   })
//   .catch((error) => {
//     // Добавлена обработка ошибки запроса
//     console.error('Error fetching data:', error);
//   });