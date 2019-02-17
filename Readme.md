# Introduction

Goods API built with Nodejs express framework on the server and Reactjs on the client.


## Client

Demo:
https://goods-react-frontend.herokuapp.com

Github: 
[https://github.com/hafizferanmi/goods_react_frontend](https://github.com/hafizferanmi/goods_react_frontend)

## End points

Demo: [https://goods-node-backend.herokuapp.com](https://goods-node-backend.herokuapp.com)



Demo:

[https://goods-node-backend.herokuapp.com](https://goods-node-backend.herokuapp.com)



```http
GET /api/all_goods
```
Returns

```javascript
[{
  "_id" : ObjectId,
  "name" : string,
  "price"    : string
}]
```

```http
POST /api/add_good
```
Returns

```javascript
{
  "message" : string,
  "error" : bool,
  "_id"    : ObjectId
}
```


```http
GET /api/good/:id
```
Returns

```javascript
{
  "_id" : ObjectId,
  "name" : bool,
  "price"    : string,
  "color"    : string,
  "category"    : string,
  "description"    : string
}
```



