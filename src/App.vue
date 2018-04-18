<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<p>this is app</p>-->
    <div v-transfer-dom>
      <loading :show="show2" text=""></loading>
    </div>
    <popup-header :left-text="'取消'" :right-text="'确定'" :title="'这里是中间主题'"></popup-header>
    <tabbar style="line-height: 14px">
      <tabbar-item>
        <img slot="icon" src="./assets/images/demo/icon_nav_button.png">
        <span slot="label">Wechat</span>images/
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="./assets/images/demo/icon_nav_msg.png">
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item selected link="/component/demo">
        <img slot="icon" src="./assets/images/demo/icon_nav_article.png">
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="./assets/images/demo/icon_nav_cell.png">
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar>
     <!-- <Settings
      ></Settings>-->
    <router-view/>
  </div>
</template>

<script>
  import {TransferDom ,Tabbar,
    TabbarItem,PopupHeader,TransferDomDirective ,Drawer,Loading} from 'vux'
export default {
  name: 'App',
  data(){
    return{
      show2: false
    }
  },
  components:{
    Tabbar,
    TabbarItem,
    PopupHeader,
    TransferDomDirective,
    Drawer,
    TransferDom,
    Loading
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top:0;
  overflow: hidden;
}
</style>
