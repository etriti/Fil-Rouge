const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true);

const articleSchema = new Schema({
  title: { type: String, required: true },
  // img: { data: Buffer, contentType: String },
  img: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
  views: { type: Number, required: true, default: 0 },
  updateAuthor: { type: String },
  updateDate: {type: Date}
});


module.exports = mongoose.model('Article', articleSchema);
