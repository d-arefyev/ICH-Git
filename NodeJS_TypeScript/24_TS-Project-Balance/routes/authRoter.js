import { Router } from 'express'
import User from '../models/User.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const router = Router();

//Auth
router.post('/auth', async (req, res) => {
    try {
        const { userData } = req.body;
        const { login, password } = userData;

        const user = await User.findOne({ userName: login })

        if (!user?.userName) {
            res.status(401).json({ message: 'Пользователя не существует' })
        }
        const isMatch = await bcrypt.compare(password, user.hash)

        if (!isMatch) {
            return res.status(401).send('Пароль не верный')
        }

        const token = jwt.sign(
            { userId: user.idUser, email: user.userName }, // Payload
            '123123123', // Секретик
            { expiresIn: '1h' } // время жизни токена
        )

        return res.json({ token, id: user.idUser })

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error })
    }
})

//Signup
router.post('/register', async (req, res) => {
    try {
        const { userData } = req.body;
        const { login, password } = userData;
        // const { userData: { login, password } } = req.body
        // const { login, password } = req.body;
        console.log(login);
        // console.log(password);

        const user = await User.findOne({ userName: login })

        if (user?.userName) {
            return res.status(401).json({ message: 'Пользователь существует' })
        }

        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(password, saltRounds)

        const newUser = await User.create({ userName: login, hash: hashPassword, idUser: 'id-' + Math.random().toString(36).substr(2, 9) })

        const token = jwt.sign(
            { userId: newUser.idUser, email: newUser.userName }, // Payload
            '123123123', // Секретик
            { expiresIn: '1h' } // время жизни токена
        )

        return res.json({ token, id: newUser.idUser })

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })
    }
})

export default router;