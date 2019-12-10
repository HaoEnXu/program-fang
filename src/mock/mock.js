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
