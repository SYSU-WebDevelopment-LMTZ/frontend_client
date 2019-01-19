import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
/* eslint-disable */
export default new vuex.Store({
    state:{
      storeName: '至善坊',
      orderId: 0,
      totalPrice: 0,
      show: false,
      isShowShoppingCart: false,
      inputKeyword: '',
      isSearching: false,
      hasSearchResult: false,
      /* searchResultDishes: [
        {
          category: '搜索结果',
          dishes_num: 0,
          dishes_list: []
        }
      ], */
      shopDetail: {
        shopImg: require('../../assets/img/zhao_pai.jpg'),
        shopName: '至善坊',
        shopIntroContent: '双鸭至善坊一直全力打造集健康、美味、正宗、便捷为一体的综合性快餐模式，可为广大师生提供品类丰富的精美菜肴和地方名优特色小吃，以满足您挑剔的味蕾。',
        /* hotDishes: ['双鸭三宝'],
        // 赞数
        hots: 99 */
      },
      dishDetail: {
        dish_name: '清蒸双鸭',
        dish_pict: require('../../assets/img/qing_zheng_shuang_ya.jpg'),
        dish_sale: 666,
        dish_price: 18,
        dish_discription: '清蒸鸭子是一道传统名菜，清蒸鸭子的肉香味美，肉质软烂。'
      },
      // 顾客选中了的菜品
      thingsNum: 0,
      selectedDishes: [],
      dishes: [
      {
        category: '热销',
        dishes_num: 3,
        dishes_list: [
          {
            dish_name: '皮蛋瘦肉粥',
            dish_pict: 'http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750',
            dish_sale: 666,
            dish_price: 10,
            dish_discription: ''
          },
          {
            dish_name: '招牌猪肉白菜锅贴',
            dish_pict: "http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750",
            dish_price: 19,
            dish_discription: ''
          },
          {
            dish_name: '凉拌牛肚',
            dish_pict: require('../../assets/img/niu_du.jpg'),
            dish_sale: 636,
            dish_price: 15,
            dish_discription: ''
          }
        ]
      },
      {
        category: '精选菜品',
        dishes_num: 3,
        dishes_list: [
          {
            dish_name: '手撕包菜',
            dish_pict: require('../../assets/img/shou_si_bao_cai.jpg'),
            dish_sale: 666,
            dish_price: 12,
            dish_discription: ''
          },
          {
            dish_name: '秘制鸡翅',
            dish_pict: require('../../assets/img/ji_chi.jpg'),
            dish_sale: 666,
            dish_price: 13,
            dish_discription: '。'
          },
          {
            dish_name: '八宝酱菜',
            dish_pict: "http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750",
            dish_sale: 666,
            dish_price: 14,
            dish_discription: ''
          },
          {
            dish_name: '干锅千叶',
            dish_pict: require('../../assets/img/gan_guo_qian_ye.jpg'),
            dish_sale: 666,
            dish_price: 12,
            dish_discription: ''
          }
        ]
      },
      {
        category: '饮料区',
        dishes_num: 2,
        dishes_list: [
          {
            dish_name: 'VC无限橙果汁',
            dish_pict: "http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750",
            dish_sale: 606,
            dish_price: 5,
            dish_discription: ''
          },
          {
            dish_name: '蜜瓜圣女杯',
            dish_pict: "http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/750/h/750",
            dish_sale: 556,
            dish_price: 3,
            dish_discription: ''
          }
        ]
      }
    ]
  },
  /* mutations: {
    updateKeyword (state, message) {
      state.inputKeyword = message
      state.isSearching = (message === '') ? false : true
    }
  } */
})
