const Article = require('../models/article');
const User = require('../models/user');
const config = require('../config/database');
const jwt = require('jsonwebtoken');

module.exports = (router) => {

    router.post('/newArticle', (req, res) => {
      User.findOne({ id: req.decoded.id }, (err, mainUser) => {
        const author = mainUser.firstname + mainUser.lastname;
        if (err) throw err;
        if (mainUser.permission === "admin") {
          if (!req.body.title) {
            res.json({ success: false, message:'You must provide a title' });
          } else if (!req.body.img) {
            res.json({ success: false, message:'You must provide an image' });
          } else if (!req.body.description) {
            res.json({ success: false, message:'You must provide a description' });
          } else if (!req.body.content) {
            res.json({ success: false, message:'You must provide a content' });
          } else if (!req.body.price) {
            res.json({ success: false, message:'You must provide a price' });
          } else if (!req.body.category) {
            res.json({ success: false, message:'You must provide a category' });
          } else if (!mainUser.firstname) {
            res.json({ success: false, message:'Article author is required' });
          } else {
            let article = new Article({
              // author : req.decoded.userEmail,
              title: req.body.title,
              img: req.body.img,
              description: req.body.description,
              content: req.body.content,
              price: req.body.price,
              category: req.body.category,
              // author: req.body.author
              author: author
            });
            article.save((err) => {
              if (err) {
                  if (err.errors) {
                    if (err.errors.title) {
                      res.json({ success: false, message: err.errors.title.message });
                    } else if (err.errors.img) {
                      res.json({ success: false, message: err.errors.img.message });
                    } else if (err.errors.description) {
                      res.json({ success: false, message: err.errors.description.message });
                    } else if (err.errors.content) {
                      res.json({ success: false, message: err.errors.content.message });
                    } else if (err.errors.price) {
                      res.json({ success: false, message: err.errors.price.message });
                    } else if (err.errors.category) {
                      res.json({ success: false, message: err.errors.category.message });
                    } else if (err.errors.author) {
                      res.json({ success: false, message: err.errors.author.message });
                    } else {
                      res.json({ success: false, message: err.errmsg });
                    }
                  } else {
                    res.json({ success: false, message: 'Could not save article. Error: ', err });
                  }
                  return;
                } else {
                res.json({ success: true, message: 'Article successfully saved' });
              }
            });
          }
        } else {
          res.json({ success: false, message: "You do not have the permission" });
        }
      });
    });


  router.get('/allArticles', (req, res) => {
    Article.find({}, (err, articles) => {
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!articles) {
          res.json({ success: false, message: 'No articles found.' });
        } else {
          res.json({ success: true, articles: articles });
        }
      }
    }).sort( { date: -1 } );
  });


  return router;
}
