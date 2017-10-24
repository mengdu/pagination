
function Pagination (total, len) {
  this.total = Math.abs(~~total)
  var l = Math.abs(~~len)
  len = l > this.total ? this.total : l
  this.len =  len || 10
  // 当前页
  this.index = 1
  
}
// 指定页数据
Pagination.prototype.page = function (n) {
  var page = Math.abs(~~n) || this.index
  var count = this.count()
  if (page > count) {
    this.index = count
  } else {
    this.index = page
  }
  var index1 = (this.index - 1) * this.len
  var index2 = this.index * this.len
  index2 = index2 > this.total ? this.total : index2
  // slice(index1, index2) 实际arr[index1] ~ arr[index2-1]
  return [index1, index2]
}

Pagination.prototype.count = function () {
  // 总页数
  return Math.ceil(~~Math.abs(this.total) / ~~Math.abs(this.len))
}

export default Pagination
