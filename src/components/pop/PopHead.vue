<template>
 <div id="pophead">
   <div v-transfer-dom>
     <popup v-model="show1">
       <!-- group already has a top border, so we need to hide header's bottom border-->
       <popup-header
         :left-text="'取消'"
         :right-text="'done'"
         :title="'Please select your card'"
         :show-bottom-border="false"
         @on-click-left="show1 = false"
         @on-click-right="show1 = false"></popup-header>
       <group gutter="0">
       </group>
     </popup>
   </div>
 </div>
</template>

<script>
  import Vue from 'vue'
  import { PopupHeader, Popup, TransferDom, Group, XSwitch, Radio } from 'vux'
  Vue.directive('transfer-dom', TransferDom)
    export default {
        name: "pophead",
        components: {
          PopupHeader,
          Popup,
          Group,
          XSwitch,
          Radio
        },
      data () {
        return {
          show1: false
        }
      }
    }
</script>
<style scoped>
</style>

