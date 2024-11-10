// utils/apiUtils.ts

import { AxiosHeaders } from 'axios';

export const getAuthHeaders = (): AxiosHeaders => {
  const token = localStorage.getItem('authToken'); // Берем токен из localStorage

  if (!token) {
    throw new Error('Токен не найден');
  }

  // Создаем и возвращаем заголовки с токеном
  return new AxiosHeaders({
    Authorization: `Bearer ${token}`,
  });
};