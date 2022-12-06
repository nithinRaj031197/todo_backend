import Todo from "../models/todo-models.js";

export const addTodo = async (req, res) => {
  try {
    if (!req.body.todo) {
      return res.status(200).json({ message: "Please place a Todo" });
    }
    const newTodo = new Todo({
      todo: req.body.todo,
      created_at: Date.now(),
    });

    await newTodo.save();

    return res.status(200).json({ todo: newTodo, message: "Todo Created Successfully" });
  } catch (err) {
    return res.status(500).json({ error: err.message ?? err });
  }
};

export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find().where("is_active").equals(true).sort({ created_at: -1 });

    return res.status(200).json(todos);
  } catch (err) {
    return res.status(500).json({ error: err.message ?? err });
  }
};

export const getAllCompletedTodos = async (req, res) => {
  try {
    const todos = await Todo.find().where("is_active").equals(false).sort({ created_at: -1 });

    return res.status(200).json(todos);
  } catch (err) {
    return res.status(500).json({ error: err.message ?? err });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const todoId = req.params.id;

    if (!todoId) {
      return res.status(400).json({ message: "Todo Id not provided" });
    }
    await Todo.findOneAndUpdate({ _id: todoId }, { todo: req.body.todo, is_active: req.body.is_active ?? true });

    const todo = await Todo.findById(todoId);

    return res.status(200).json({ todo, message: "Todo Updated Successfully" });
  } catch (err) {
    return res.status(500).json({ error: err.message ?? err });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.id;

    if (!todoId) {
      return res.status(400).json({ message: "Todo Id not provided" });
    }
    await Todo.findByIdAndDelete(todoId);

    return res.status(200).json({ message: "Todo Deleted Successfully!" });
  } catch (err) {
    return res.status(500).json({ error: err.message ?? err });
  }
};
