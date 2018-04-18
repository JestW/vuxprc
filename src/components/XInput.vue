<template>
  <div>
    <p>this is input</p>
    <group title="set is-type=china-name">
      <x-input title="姓名" name="username" placeholder="请输入姓名" v-model="value" @on-blur="onBlur" @on-change="change" type="number"></x-input>
    </group>
  </div>
</template>

<script>
  import { XInput } from 'vux'
  export default {
    name: "Test",
    data:{
      value:''
    },
    components: {
      XInput
    },
    methods:{
      change (val) {
        console.log('on change',val)
      },
      onBlur (val) {
        console.log('on blur', val);
        console.log('HELLO');
      },
    }
  }
</script>

<style scoped>
  body{
    background: antiquewhite;
  }
  .red {
    color: red;
  }
  .green {
    color: green;
  }
</style>
