<template>
  <div class="basic-page  clearfix">
      <div class="left-box">
        <div class="card infor">
            <Title-text>最近业务通知</Title-text>
        </div>
        <div class="card wait"></div>
        <div class="card common"></div>
        <div class="card download-web"></div>
      </div>
      <div class="right-box">
        <div class="card common"></div>
        <div class="card question"></div>
        <div class="card handbook"></div>
      </div>
  </div>
</template>

<script>
import TitleText from '../partcomponent/title.vue';
export default {
  data () {
    return {
    };
  },
  components: {
      TitleText
  },
  methods: {},
  computed: {},
  mounted() {}


}
</script>
<style lang='scss' scoped>
.basic-page{
    background-color: #F5F5F5;
    border-left: 1px solid #EAEAEA;
    color:black;
    //height: 100%;
    .left-box{
        width:70%;
        float: left;
        font-size:0;
        .infor{
            height: 245px;
            width: 47%;
            display: inline-block;
            vertical-align: top;
        }
        .wait{
            height: 245px;
            display: inline-block;
            width: 47%;
            vertical-align: top;
        }
        .common{
            height: 180px;
            width:96%;
        }
        .download-web{
            height: 200px;
            width:96%;
            margin-bottom:20px;
        }
        &>.card{
            font-size: 16px;
            margin-left: 2%;            
            margin-top:2%;
            background-color: #fff;
        }
    }
    .right-box{
        width: 28%;;
        float:left;
        &>.card{
            margin-left: 2%;            
            margin-top:5%;
            background-color: #fff;
        }
        .common{
            height: 245px;
            width:98%;
        }  
        .question{
            height: 270px;
            width: 98%;
        }
        .handbook{
            height: 70px;
            width: 98%;
        }      
    }

}
.clearfix:after {
        visibility: hidden;
        display: block;
        font-size: 0;
        content: " ";
        clear: both;
        height: 0;
}
</style>