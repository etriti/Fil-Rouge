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

  router.delete('/deleteArticle/:id', function (req, res) {
    const articleToDelete = req.params.id;
    // console.log(articleToDelete);
    if (!articleToDelete) {
      res.json({ success: false, message: 'No ID provided' });
    } else {
      User.findOne({ _id: req.decoded.userId }, function (err, user) {
          if (err) throw err;

          if (!user) {
             res.json({ success: false, message: 'No user found' });
          } else {
             if (user.permission === "admin") {
               Article.findOneAndRemove({ _id: articleToDelete }, function (err, article) {
                 if (err) {
                   res.json({ success: false, message: 'Invalid ID' });
                 } else {
                   if (!article) {
                     res.json({ success: false, message: 'This article does not exists' });
                   } else {
                     res.json({ success: true, message: 'Article has been deleted' });
                   }
                 }
               });
             } else {
               res.json({ success: false, message: 'Insufficient Permissions' });
             }
          }
      });
    }
  });


  router.put('/updateArticle', function (req, res) {
    // const articleToUpdate = req.params.id;
    if (!req.body._id) {
      res.json({ success: false, message: 'No article ID provided' });
    } else {
      Article.findOne({ _id: req.body._id }, function (err, article) {
          if (err) {
             res.json({ success: false, message: 'The articles id is not valid' });
          } else {
            if (!article) {
              res.json({ success: false, message: 'Articles id was not found' });
            } else {
              User.findOne({ _id: req.decoded.userId }, function (err, user) {
                const updateAuthor = user.firstname + user.lastname;
                if (err) {
                  res.json({ success: false, message: err });
                } else {
                  if (!user) {
                    res.json({ success: false, message: 'No user found' });
                  } else {
                    if (user.permission === "admin") {
                      article.title = req.body.title;
                      article.img = req.body.img;
                      article.description = req.body.description;
                      article.content = req.body.content;
                      article.price = req.body.price;
                      article.category = req.body.category;
                      article.updateAuthor = updateAuthor;
                      article.updateDate = Date.now();
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
                          res.json({ success: true, message: 'Article successfully updated' });
                        }
                      });
                    } else {
                      res.json({ success: false, message: 'Insufficient Permissions' });
                    }
                  }
                }
              });
            }
          }
    });
  }

});


  return router;
}
