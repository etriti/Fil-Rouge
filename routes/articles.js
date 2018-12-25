const Article = require('../models/article');
const User = require('../models/user');
const config = require('../config/database');
const jwt = require('jsonwebtoken');

module.exports = (router) => {
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


  router.get('/CottonArticles', (req, res) => {
    Article.find({ category: "cotton" }, (err, articles) => {
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!articles) {
          res.json({ success: false, message: 'No Cotton articles found.' });
        } else {
          res.json({ success: true, articles: articles });
        }
      }
      }).sort( { date: -1 } );
  });

  router.get('/SilkArticles', (req, res) => {
    Article.find({ category: "silk" }, (err, articles) => {
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!articles) {
          res.json({ success: false, message: 'No Silk articles found.' });
        } else {
          res.json({ success: true, articles: articles });
        }
      }
    }).sort( { date: -1 } );
  });

  router.get('/MetallicArticles', (req, res) => {
    Article.find({ category: "metallic" }, (err, articles) => {
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!articles) {
          res.json({ success: false, message: 'No Metallic articles found.' });
        } else {
          res.json({ success: true, articles: articles });
        }
      }
    }).sort( { date: -1 } );
  });

  router.get('/All-purposeArticles', (req, res) => {
    Article.find({ category: "all-purpose" }, (err, articles) => {
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!articles) {
          res.json({ success: false, message: 'No All-purpose articles found.' });
        } else {
          res.json({ success: true, articles: articles });
        }
      }
    }).sort( { date: -1 } );
  });


  router.get('/PolyesterArticles', (req, res) => {
    Article.find({ category: "polyester" }, (err, articles) => {
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!articles) {
          res.json({ success: false, message: 'No Polyester articles found.' });
        } else {
          res.json({ success: true, articles: articles });
        }
      }
    }).sort( { date: -1 } );
  });


  router.get('/BuildingArticles', (req, res) => {
    Article.find({ category: "building" }, (err, articles) => {
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!articles) {
          res.json({ success: false, message: 'No Building articles found.' });
        } else {
          res.json({ success: true, articles: articles });
        }
      }
    }).sort( { date: -1 } );
  });

  return router;
}
