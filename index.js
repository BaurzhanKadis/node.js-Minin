const express = require('express');
const exphbs = require('express-handlebars');
// роуты
const homeRoutes = require('./routes/home')
const addRoutes = require('./routes/add')
const coursesRoutes = require('./routes/courses')
// сервак на express
const app = express();

// подключили для hbs для компонетного подключения файлов
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})
// подключили для hbs для компонетного подключения файлов
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs')
app.set('views', 'views');
// подключили для css
app.use(express.static('public'));
// подключаем обработку POST
app.use(express.urlencoded({extended: true}))
// подключили роуты
app.use('/', homeRoutes);
app.use('/add', addRoutes);
app.use('/courses', coursesRoutes);
// локальный порт
const PORT = process.env.PORT || 3000
// подключение сервера
app.listen(PORT, () => {
  console.log(`server start ${PORT}`)
})