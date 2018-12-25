const Article = require('../models/article');
const User = require('../models/user');
const config = require('../config/database');
const jwt = require('jsonwebtoken');

module.exports = (router2) => {

  router2.get('/:id', (req, res) => {
    const articleId = req.params.id;
    Article.findOne({ _id : articleId}).exec((err, article) => {
      if (article) {
        if (err) throw err;
        res.json({ success: true, article: article });
      } else {
        res.json({ success: false, message: 'Ups! This article does not exists'});
      }
    });
  });


  return router2;
}
