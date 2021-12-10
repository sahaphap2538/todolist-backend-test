const express = require('express');
const app = express();
const cors = require('cors');
const todoListRoutes = require('./routes/todoList');
const userRoutes = require('./routes/user')
const db = require('./models')

require('./config/passport/passport')

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/todo-list', todoListRoutes);
app.use('/user', userRoutes )

db.sequelize.sync({ force : false }).then(() => {
    app.listen(8000, () => {
        console.log(`Server is running at port 8000`);
    });
})
