import express from 'express';
import studentRoutes from './routes/studentRoutes.js';
import conn from './config/db.js';

const app = express();
app.use(express.json());
app.use('/student', studentRoutes);

app.get('/students', (req, res) => {
    conn.query('select * from users', (err, result) => {
        res.json(result);
    });
});

app.post('/students', (req, res) => {
    let {name, description, price} = req.body;
    let query = `insert into users(name,description, price) values('${name}', '${description}', '${price}');`;
    conn.query(query, ['name', 'description', 'price'], (err, result) => {
        res.status(200).send("Data Inserted");
    });
});

app.get('/students/:id', (req, res) => {
    let studentId = req.params.id;
    let query = `select * from users where id=${studentId}`;
    conn.query(query, (err, result) => {
        res.status(200).json(result);
    });
});

app.put('/students/:id', (req, res) => {
    let studentId = req.params.id;
    let {name, description, price} = req.body;
    let query = `update users set name='${name}', description='${description}', price='${price}' where id=${studentId}`;
    conn.query(query, ['name', 'description', 'price'], (err, result) => {
        res.status(200).json(result);
    });
});

app.delete('/students/:id', (req, res) => {
    let studentId = req.params.id;
    let query = `delete from users where id = ${studentId}`;
    conn.query(query, (err, result) => {
        res.status(200).json({message: "Data deleted from db users!"});
    })
});

app.listen(5002, () => {
    console.log("Server Started");
})