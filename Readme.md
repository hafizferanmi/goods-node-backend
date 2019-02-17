# Introduction

Goods node backend built with Nodejs express framework on the server and Reactjs on the client.


## Client
<<<<<<< HEAD
Demo: https://goods-react-frontend.herokuapp.com
=======
Demo:
https://goods-react-frontend.herokuapp.com
>>>>>>> 300cd7b31f179206efc2f99f1d36977712f0e6a2

Github: 
[https://github.com/hafizferanmi/goods_react_frontend](https://github.com/hafizferanmi/goods_react_frontend)

## End points

<<<<<<< HEAD
Demo: [https://goods-node-backend.herokuapp.com](https://goods-node-backend.herokuapp.com)



=======
Demo:

[https://goods-node-backend.herokuapp.com](https://goods-node-backend.herokuapp.com)



>>>>>>> 300cd7b31f179206efc2f99f1d36977712f0e6a2

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



