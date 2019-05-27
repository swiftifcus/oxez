const Todo = require('../models/Todo');

module.exports = router => {
  router.post('/newTodo', (req, res) => {
    if (!req.body.title || !req.body.body) {
      res.json({
        success: false,
        message: 'Need title, body and owner',
      });
    } else {
      const todo = new Todo({
        title: req.body.title,
        body: req.body.body,
      });

      todo.save(err => {
        if (err) {
          res.json({
            success: false,
            message: err,
          });
        } else {
          res.json({
            success: true,
            message: 'Todo saved',
          });
        }
      });
    }
  });

  router.get('/todos', (req, res) => {
    Todo.find({}, (err, todos) => {
      if (err || !todos) {
        res.json({
          success: false,
          message: err,
        });
      } else {
        res.json({
          success: true,
          todos: todos,
        });
      }
    });
  });

  router.delete('/deleteTodos', (req, res) => {
    Todo.deleteMany({}, err => {
      if (err) {
        res.json({
          success: false,
          message: err,
        });
      } else {
        res.json({
          success: true,
          message: 'Deleted all',
        });
      }
    });
  });

  return router;
};
