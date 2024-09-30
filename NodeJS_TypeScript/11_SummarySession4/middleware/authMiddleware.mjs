import jwt from 'jsonwebtoken';

// Middleware для проверки JWT токена
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];  // Берем токен из заголовка

    if (!token) {
        return res.status(401).json({ message: 'Access token is missing or invalid' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }

        req.user = user;  // Добавляем информацию о пользователе в запрос
        next();  // Передаем управление следующему маршруту
    });
};

export default authenticateToken;