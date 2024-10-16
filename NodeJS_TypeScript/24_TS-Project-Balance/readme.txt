TS-Project-Balance ----------------------------------------------------------------------

Backend:
npm init -y
npm install express dotenv mongoose cors

Frontend:
vite
1. установка пакета vite:
npm create vite@latest
2. переход в папку с проектом
3. установка зависимостей:
npm install
4. запуск проекта:
npm run dev
5. сборка файлов для публикации:
npm run build


npm install axios





Frontend (client)



Backend

--db
    - index.js файл Применяется для соединения Backend API -> MongoDB
--models
    - User - Schema (описание сущности) + Model (Обьект взаимодействия с коллекцией User)
    - Transaction - - Schema (описание сущности) + Model (Обьект взаимодействия с коллекцией Transaction)
--routes
    - balanceRouter - url + '/set-balance'
    - userRouter    - url + '/create'




Frontend (client)



Backend

--db
    - index.js файл Применяется для соединения Backend API -> MongoDB
--models
    - User - Schema (описание сущности) + Model (Обьект взаимодействия с коллекцией User)
    - Transaction - - Schema (описание сущности) + Model (Обьект взаимодействия с коллекцией Transaction)
--routes
    - balanceRouter - url + '/set-balance'
    - userRouter    - url + '/create'