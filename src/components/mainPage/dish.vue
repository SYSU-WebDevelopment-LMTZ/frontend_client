<template>
  <div class="dish_box">
    <img class="dish_pict" :src="item.imageurl" @click="showDetail"/><!--**v-lazy="item.dish_pict" @click="showDetail"/-->
    <div class="dish_ditail_box" @click="showDetail">
      <p class="dish_name">{{item.name}}</p>
      <!-- <p class="dish_sale">{{'销量'+item.dish_sale}}</p> -->
      <p class="dish_price">{{'￥ '+item.price}}</p>
    </div>
    <div class="buttons_box">
      <img v-show="isChoosed" src="../../assets/icon/minus.png" width="25" height="25" @click="minus_dish"/>
      <p class="dishes_num" v-show="isChoosed">{{gainDishNum}}</p>
      <img src="../../assets/icon/add.png" width="25" height="25" @click="add_dish"/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import { PaletteButton } from 'mint-ui'
Vue.component(PaletteButton.name, PaletteButton)
/* eslint-disable */
export default {
  name: 'dish',
  props: {
    item: {
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      isChoosed: false
    }
  },
  computed: {
    gainDishNum: function () {
      for (var i = 0; i < this.$store.state.selectedDishes.length; i++) {
        if (this.$store.state.selectedDishes[i].dish_name === this.item.name) {
          this.isChoosed = true
          return this.$store.state.selectedDishes[i].dish_copy
        }
      }
      this.isChoosed = false
      return 0
    }
  },
  methods: {
    minus_dish: function () {
      this.$store.state.thingsNum -= 1
      for (var i = 0; i < this.$store.state.selectedDishes.length; i++) {
        if (this.$store.state.selectedDishes[i].dish_name === this.item.name) {
          this.$store.state.selectedDishes[i].dish_copy--
          this.$store.state.totalPrice -= this.item.price
          if (this.$store.state.selectedDishes[i].dish_copy === 0) {
            this.$store.state.selectedDishes.splice(i, 1)
          }
        }
      }
    },
    add_dish: function () {
      this.$store.state.thingsNum += 1
      // 将选定的菜品添加到selectedDish中
      // 遍历数组，查看选择的菜品是不是已在selectDishes中
      for (var i = 0; i < this.$store.state.selectedDishes.length; i++) {
        if (this.$store.state.selectedDishes[i].dish_name === this.item.name) {
          this.$store.state.selectedDishes[i].dish_copy++
          this.$store.state.totalPrice = this.$store.state.totalPrice + this.item.price
          return
        }
      }
      this.$store.state.selectedDishes.push({
        dish_id: this.item.dishid,
        dish_name: this.item.name,
        dish_icon_url: this.item.imageurl,
        dish_copy: 1,
        dish_price: this.item.price})
      // 计算金额
      this.$store.state.totalPrice = this.$store.state.totalPrice + this.item.price
    },
    showDetail: function () {
      console.log('getDishDetail')
      console.log(this.item.dishid)
      // var url = 'http://localhost:5000/dish/'
      var url = this.$store.state.baseApi + '/dish/'
      axios.get(url + this.item.dishid)
        .then((response) => {
          console.log('get dish detail success')
          console.log(response.data)
          this.$store.state.show = true
          this.$store.state.dishDetail.dish_name = response.data.name
          this.$store.state.dishDetail.dish_pict = response.data.imageurl
          this.$store.state.dishDetail.dish_price = response.data.price
          this.$store.state.dishDetail.dish_discription = response.data.description
        })
        .catch(function (error) {
          console.log('get dish detail fail')
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.dish_box {
  width: 100%;
  height: 12vh;
  display: flex;
  flex-direction: row;
  border-block-end: solid;
  border-width: 0.1vw;
  padding: 1%;
  position: relative;
}

.dish_pict {
  height: 12vh;
  width: 12vh;
}

.dish_ditail_box {
  display: flex;
  flex-direction: column;
  height: 12vh;
  width: 40%;
  margin-left: 2%;
}

.dish_name {
  font-size: 2vw;
  text-align: start;
  margin-top: 0;
  margin-left: 5%;
  margin-bottom: 0;
}

/*.dish_sale {
  font-size: 0.5vw;
  text-align: start;
  margin-top: 2%;
  margin-left: 5%;
  margin-bottom: 0;
}*/

.dish_price {
  font-size: 1vw;
  text-align: start;
  margin-top: 0%;
  margin-left: 5%;
  margin-bottom: 0;
  color: red;
}

.buttons_box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  right: 2%;
  bottom: 10%;
}

.dishes_num {
  font-size: 2vw;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
  margin-bottom: 0;
  margin-top: 0;
}

.minus_button {
  height: 3.5vh;
  width: 3.5vh;
  background-color: rgb(253, 218, 88);
  border-radius: 50%;
}

.add_button {
  height: 3.5vh;
  width: 3.5vh;
  background-color: rgb(253, 218, 88);
  margin-left: 1.5vw;
  border-radius: 50%;
}
</style>
