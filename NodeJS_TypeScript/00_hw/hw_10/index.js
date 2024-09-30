import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;
const jwtSecret = process.env.JWT_SECRET || 'defaultSecret';

// Middleware для обработки JSON
app.use(express.json());

// Массив пользователей
let users = [
  { id: 1, 
    username: 'user1', 
    email: 'user1@example.com', 
    password: await bcrypt.hash('password', 10), 
    role: 'user' },
  { id: 2, 
    username: 'admin', 
    email: 'admin@example.com', 
    password: await bcrypt.hash('adminpassword', 10), 
    role: 'admin' }
];

// Middleware для проверки JWT
function authenticateJWT(req, res, next) {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, jwtSecret, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Неправильный или истекший токен' });
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json({ message: 'Токен отсутствует' });
  }
}

// Middleware для проверки роли
function authorizeRole(role) {
  return (req, res, next) => {
    if (req.user.role === role) {
      next();
    } else {
      res.status(403).json({ message: 'Нет прав доступа' });
    }
  };
}

// Маршрут для логина
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(404).json({ message: 'Пользователь не найден' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Неверный пароль' });
  }

  const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, jwtSecret, { expiresIn: '1h' });
  res.json({ token });
});

// Маршрут для обновления email
app.put('/update-email', authenticateJWT, (req, res) => {
  const { email } = req.body;
  const userId = req.user.id;

  const user = users.find(u => u.id === userId);
  if (user) {
    user.email = email;
    res.json({ message: 'Email успешно обновлен', user });
  } else {
    res.status(404).json({ message: 'Пользователь не найден' });
  }
});

// Маршрут для удаления аккаунта
app.delete('/delete-account', authenticateJWT, (req, res) => {
  const userId = req.user.id;

  users = users.filter(user => user.id !== userId);
  res.json({ message: 'Аккаунт успешно удалён' });
});

// Маршрут для обновления роли (только для админов)
app.put('/update-role', authenticateJWT, authorizeRole('admin'), (req, res) => {
  const { id, role } = req.body;

  const user = users.find(u => u.id === id);
  if (user) {
    user.role = role;
    res.json({ message: 'Роль успешно обновлена', user });
  } else {
    res.status(404).json({ message: 'Пользователь не найден' });
  }
});

// Маршрут для обновления JWT токена
app.post('/refresh-token', authenticateJWT, (req, res) => {
  const userId = req.user.id;
  const user = users.find(u => u.id === userId);

  if (user) {
    const newToken = jwt.sign({ id: user.id, email: user.email, role: user.role }, jwtSecret, { expiresIn: '1h' });
    res.json({ token: newToken });
  } else {
    res.status(404).json({ message: 'Пользователь не найден' });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
