<template>
  <div class="index">
      <div class="header" ref="header" id="header">
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
              <span class="action exit" @click="logout()">退出</span>
          </div>
      </div>
      <div class="nav" :style="contentH">
      <!-- <div class="nav"> -->
        <el-tabs type="border-card">
        <el-tab-pane v-for="(ele,index) in mulist" :key="index" :label="ele.name">
            <Content @setHeight="getHeight" :mudata="ele" :index="index"/>
        </el-tab-pane>
        </el-tabs>
      </div>
  </div>
</template>

<script>
import Content from './indexContent.vue';
import mu from './test.js';
export default {
  data () {
    return {
        mulist: [],
        contentHeight: {
            height:'400px'
        }
    };
  },
  components: {
      Content
  },

  methods: {
      getHeight(h){
          this.contentHeight = h;
      },
      logout(){
          this.$http.get('/czxt/pages/logout.do').then(data =>{
              this.$router.replace({name: 'Login'});
          });
      }
  },
  computed: {
      contentH(){
          return this.contentHeight;
      }
  },
  created(){
    const a = mu.map(ele => {
      const item = {};
      const level1 = ele.sysModuleName;
      const childlist = ele.sysModuleList;
      const muchildlist = [];
      if(childlist.length > 0){
        childlist.forEach(ele => {
          const imu = {};
          imu.label = ele.sysModuleName
          imu.link = ele.sysModuleLink;
          imu.sysModuleCode = ele.sysModuleCode;
          imu.children = [];
          const childlist2 = ele.sysModuleList;
          if(childlist2.length > 0){
            childlist2.forEach(e => {
              imu.children.push({
                label: e.sysModuleName,
                link: e.sysModuleLink,
                sysModuleCode: e.sysModuleCode
              });
            });
          }
          muchildlist.push(imu);
        });
      }
      return {
        name: level1 || '',
        children: muchildlist
      }
    });
    this.mulist = a;
  },
  mounted() {
    //   const bodyHeight = document.body.scrollHeight ;
    //   const headerH = this.$refs.header.offsetHeight;
    //   this.contentHeight = bodyHeight - headerH - 40;
    //   console.log(bodyHeight)

  },

}

</script>
<style lang='scss' scoped>
    .index{
        height: 100%;
        background-color: #F7F7F7;
    }
    .header{
        background: url('../static/topbg.png');
        height: 70px;
        &::after{
            display: inline-block;
            content: '';
            //margin-top: 5%;
        }
        img{
          float: left;
          margin-left:1.5%;
            &:nth-child(1){
                margin-top:1%;
                //width: 10%;
            }  
            &:nth-child(2){
                margin-top:0.2%;
                height: 95%;
                //width: 0.1%;
            }  
            &:nth-child(3){
                margin-top:1.5%;
                 //width: 15%;
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
        height: calc(100% - 51px);
        // background: url('../static/navbg.png');
        // &::after{
        //     display: inline-block;
        //     content: '';
        //     margin-top: 2.5%;
        // }
    }
</style>


