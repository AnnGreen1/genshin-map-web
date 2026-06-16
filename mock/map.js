const Mock = require('mockjs')

module.exports = [
  {
    url: '/map/label/tree',
    type: 'get',
    response: _ => {
      return {
        retcode: 0,
        data: {
          tree: [
            {
              id: 1,
              name: '传送锚点',
              children: [
                { id: 101, name: '蒙德传送锚点', icon: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/point/icon/101.png', parent_id: 1, visible: true },
                { id: 102, name: '璃月传送锚点', icon: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/point/icon/102.png', parent_id: 1, visible: true }
              ]
            },
            {
              id: 2,
              name: '七天神像',
              children: [
                { id: 201, name: '风神神像', icon: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/point/icon/201.png', parent_id: 2, visible: true },
                { id: 202, name: '岩神神像', icon: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/point/icon/202.png', parent_id: 2, visible: true }
              ]
            },
            {
              id: 3,
              name: '秘境',
              children: [
                { id: 301, name: '普通秘境', icon: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/point/icon/301.png', parent_id: 3, visible: true },
                { id: 302, name: 'BOSS秘境', icon: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/point/icon/302.png', parent_id: 3, visible: true }
              ]
            },
            {
              id: 4,
              name: '宝箱',
              children: [
                { id: 401, name: '普通宝箱', icon: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/point/icon/401.png', parent_id: 4, visible: true },
                { id: 402, name: '珍贵宝箱', icon: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/point/icon/402.png', parent_id: 4, visible: true },
                { id: 403, name: '华丽宝箱', icon: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/point/icon/403.png', parent_id: 4, visible: true }
              ]
            },
            {
              id: 5,
              name: '资源点',
              children: [
                { id: 501, name: '矿石', icon: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/point/icon/501.png', parent_id: 5, visible: true },
                { id: 502, name: '植物', icon: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/point/icon/502.png', parent_id: 5, visible: true },
                { id: 503, name: '特产', icon: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/point/icon/503.png', parent_id: 5, visible: true }
              ]
            }
          ]
        }
      }
    }
  },
  {
    url: '/map/info',
    type: 'get',
    response: _ => {
      return {
        retcode: 0,
        data: {
          info: {
            id: 2,
            name: '提瓦特大陆',
            detail: JSON.stringify({
              minZoom: 1,
              maxZoom: 6,
              offsetX: 4843,
              offsetY: 2796,
              tileSize: 64,
              width: 10000,
              height: 8000
            }),
            mapUrl: 'http://webrd01.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}'
          }
        }
      }
    }
  },
  {
    url: '/map/point/list',
    type: 'get',
    response: _ => {
      const labelList = [
        { id: 101, name: '蒙德传送锚点', icon: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/point/icon/101.png' },
        { id: 102, name: '璃月传送锚点', icon: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/point/icon/102.png' },
        { id: 201, name: '风神神像', icon: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/point/icon/201.png' },
        { id: 202, name: '岩神神像', icon: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/point/icon/202.png' },
        { id: 301, name: '普通秘境', icon: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/point/icon/301.png' },
        { id: 401, name: '普通宝箱', icon: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/point/icon/401.png' },
        { id: 402, name: '珍贵宝箱', icon: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/point/icon/402.png' },
        { id: 501, name: '矿石', icon: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/point/icon/501.png' },
        { id: 502, name: '植物', icon: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/point/icon/502.png' }
      ]
      
      const pointList = [
        { id: 1, label_id: 101, x_pos: 1200, y_pos: 1500, name: '风起地传送锚点' },
        { id: 2, label_id: 101, x_pos: 1800, y_pos: 1200, name: '蒙德城传送锚点' },
        { id: 3, label_id: 102, x_pos: 4500, y_pos: 3200, name: '璃月港传送锚点' },
        { id: 4, label_id: 102, x_pos: 4200, y_pos: 2800, name: '荻花洲传送锚点' },
        { id: 5, label_id: 201, x_pos: 1500, y_pos: 1800, name: '风起地风神神像' },
        { id: 6, label_id: 202, x_pos: 4800, y_pos: 3000, name: '璃月港岩神神像' },
        { id: 7, label_id: 301, x_pos: 2000, y_pos: 2000, name: '忘却之峡' },
        { id: 8, label_id: 301, x_pos: 4000, y_pos: 3500, name: '华池岩岫' },
        { id: 9, label_id: 401, x_pos: 1300, y_pos: 1600, name: '普通宝箱-1' },
        { id: 10, label_id: 402, x_pos: 1600, y_pos: 1700, name: '珍贵宝箱-1' },
        { id: 11, label_id: 401, x_pos: 4400, y_pos: 3100, name: '普通宝箱-2' },
        { id: 12, label_id: 501, x_pos: 1400, y_pos: 1900, name: '水晶矿-1' },
        { id: 13, label_id: 501, x_pos: 4600, y_pos: 3300, name: '水晶矿-2' },
        { id: 14, label_id: 502, x_pos: 1700, y_pos: 1500, name: '风车菊' },
        { id: 15, label_id: 502, x_pos: 4300, y_pos: 2900, name: '琉璃百合' }
      ]
      
      return {
        retcode: 0,
        data: {
          label_list: labelList,
          point_list: pointList
        }
      }
    }
  },
  {
    url: '/map/get_map_pageLabel',
    type: 'get',
    response: _ => {
      return {
        retcode: 0,
        data: {
          list: [
            { id: 1, name: '蒙德', pc_icon_url: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/page/1_pc.png', pc_icon_url2: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/page/1_pc_s.png', type: 1 },
            { id: 2, name: '璃月', pc_icon_url: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/page/2_pc.png', pc_icon_url2: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/page/2_pc_s.png', type: 1 },
            { id: 3, name: '稻妻', pc_icon_url: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/page/3_pc.png', pc_icon_url2: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/page/3_pc_s.png', type: 1 },
            { id: 4, name: '须弥', pc_icon_url: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/page/4_pc.png', pc_icon_url2: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/page/4_pc_s.png', type: 1 }
          ]
        }
      }
    }
  },
  {
    url: '/map/spot_kind/get_icon_list',
    type: 'get',
    response: _ => {
      return {
        retcode: 0,
        data: [
          { id: 1, icon: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/point/icon/1.png', name: '传送锚点' },
          { id: 2, icon: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/point/icon/2.png', name: '七天神像' },
          { id: 3, icon: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/point/icon/3.png', name: '秘境' },
          { id: 4, icon: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/point/icon/4.png', name: '宝箱' },
          { id: 5, icon: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/point/icon/5.png', name: '资源点' }
        ]
      }
    }
  },
  {
    url: '/map/get_public_notice',
    type: 'get',
    response: _ => {
      return {
        retcode: 0,
        data: [
          { id: 1, title: '版本更新', content: '2.0版本现已上线，新增稻妻地区', time: '2024-01-15' },
          { id: 2, title: '活动公告', content: '限时活动「海灯节」即将开启', time: '2024-01-10' }
        ]
      }
    }
  },
  {
    url: '/map/map_anchor/list',
    type: 'get',
    response: _ => {
      return {
        retcode: 0,
        data: [
          { id: 1, name: '蒙德城', x_pos: 1800, y_pos: 1200 },
          { id: 2, name: '璃月港', x_pos: 4500, y_pos: 3200 },
          { id: 3, name: '风起地', x_pos: 1500, y_pos: 1800 }
        ]
      }
    }
  },
  {
    url: '/map/spot_kind/get_spot_kinds',
    type: 'get',
    response: _ => {
      return {
        retcode: 0,
        data: [
          { id: 1, name: '传送锚点', icon: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/point/icon/1.png' },
          { id: 2, name: '七天神像', icon: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/point/icon/2.png' },
          { id: 3, name: '秘境', icon: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/point/icon/3.png' },
          { id: 4, name: '宝箱', icon: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/point/icon/4.png' },
          { id: 5, name: '资源点', icon: 'https://webstatic.mihoyo.com/app/ys-map-cn/gis/ys_obc/point/icon/5.png' }
        ]
      }
    }
  },
  {
    url: '/map/point/mark_map_point_list',
    type: 'get',
    response: _ => {
      return {
        retcode: 0,
        data: []
      }
    }
  },
  {
    url: '/map/point/info',
    type: 'get',
    response: req => {
      const pointId = parseInt(req.query.point_id)
      const points = {
        1: { id: 1, name: '风起地传送锚点', content: '位于风起地的传送锚点，可以快速传送到这里。', expansion: '[]' },
        2: { id: 2, name: '蒙德城传送锚点', content: '蒙德城中心的传送锚点，方便市民出行。', expansion: '[]' },
        3: { id: 3, name: '璃月港传送锚点', content: '璃月港的传送锚点，靠近港口区域。', expansion: '[]' },
        4: { id: 4, name: '荻花洲传送锚点', content: '荻花洲附近的传送锚点。', expansion: '[]' },
        5: { id: 5, name: '风起地风神神像', content: '供奉风神巴巴托斯的神像，可以回复角色血量。', expansion: JSON.stringify([{ title: '解锁奖励', content: '解锁后可获得风元素共鸣效果' }]) },
        6: { id: 6, name: '璃月港岩神神像', content: '供奉岩神钟离的神像，可以回复角色血量。', expansion: JSON.stringify([{ title: '解锁奖励', content: '解锁后可获得岩元素共鸣效果' }]) },
        7: { id: 7, name: '忘却之峡', content: '普通秘境，可获得经验书和武器突破材料。', expansion: '[]' },
        8: { id: 8, name: '华池岩岫', content: '璃月地区的普通秘境。', expansion: '[]' },
        9: { id: 9, name: '普通宝箱', content: '普通的宝箱，可能包含摩拉和素材。', expansion: '[]' },
        10: { id: 10, name: '珍贵宝箱', content: '珍贵的宝箱，包含稀有的物品和大量摩拉。', expansion: JSON.stringify([{ title: '可能获得', content: '四星武器、天赋材料' }]) },
        12: { id: 12, name: '水晶矿', content: '可以采集水晶矿，用于锻造武器。', expansion: '[]' },
        14: { id: 14, name: '风车菊', content: '蒙德地区的特产，可用于角色突破。', expansion: '[]' },
        15: { id: 15, name: '琉璃百合', content: '璃月地区的特产，可用于角色突破。', expansion: '[]' }
      }
      
      const info = points[pointId] || { id: pointId, name: '未知地点', content: '', expansion: '[]' }
      
      return {
        retcode: 0,
        data: {
          info: info
        }
      }
    }
  }
]