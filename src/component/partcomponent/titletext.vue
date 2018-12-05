<template>
  <div class="title" >
    <span class="text">
        <slot name="title"></slot>
    </span>
    <span class="more">
        <slot name="more"></slot>
    </span>
  </div>
</template>

<script>
export default {
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
    box-sizing: border-box;
    width: 100%;
    padding: 15px 10px;
    font-size: 16px;
    background-color:#FAFAFA ;
    border-bottom: 1px solid #EAEAEA;
    box-shadow: 1px 1px 1px#EAEAEA;
    .text{
        display: inline-block;
        vertical-align: top;
        margin-left: 5px; 
        //font-weight: bold;   
    }
    .more{
        color:#1F78CC;
        cursor: pointer;
        float: right;
        font-size: 14px;
        
    }
}
</style>