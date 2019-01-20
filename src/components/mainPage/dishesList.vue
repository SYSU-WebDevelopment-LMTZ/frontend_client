<template>
  <div class="dishes_list">
    <dishDetail class="dishDetail" v-show="$store.state.show"></dishDetail>
    <div class="left_list">
      <guide :dishes="dishes"></guide>
    </div>
    <div class="right_list">
        <category :dishes="dishes"></category>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import guide from './guide.vue'
import category from './category.vue'
import dishDetail from './dishDetail.vue'

export default {
  name: 'dishes_list',
  data () {
    return {
      dishes: []
    }
  },
  components: {
    'guide': guide,
    'category': category,
    'dishDetail': dishDetail
  },
  methods: {
    getDishes () {
      console.log('getDishes')
      // var url = 'http://localhost:5000/dish/'
      var url = this.$store.state.baseApi + '/dish/'
      axios.get(url)
        .then((response) => {
          console.log('get success')
          console.log(response.data)
          this.dishes = response.data
        })
        .catch(function (error) {
          console.log('get fail')
          console.log(error)
        })
    }
  },
  created () {
    this.getDishes()
  }
}
</script>

<style>
.dishDetail {
  position: fixed;
  top: 20vh;
  left: 15vw;
}

.dishes_list {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 14.8vh;
}

.left_list {
  height: 77vh;
  margin-right: -15px;
  margin-bottom: -15px;
  background-color: rgb(254, 245, 230);
  margin-left: 0.1vw;
}

.right_list {
  display: flex;
  flex-direction: column;
  width: 75%;
  /*overflow: scroll;*/
  overflow-x: hidden;
  overflow-y: auto;
  height: 77vh;
}

</style>
