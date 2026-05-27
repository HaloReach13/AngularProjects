import express from "express";
import cors from 'cors';
import { Op } from 'sequelize';
import { sequelize } from './db';
import { Todo } from './models/todo';

const app = express();
app.use(cors());

app.use(express.json());

app.get('/api/todos', async (req: any, res: any) => {
    try {
        const todos = await Todo.findAll();
        res.json(todos);
    } catch (error) {
        res.status(500).json({
            error: 'Hiba történt a TODO-k listázása közben.'
        });
    }
});

app.get('/api/todos/overdue', async (req: any, res: any) => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const overdueTodos = await Todo.findAll({
      where: {
        deadline: { [Op.lt]: today },
        completionStatus: false
      }
    });
    res.json(overdueTodos);
  } catch (error) {
    res.status(500).json({
      error: 'Hiba történt a lejárt határidejű TODO-k lekérdezése közben.'
    });
  }
});

app.get('/api/todos/:id', async (req: any, res: any) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) return res.status(404).json({ message: 'Todo nem található' });
    res.json(todo);
  } catch (error) {
    res.status(500).json({
        error: 'Hiba történt a TODO adatainak lekérése közben.'
    });
  }
});

app.post('/api/todos', async (req: any, res: any) => {
  try {
    const { description, deadline } = req.body;
    const newTodo = await Todo.create({ description, deadline });
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(400).json({ error: 'Nem sikerült létrehozni a TODO-t. Ellenőrizze a küldött adatokat!' });
  }
});

app.put('/api/todos/:id', async (req: any, res: any) => {
  try {
    const { description, deadline, completionStatus } = req.body;
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) return res.status(404).json({ message: 'Todo nem található' });

    await todo.update({ description, deadline, completionStatus });
    res.json(todo);
  } catch (error) {
    res.status(400).json({ error: 'Sikertelen frissítés. Ellenőrizze a módosítani kívánt mezőket!' });
  }
});

app.delete('/api/todos/:id', async (req: any, res: any) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) return res.status(404).json({ message: 'Todo nem található' });

    await todo.destroy();
    res.json({ message: 'Todo sikeresen törölve' });
  } catch (error) {
    res.status(500).json({ error: 'Hiba történt a feladat törlése közben.' });
  }
});

const PORT = 3000;
sequelize.sync().then(() => {
  console.log('MySQL adatbázis szinkronizálva.');
  app.listen(PORT, () => console.log(`Szerver fut a ${PORT}-es porton.`));
});