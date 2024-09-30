// ------------------------------------ axios ------------------------------------

// https://axios-http.com/ru/docs/intro

// Это популярная библиотека для выполнения HTTP-запросов. В Node.js она позволяет
// отправлять запросы к различным веб-сервисам и API, а также обрабатывать ответы.

// get-запрос
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// post-запрос
axios.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'foo',
  body: 'bar',
  userId: 1
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error posting data:', error);
  });

// Обработка заголовков и параметров
axios.get('https://jsonplaceholder.typicode.com/posts', {
  params: { userId: 1 },
  headers: { 'Authorization': 'Bearer my-token' }
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  
