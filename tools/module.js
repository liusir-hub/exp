var mongoose = require('mongoose');
//先使用mongoos的Schema  调用生成一个Schema构造函数，然后在使用这个构造函数声明或者描述表结构。
var Schema = mongoose.Schema();


var m_schema = new Schema({
  rating: Object,
  genres: Array,
  title: String,
  casts: Array,
  collect_count: Number,
  original_title: String,
  subtype: String,
  directors: Array,
  year: String,
  images: Object,
  alt: String,
  id: String
})

exports.movie = mongoose.model('dd', m_schema)