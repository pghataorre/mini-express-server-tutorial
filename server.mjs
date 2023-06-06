import bp from 'body-parser';
import morgan from 'morgan';
import express from 'express';

const host = 'localhost';
const port = 8000;
const db = [];

const app = express();

/*******************************************/
/* MIDDLEWARE
/*******************************************/

app.use(bp.urlencoded({extended: true}));
app.use(bp.json());
app.use(morgan('dev'));


/*******************************************/
/* ROUTES
/*******************************************/


app.post('/todos', (req, res) => {
  if(req.body.taskTitle && req.body.taskName) {

    const { taskName, taskTitle } = req.body;
    const taskItem = {
      taskDate: new Date(),
      taskName,
      taskTitle
    };

    db.push(taskItem);
    
    res.setHeader('Content-Type', 'application/json');
    res.status(201);
    res.json(taskItem);


  } else {
    res.status(201);
    res.json({error: 'wrong params'});
  }

});

app.get('/todos', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(201);
  res.json({resTodos: db});
});



app.listen(port, () => {
  console.log(`----------------------------------------------------- `);
  console.log(`----------- Server started ${port} ----------- `);
  console.log(`----------------------------------------------------- `);
})
