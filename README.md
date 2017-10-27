
## pagination

js数据分页计算

## use


```js
  arr = [...]
  var p = new Pagination(arr.length, 11)
  p.slice(arr, 1)
```

## api

```js
  var p = new Pagination(total, pageSize) //创建分页对象
```
**方法**：

`Pagination.prototype.page(n)` 翻页，n表示第几页，默认1；返回数组slice函数使用参数
`Pagination.prototype.slice(arr, n)` 使用数据的slice函数返回第n页数组
`Pagination.prototype.sql(n)` 返回sql语句中使用的 `limit` `offset`

**属性**：

`Pagination.prototype.total` 总数据条目
`Pagination.prototype.currentPage` 当前页，调用`page`, `slice`, `sql`方法后会设置当前页
`Pagination.prototype.pageSize` 每页数据条数
`Pagination.prototype.pageCount` 总分页数

