TypeScript-Project --------------------------------------------------------------------------------------

1. Инициализируйте проект:
  • Откройте терминал в нужной папке и введите 'npm init и следуйте инструкциям.
    - Установите необходимые пакеты:Введите 'npm install express mongoose dotenv.
    - Создайте базовую структуру проекта:Создайте файлы и папки: `app.js`, `routes/`, `models/, db/`.
    - Настройте `app.js` для работы с JSON данными:

  • Подключите Express и настройте 'express.json()* для обработки JSON данных. Настройте сервер, чтобы он запускался на порту 5000 или на том, который будет указан в переменной окружения.


---------------------------------------------------------------------------------------------------------

Создать новый проект:
npm -y init
npm install express mongoose dotenv nodemon






npm install -D typescript ts-node
npx tsc --init

Либо напрямую из директории src:
tsc index.ts 

Запустить код:
node index.js

Запустить код (в режиме разработки): 
npx ts-node index.ts
либо
npx ts-node src/index.ts

---------------------------------------------------------------------------------------------------------

Перенос из JS в TS

npm install typescript @types/express @types/node @types/mongoose @types/dotenv --save-dev
npm install ts-node-dev mongoose dotenv express

