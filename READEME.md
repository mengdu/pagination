
## pagination

A simple data pager.

## use


```js
  arr = [...]
  var p = new Pagination(101, 11)

  arr.slice.apply(arr, p.page(n))
```

## api

```js

  var p = new Pagination(total, pageSize)
```

  `Pagination.prototype.page(n)` 翻页，n表示第几页，默认1；返回数组slice函数使用参数
  `Pagination.prototype.count()` 返回总页数
  `Pagination.prototype.index` 返回真实的当前页码
