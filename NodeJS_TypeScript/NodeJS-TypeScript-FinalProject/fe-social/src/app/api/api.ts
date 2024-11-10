import axios from "axios";

// Указываем базовый URL
const base_url = "http://localhost:5005/api/";

// Создаем экземпляр axios
export const $api = axios.create({ baseURL: base_url });

// Интерсептор для добавления токена в заголовки всех запросов
$api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  
  // Если токен существует, добавляем его в заголовок Authorization
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    // Если токен не найден, можно добавить обработку (например, редирект на страницу входа)
    console.warn("Токен не найден, запрос без авторизации.");
  }

  return config;
}, (error) => {
  // Обработка ошибок запроса
  return Promise.reject(error);
});

// Интерсептор для обработки ответа
$api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      // Сервер вернул ответ с ошибкой
      if (error.response.status === 401) {
        // Например, если это ошибка 401, можно перенаправить на страницу авторизации
        console.error("Ошибка авторизации, токен недействителен.");
        // Можно сделать что-то вроде:
        // window.location.href = "/login"; // Перенаправление на страницу входа
      } else {
        console.error("Произошла ошибка:", error.response.data);
      }
    } else {
      // Ошибка, не связанная с ответом сервера
      console.error("Ошибка сети:", error.message);
    }
    
    return Promise.reject(error);
  }
);





// 1-st V
// import axios from "axios";

// const base_url = "http://localhost:5005/api/";
// // const base_url = "https://be-social-cxau.onrender.com/api";

// export const $api = axios.create({ baseURL: base_url });

// $api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token"); // ???
//   config.headers.Authorization = token ? `Bearer ${token}` : "";
//   return config;
// });



// // 2-nd V
// import axios from "axios";

// const base_url = "http://localhost:5005/api"; // development
// const base_url_prod = "https://be-social-cxau.onrender.com/api";

// //
// export const $api = axios.create({ baseURL: base_url || base_url_prod });

// $api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token"); // ???
//   config.headers.Authorization = token ? `Bearer ${token}` : "";
//   return config;
// });



// // 3-d V
// import axios from "axios";

// // Получаем базовый URL из переменной окружения
// const base_url = process.env.NEXT_PUBLIC_API_URL;

// export const $api = axios.create({ baseURL: base_url });

// $api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token"); // Получаем токен из localStorage
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`; // Добавляем токен в заголовки запроса
//   }
//   return config;
// });



// // api/api.ts

// export const fetchPostLikes = async (postId: string, userId: string, remove = false) => {
//   const response = await fetch(`/api/posts/${postId}/likes`, {
//     method: remove ? 'DELETE' : 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ userId }),
//   });
//   if (!response.ok) {
//     throw new Error('Failed to update like');
//   }
// };

// export const followUser = async (userId: string, targetUserId: string) => {
//   const response = await fetch(`/api/users/${targetUserId}/follow`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ userId }),
//   });
//   if (!response.ok) {
//     throw new Error('Failed to follow user');
//   }
// };

// export const unfollowUser = async (userId: string, targetUserId: string) => {
//   const response = await fetch(`/api/users/${targetUserId}/unfollow`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ userId }),
//   });
//   if (!response.ok) {
//     throw new Error('Failed to unfollow user');
//   }
// };


