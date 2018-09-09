<template>
  <div class="card" >
    <div class="title">
        <img :src="url" alt="">
        <span class="title-text"> 
            <slot name="title"></slot>
        </span>
       
    </div>
    <div class="text">
        <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
    props:{
       url:{
           type:String,
           required:false
       } 
    },
  data () {
    return {
    };
  },

  methods: {},
  components: {},

  computed: {},

  mounted() {}

}

</script>
<style lang='scss' scoped>
.card{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 15px 10px;
    border: 1px solid #EAEAEA;
    cursor: pointer;
    .title{
        img{
            width: 30px;
            height: 30px;
        }
        .title-text{
            font-size: 14px;
            display: inline-block;
            line-height: 30px;
            height: 30px;
            vertical-align: top;
            padding-left: 5px;
            color: #333333;
            letter-spacing: 0.5px;
        }
        margin-left: 5px; 
    }
    .text{
        padding: 5px 10px;
        font-size: 14px;
        color: #999999;
        
    }
}
</style>