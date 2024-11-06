Проект: Социальная сеть с возможностью регистрации, редактирования постов профилей пользователей
и функция Like постов других пользователей

Frontend (client)

-dependencies ? 

-routes (react-router-dom)
    -login
    -profile
    -posts

Backend

--db
    - index.js файл Применяется для соединения Backend API -> MongoDB
--models
    - User - Schema (описание сущности) + Model (Обьект взаимодействия с коллекцией User)
    - Profile - Schema
    - Posts - Schema () 
    - Transaction - - Schema (описание сущности) + Model (Обьект взаимодействия с коллекцией Transaction)
--routes
    - balanceRouter - url + '/set-balance'
    - userRouter    - url + '/create'
    - authRouter    - url + '/auth' и '/register'
    - postRouter    - url + '/posts' и '/like'


// Социальная сеть
// Front end - Back end ???

1. Продумать сущности и структуру базы данных