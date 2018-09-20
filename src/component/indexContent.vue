<template>
  <!-- <div class="container" :style="{height:height+'px'}"> -->
  <div class="container" >
    <div class="left-side">
      <p class="title">土地房屋管理</p>
      <el-tree :data="dataTree" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      <el-tree 
      :data="dataTree2" 
      :props="defaultProps" 
      node-key="id" 
      @node-click="handleNodeClick2" 
      :default-expanded-keys=[1]
      class="leve1-tree"></el-tree>
    </div>
    <div class="right-side">
        <component v-bind:is="currentContent" :data="tt" class="right-content"></component>
    </div>
  </div>
</template>

<script>
import Basic from './rightcontent/basic.vue';
import Basic2 from './rightcontent/basic2.vue';
export default {
  props:{
    height:{
            type: Number,
            required: false
        }
    
  },
  data () {
    return {
          boxheight:this.height,
          currentContent: 'Basic',
          tt:1237,
          dataTree2:[{
            id:1,
            label: '一级 1',
            children: [
            {
              label: 'werwerwerw',
            },
            {
              label: 'dfsdfsdfsdfsdf',
            },
            {
              label: 'sdfsdfsdfsdf'
            }
            ]
           }],
          dataTree: [{
          label: '一级 1',
          children: [
          {
            label: '二级 1-1',
            test: 'Basic'
          },
          {
            label: '二级 1-2',
            test: 'Basic2'
          },
          {
            label: '二级 1-3'
          }
          ]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            },{
              label: '三级 2-1-2'
            },{
              label: '三级 2-1-3'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
    };
  },

  methods: {
      handleNodeClick(data) {
        //console.log(data);
        const temp = data.test;
        temp && (this.currentContent = temp);
      },
      handleNodeClick2(data) {
        console.log(data);
      }
  },
  components: {
      Basic,
      Basic2
  },

  computed: {},

  mounted() {
    // this.$http.get('/czxt/pagesnew/sysModule.action').then(res=>{
    //   console.log(res);
    // });
    this.currentContent === 'Basic' && this.$nextTick(()=>{
        const h = document.body.scrollHeight - document.getElementById('header').scrollHeight +'px';
        this.$emit('setHeight', h);
    });
  }

}

</script>
<style lang='scss' scoped>
    .container{
        height: 100%;
        background-color:#fff;
        padding:0px;
        .left-side{
          overflow: auto;
          float: left;
          .title{
            color:#5786B1;
            font-size: 14px;
            font-weight: bold;
            height: 40px;
            line-height: 40px;
          }
          width: 195px;
          height: 100%;
          padding-left: 5px;
          background-color: #F7F7F7;
          border-right: 1px solid #EAEAEA;
        }
        .right-side{
          height: 100%;
          width: calc(100% - 205px);
         // overflow: auto;
          float: left;
          //background-color: aqua;
         
        }
    }
</style>