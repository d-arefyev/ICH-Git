import express from 'express';
import bcrypt from 'bcrypt';
const app = express();

app.use(express.json());

// Массив пользователей для эмуляции базы данных
const users = [];

// Middleware для симуляции аутентификации пользователя
app.use((req, res, next) => {
  req.user = { id: 1, role: 'admin' }; // Имитируем залогиненного пользователя с id = 1 и ролью 'user' / 'admin' 
  next();
});

// Задача 1: Регистрация с проверкой уникальности email ---------------------------------------------

// Регистрация
app.post('/register', async (req, res) => {
  try {
    const { username, password, email, name } = req.body;

    // Проверка уникальности email
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return res.status(400).send('Email уже зарегистрирован');
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const id = users.length + 1; // Автоматическая генерация ID

    users.push({ id, username, password: hashedPassword, email, name, mustChangePassword: false, role: 'user' }); // 'user' / 'admin' 

    res.status(201).send('Пользователь успешно зарегистрирован');
    console.log(users);
  } catch (error) {
    res.status(500).send('Ошибка при регистрации');
  }
});

// Получить пользователя по ID  NB slug
app.get('/profile/:id', (req, res) => {
  // Парсинг до int
  const userId = parseInt(req.params.id, 10)

  if (req.user.id !== userId) {
      return res.status(403).send('Доступ запрещен')
  }

  const user = users.find((user) => user.id === userId); // метод поиска

  if (!user) {
      return res.status(404).send('Пользователь не найден')
  }

  res.status(200).json({
      userName: user.username,
      email: user.email,
      name: user.name,
  })
})

// Получить доступ на изменение пользователя
app.put('/profile/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10)

  if (req.user.id !== userId) {
      return res.status(403).send('Доступ запрещен')
  }

  const user = users.find((user) => user.id === userId);

  if (!user) {
      return res.status(404).send('Пользователь не найден')
  }

  const { email, name } = req.body;

  if (email) {
      user.email = email
  }

  if (name) {
      user.name = name
  }

  res.send('Профиль обновлен');
})

// Задача 2: Принудительная смена пароля -----------------------------------------------------------

// Middleware для проверки необходимости смены пароля
const checkMustChangePassword = (req, res, next) => {
  const user = users.find(user => user.id === req.user.id);
  if (user && user.mustChangePassword) {
    return res.status(403).send('Необходимо сменить пароль');
  }
  next();
};

// Маршрут для смены пароля
app.post('/change-password', async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const user = users.find(user => user.id === req.user.id);

    // Проверка текущего пароля
    const isOldPasswordValid = await bcrypt.compare(oldPassword, user.password);
    if (!isOldPasswordValid) {
      return res.status(400).send('Неверный текущий пароль');
    }

    // Хэширование нового пароля
    const saltRounds = 10;
    const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);

    // Обновление пароля и сброс mustChangePassword
    user.password = hashedNewPassword;
    users.mustChangePassword = false;

    res.status(200).send('Пароль успешно изменен');
  } catch (error) {
    res.status(500).send('Ошибка при смене пароля');
  }
});

// Задача 3: Удаление аккаунта -------------------------------------------------------------------

// Маршрут для удаления аккаунта
app.post('/delete-account', async (req, res) => {
  try {
    const { password } = req.body;
    const userIndex = users.findIndex(user => user.id === req.user.id);
    const user = users[userIndex];

    // Проверка пароля
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).send('Неверный пароль');
    }

    // Удаление пользователя
    users.splice(userIndex, 1);
    res.status(200).send('Аккаунт успешно удален');
  } catch (error) {
    res.status(500).send('Ошибка при удалении аккаунта');
  }
});

// Задача 4: Ограничение доступа по ролям ----------------------------------------------------------

// Middleware для проверки роли
const checkAdminRole = (req, res, next) => {
  const user = users.find(user => user.id === req.user.id);
  if (user.role !== 'admin') {
    return res.status(403).send('Доступ запрещен');
  }
  next();
};

// Маршрут только для администраторов
app.get('/admin', checkAdminRole, (req, res) => {
  res.status(200).send('Добро пожаловать в админ-панель');
});

// Задача 5: Изменение email ----------------------------------------------------------------------

// Маршрут для изменения email
app.post('/change-email', async (req, res) => {
  try {
    const { currentPassword, newEmail } = req.body;
    const user = users.find(user => user.id === req.user.id);

    // Проверка текущего пароля
    const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
    if (!isPasswordValid) {
      return res.status(400).send('Неверный пароль');
    }

    // Проверка уникальности нового email
    const existingUser = users.find(user => user.email === newEmail);
    if (existingUser) {
      return res.status(400).send('Email уже используется');
    }

    // Обновление email
    user.email = newEmail;
    res.status(200).send('Email успешно изменен');
  } catch (error) {
    res.status(500).send('Ошибка при изменении email');
  }
});

// Логин пользователя ------------------------------------------------------------------------------
app.post('/login', checkMustChangePassword, async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);
    console.log(user);

    if (!user) {
      return res.status(400).send('Пользователь не найден');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).send('Неправильный пароль');
    }

    res.status(200).send('Успешный вход');
  } catch (err) {
    res.status(500).send('Ошибка при входе');
  }
});

app.listen(3000, () => {
  console.log('Сервер запущен на порту http://localhost:3000');
});
