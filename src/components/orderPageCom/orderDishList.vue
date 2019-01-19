<template>
  <div class="order_dish_list">
    <div class="dish_list">
      <div class="dish_item" v-for="item in dishes" v-bind:key="item.id">
        <img class="dish_icon" :src="item.dish_icon_url">
        <div class="dish_detail">
          <p class="dish_name">{{item.dish_name}}</p>
          <p class="dish_copy">{{'x '+item.dish_copy}}</p>
        </div>
          <p class="dish_price">{{'¥ ' + item.dish_price}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dishes: {
      default: function () {
        return [
        ]
      }
    }
  }
}
</script>

<style scoped>

.order_dish_list {
  width: 100%;
}

.dish_list {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.dish_item {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  border-width: 1%;
  border-color: #f2f2f2;
  border-style: solid;
  padding: 0%;
  height: 50%;
  width: 98%;
  background-color: #FFFFFF;
}

.dish_icon {
  height: 10vh;
  width: 10vh;
  margin-top: 4%;
  margin-bottom: 4%;
  margin-left:2%;
}

.dish_detail {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 4%;
}

.dish_name {
  text-align: left;
  font-size: 2vw;
  margin-top: 15%;
  margin-left: 0%;
  height: 70%;
}

.dish_copy {
  font-size: 1.5vw;
  text-align: start;
  margin-top: 0%;
  height: 12px;
  color: #2f373d;
}

.dish_price {
  text-align: right;
  font-size: 120%;
  margin:3% 0% 0% 30%;
  height: 100%;
}
</style>
