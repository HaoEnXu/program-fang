import Mock from 'mockjs'
Mock.mock(`http://localhost:8086/goods/findBySelectGoods`, `post`, (option) => {
  const keyWord = JSON.parse(option.body).keyWord
  if (keyWord == 'iphone') {
    return {
      data: {
        "count": 6,
        "list": [{
          "id": 11,
          "goodName": "iPhone11pro",
          "url": "/static/hotRecomment/electric/1/11pro.jpg",
          "createDate": "2019-12-05 14:58:00.0",
          "updateDate": "2019-12-05 14:58:00.0",
          "type": "大牌云集1",
          "status": 2,
          "advertisement": 1,
          "freshness": "全新上架",
          "isDelete": 0,
          "price": "868"
        }, {
          "id": 12,
          "goodName": "iPhone8",
          "url": "/static/hotRecomment/electric/1/iPhone8.jpg",
          "createDate": "2019-12-05 14:58:00.0",
          "updateDate": "2019-12-05 14:58:00.0",
          "type": "大牌云集1",
          "status": 2,
          "advertisement": 1,
          "freshness": "全新上架",
          "isDelete": 0,
          "price": "868"
        }, {
          "id": 13,
          "goodName": "iPhoneXR",
          "url": "/static/hotRecomment/electric/1/xr.jpg",
          "createDate": "2019-12-05 14:58:00.0",
          "updateDate": "2019-12-05 14:58:00.0",
          "type": "大牌云集1",
          "status": 2,
          "advertisement": 1,
          "freshness": "全新上架",
          "isDelete": 0,
          "price": "868"
        }, {
          "id": 14,
          "goodName": "iPhoneXS",
          "url": "/static/hotRecomment/electric/1/xs.jpg",
          "createDate": "2019-12-05 14:58:00.0",
          "updateDate": "2019-12-05 14:58:00.0",
          "type": "大牌云集1",
          "status": 2,
          "advertisement": 1,
          "freshness": "全新上架",
          "isDelete": 0,
          "price": "868"
        }]
      }
    }
  } else if (keyWord == '小米') {
    return {
      data: {
        "count": 6,
        "list": [{
          "id": 11,
          "goodName": "CC9PRO",
          "url": "/static/hotRecomment/electric/2/1.jpg",
          "createDate": "2019-12-05 14:58:00.0",
          "updateDate": "2019-12-05 14:58:00.0",
          "type": "大牌云集1",
          "status": 0,
          "advertisement": 1,
          "freshness": "全新上架",
          "isDelete": 0,
          "price": "868"
        }, {
          "id": 12,
          "goodName": "游戏本2019款",
          "url": "/static/hotRecomment/electric/2/2.jpg",
          "createDate": "2019-12-05 14:58:00.0",
          "updateDate": "2019-12-05 14:58:00.0",
          "type": "大牌云集1",
          "status": 2,
          "advertisement": 1,
          "freshness": "全新上架",
          "isDelete": 0,
          "price": "1200"
        }, {
          "id": 13,
          "goodName": "小爱音箱",
          "url": "/static/hotRecomment/electric/2/3.jpg",
          "createDate": "2019-12-05 14:58:00.0",
          "updateDate": "2019-12-05 14:58:00.0",
          "type": "大牌云集1",
          "status": 1,
          "advertisement": 1,
          "freshness": "全新上架",
          "isDelete": 0,
          "price": "136"
        }, {
          "id": 14,
          "goodName": "mix3",
          "url": "/static/hotRecomment/electric/2/4.jpg",
          "createDate": "2019-12-05 14:58:00.0",
          "updateDate": "2019-12-05 14:58:00.0",
          "type": "大牌云集1",
          "status": 3,
          "advertisement": 1,
          "freshness": "全新上架",
          "isDelete": 0,
          "price": "666"
        }]
      }
    }
  }

})
// 请求用户数据
Mock.mock(`/userList`, `get`, (option) => {
  return {
    data: [{
      "id": 1,
      "name": "猪猪侠",
      "userName": "猪猪侠",
      "sex": "男",
      "age": "21",
      "phone": "12345678910",
      "email": "123@qq.com",
      "address": "天津",
      "isDelete": false
    }, {
      "id": 2,
      "name": "皮卡丘",
      "userName": "皮卡丘",
      "sex": "男",
      "age": "21",
      "phone": "12345678910",
      "email": "123@qq.com",
      "address": "天津",
      "isDelete": false

    }, {
      "id": 3,
      "name": "小胡",
      "userName": "小胡",
      "sex": "男",
      "age": "21",
      "phone": "12345678910",
      "email": "123@qq.com",
      "address": "天津",
      "isDelete": false

    }, {
      "id": 4,
      "name": "小李",
      "userName": "小李",
      "sex": "男",
      "age": "21",
      "phone": "12345678910",
      "email": "123@qq.com",
      "address": "天津",
      "isDelete": false

    }, {
      "id": 5,
      "name": "小周",
      "userName": "小周",
      "sex": "女",
      "age": "21",
      "phone": "12345678910",
      "email": "123@qq.com",
      "address": "天津",
      "isDelete": false

    }, {
      "id": 6,
      "name": "小兰",
      "userName": "小兰",
      "sex": "女",
      "age": "21",
      "phone": "12345678910",
      "email": "123@qq.com",
      "address": "天津",
      "isDelete": false

    }, {
      "id": 7,
      "name": "小路",
      "userName": "小路",
      "sex": "女",
      "age": "21",
      "phone": "12345678910",
      "email": "123@qq.com",
      "address": "天津",
      "isDelete": false

    }, {
      "id": 8,
      "name": "李琦",
      "userName": "李琦",
      "sex": "女",
      "age": "21",
      "phone": "12345678910",
      "email": "123@qq.com",
      "address": "天津",
      "isDelete": false

    }]
  }
})
