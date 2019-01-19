<template>
  <div class="dishes_box">
    <div class="category_box">
      <!--p class="category_word">default categroy</p-->
    </div>
    <div v-for="dish in dishes" v-bind:key="dish.id">
      <dish :item="dish"></dish>
    </div>
  </div>
</template>

<script>
import dish from './dish.vue'
export default {
  name: 'category',
  components: {
    'dish': dish
  },
  props: {
    dishes: {
      default: function () {
        return [{}]
      }
    }
  },
  methods: {
    mergeCategroy: function (category, num) {
      return category + '(' + num + ')'
    }
  }
}
</script>

<style>
.dishes_box {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 72vw;
}

.category_box {
  background-color: rgb(253, 218, 88);
  margin-top: 1%;
  height: 4vh;
  width: 100%;
}

.category_word {
  display: flex;
  font-size: 1.5vw;
  margin-left: 1vw;
  margin-top: 0px;
  margin-bottom: 0.5px;
}

</style>
