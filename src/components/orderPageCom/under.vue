<template>
  <div class="under">
    <div class="word_box">
      <p class="total_num">合计</p>
      <p class="total_price">{{'￥' + totalPrice}}</p>
    </div>
    <div class="commit_a">
        <mt-button class="commit_order_btn" type="default" @click="makeOrder">提交订单</mt-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import { Toast, Tabbar, TabItem } from 'mint-ui'

Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)

export default {
  name: 'commit_under',
  props: {
    totalPrice: {
      default: function () {
        return 55.82
      }
    }
  },
  methods: {
    makeOrder () {
      if (this.$store.state.selectedDishes.length === 0) {
        Toast('尚未选择任何菜品')
        this.$router.go(-1)
      } else {
        var allDishes = []
        var dishes = this.$store.state.selectedDishes
        console.log(dishes)
        for (var i = 0; i < dishes.length; i++) {
          var dish = {}
          dish['dishid'] = dishes[i].dish_id
          dish['count'] = dishes[i].dish_copy
          allDishes.push(dish)
        }
        var data = {
          restaurant_id: 1,
          tableid: 1,
          dishes: allDishes,
          note: 'this is a note'
        }
        axios.post('http://localhost:5000/order/', data)
          .then((response) => {
            console.log('post order success')
            console.log(response.data)
            this.$store.state.orderId = response.data.orderid
          })
          .catch(function (error) {
            console.log('post order fail')
            console.log(error)
          })
        this.$router.push({path: 'payPage'})
      }
    }
  }
}
</script>

<style>

.under {
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  background-color: #333333;
  width: 100%;
  height: 8%;
  margin-left:0%;
  margin-right:0%;
  padding:0%;
  /*padding-top:10px;/**/
  /*padding-bottom:10px;/**/
}

.word_box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 62%;
  margin-left: 0%;
  margin-top:0%;
  text-align: center;
  margin:0 10px;
}

.total_num {
  color: #D9D9D9;
  font-size: 2vw;
  width: 20%;
  line-height: 100%;
  text-align: center;
}

.total_price {
  color: #FFFFFF;
  font-size: 2vw;
  text-align: center;
  line-height: 100%;
}

.commit_a {
  width: 30%;
  height: 100%;
  background-color: rgb(255, 179, 66);
}

.commit_order_btn {
  background-color: rgb(255, 179, 66);
  color: #000000;
  font-size: 2vw;
  margin: 0;
  height: 100%;
  width: 100%;
  text-align: center;
}
</style>
