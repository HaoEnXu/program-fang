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
          "photo": "/static/hotRecomment/electric/1/11pro.jpg",
          "createDate": "2019-12-05 14:58:00.0",
          "updateDate": "2019-12-05 14:58:00.0",
          "type": "大牌云集1",
          "status": 2,
          "advertisement": 1,
          "freshness": "全新上架",
          "isDelete": 0,
          "price": "¥868.00"
        }, {
          "id": 12,
          "goodName": "iPhone8",
          "photo": "/static/hotRecomment/electric/1/iPhone8.jpg",
          "createDate": "2019-12-05 14:58:00.0",
          "updateDate": "2019-12-05 14:58:00.0",
          "type": "大牌云集1",
          "status": 2,
          "advertisement": 1,
          "freshness": "全新上架",
          "isDelete": 0,
          "price": "¥868.00"
        }, {
          "id": 13,
          "goodName": "iPhoneXR",
          "photo": "/static/hotRecomment/electric/1/xr.jpg",
          "createDate": "2019-12-05 14:58:00.0",
          "updateDate": "2019-12-05 14:58:00.0",
          "type": "大牌云集1",
          "status": 2,
          "advertisement": 1,
          "freshness": "全新上架",
          "isDelete": 0,
          "price": "¥868.00"
        }, {
          "id": 14,
          "goodName": "iPhoneXS",
          "photo": "/static/hotRecomment/electric/1/xs.jpg",
          "createDate": "2019-12-05 14:58:00.0",
          "updateDate": "2019-12-05 14:58:00.0",
          "type": "大牌云集1",
          "status": 2,
          "advertisement": 1,
          "freshness": "全新上架",
          "isDelete": 0,
          "price": "¥868.00"
        }]
      }
    }
  } else {

  }

})
