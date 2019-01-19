<!-- 商家介绍栏组件 -->
<template>
  <div class="introduction">
    <p class="introduction-title">{{storeIntroTitle}}</p>
    <!--hr class="cutting-line"-->
    <p class="introduction-content">{{$store.state.shopDetail.shopIntroContent}}</p>
  </div>
</template>

<script>
export default {
  props: {
    storeIntroTitle: {
      default: '店铺介绍'
    },
    storeIntroContent: {
      default: '至善坊一直全力打造集健康、美味、正宗、便捷为一体的综合性快餐模式，可为广大师生提供品类丰富的精美菜肴和地方名优特色小吃，以满足您挑剔的味蕾。'
    }
  }
}
</script>

<style>
.introductoin {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* border-bottom: 0.5px solid black; */
}
.introduction-title {
  font-size: 140%;
  font-weight: bold;
  text-align: left;
}
.cutting-line {
  size: 1;
  color: #f2f2f2;

}
.introduction-content {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 80%;
  text-align: left;
  padding-bottom: 30px;
  /*border-bottom: 0.5px solid gray;*/
}
</style>
