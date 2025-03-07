// middlewares.js
module.exports = (req, res, next) => {
    if (req.method === 'PUT' && req.path.startsWith('/departement/')) {
      const { name } = req.body;
      const id = parseInt(req.path.split('/').pop());
      const departements = require('./db.json').departement;
      const existingDepartement = departements.find(
        (d) => d.name === name && d.id !== id
      );
      if (existingDepartement) {
        return res
          .status(400)
          .json({ error: 'Le nom du département doit être unique.' });
      }
    }
    next();
  };