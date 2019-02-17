# Introduction

Goods node backend was built with Nodejs express framework.


## Client
https://goods-react-frontend.herokuapp.com
Github
[Goods react frontend](https://github.com/hafizferanmi/goods_react_frontend)

## End points

Live endpoint test at 

[Goods node backend](https://goods-node-backend.herokuapp.com/api)




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



