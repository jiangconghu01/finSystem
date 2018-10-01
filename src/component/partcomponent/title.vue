<template>
  <div class="title" :style="{height:height}">
    <span class="bar" v-if="type == 'bar'" :style="{height:size}">
        
    </span>
    <span class="text" :style="{height:size}">
        <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'bar',
      required: false
    },
    size: {
      type: String,
      default: '16px',
      required: false
    },
    height: {
      type: String,
      default: '50px',
      required: false
    }
  },
  data () {
    return {
    }
  },

  methods: {},
  components: {},

  computed: {},

  mounted () {}

}
</script>
<style lang='scss' scoped>
.title{
    display: inline-block;
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    padding-top: 20px;
    font-size: 16px;
    .bar{
        display: inline-block;
        width: 5px;
        height: 16px;
        background-color: #388FE0;
    }
    .text{
        display: inline-block;
        vertical-align: top;
        margin-left: 5px; 
        //font-weight: bold;   
    }
}
</style>