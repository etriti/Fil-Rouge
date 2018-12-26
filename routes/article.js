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

  router2.put('/views', (req, res) => {
    const editViews = req.body.id;
    if (req.body.views) var newView = req.body.views;

        Article.findOne({ _id : editViews}).exec((err, article) => {
          if (err) throw err;
          if (!article) {
             res.json({ success: false, message: 'No article found' });
          } else if (!newView) {
            res.json({ success: false, message: 'View wasnt updated' });
          } else {
              article.views = newView; // Assign new view to article
              // Save changes
              article.save(function(err) {
                  if (err) {
                      console.log(err); // Log error to console
                  } else {
                      res.json({ success: true, message: 'View has been updated!' }); // Return success
                  }
              });
          }
        });
  });



  return router2;
}
