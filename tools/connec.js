var mongoose = require('mongoose');
//mongoose.connect(url，options，callback)
mongoose.connect("mongodb://localhost:27017/users", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function (err) {
  if (err) {
    console.log('数据库链接失败')
  } else {
    console.log('数据库链接成功')
  }
}) //链接数据库的名称

mongoose.connection.on('connected', () => {
  console.log('数据库链接成功')
})
mongoose.connection.on('error', () => {
  console.log('数据库链接失败')
})
mongoose.connection.on('disconnected', () => {
  console.log('数据库链接已断开')
})

module.exports = mongoose.connection