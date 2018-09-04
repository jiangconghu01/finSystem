<template>
  <div class="index">
      <div class="header">
          <img src="../static/dxlogo.png" alt="">
          <img src="../static/split.png" alt="">
          <img src="../static/czlogo.png" alt="">
          <div class="header-text">
              <span>欢迎你管理员</span>
              <span>|</span>
              <span>当前在线</span>
              <span class="number">23423</span>
              <span>人</span>
              <span>|</span>
              <span class="action mod-password">修改密码</span>
              <span>|</span>
              <span class="action exit">退出</span>
          </div>
      </div>
      <div class="nav">
        <el-tabs type="border-card">
        <el-tab-pane label="用户管理">
            <Content/>
        </el-tab-pane>
        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>


        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
      </div>
  </div>
</template>

<script>
import Content from './indexContent.vue';
export default {
  data () {
    return {
        aa:'this is index page'
    };
  },
  components: {
      Content
  },

  computed: {},

  mounted() {
  },

  methods: {}
}

</script>
<style lang='scss' scoped>
    .header{
        background: url('../static/topbg.png');
        &::after{
            display: inline-block;
            content: '';
            margin-top: 5%;
        }
        img{
          float: left;
          margin-left:1.5%;
            &:nth-child(1){
                margin-top:1%;
                width: 10%;
            }  
            &:nth-child(2){
                margin-top:0.2%;
                width: 0.1%;
            }  
            &:nth-child(3){
                margin-top:1.5%;
                 width: 15%;
            }  
        }
        .header-text{
            float: right;
            margin-top:2%;
            margin-right: 1.5%;
            font-size: 1em;
            .action{
                color: #004DA1;
                cursor: pointer;
            }
            .number{
                color:chocolate;
            }
        }
    }
    .nav{
        color: #fff;
        // background: url('../static/navbg.png');
        // &::after{
        //     display: inline-block;
        //     content: '';
        //     margin-top: 2.5%;
        // }
    }
</style>


