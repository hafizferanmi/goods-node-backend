# Introduction

Goods API built with Nodejs express framework on the server and Reactjs on the client.


## Client

Demo:
https://goods-react-frontend.herokuapp.com

Github: 
[https://github.com/hafizferanmi/goods_react_frontend](https://github.com/hafizferanmi/goods_react_frontend)

## End points

Demo: [https://goods-node-backend.herokuapp.com](https://goods-node-backend.herokuapp.com)




REQUEST 1

```http
GET /api/all_goods
```


RESPONSE 1

```javascript
[{
  "_id" : ObjectId,
  "name" : string,
  "price"    : string
}]
```

REQUEST 2

```http
POST /api/add_good
```

Send

| Key | Type |
| :--- | :--- | 
| `name` | `string` | 
| `color` | `string` | 
| `price` | `string` | 
| `description` | `string` | 
| `category` | `string` | 
| `good_file` | `file` | 


RESPONSE 2

```javascript
{
  "message" : string,
  "error" : bool,
  "itemId"    : ObjectId
}
```


REQUEST 3
```http
GET /api/good/:id
```

RESPONSE 3

```javascript
{
  "_id" : ObjectId,
  "name" : string,
  "price"    : string,
  "color"    : string,
  "category"    : string,
  "description"    : string
}
```



