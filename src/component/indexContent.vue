<template>
  <div class="container" :style="{height:height+'px'}">
    <div class="left-side">
      <p class="title">土地房屋管理</p>
      <el-tree :data="dataTree" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </div>
    <div class="right-side">
        <component v-bind:is="currentContent" class="right-content"></component>
    </div>
  </div>
</template>

<script>
import Test from './rightcontent/test.vue';
import Test2 from './rightcontent/test2.vue';
export default {
  props:{
    height:{
            type: Number,
            required: false
        }
  },
  data () {
    return {
          currentContent: 'Test',
          dataTree: [{
          label: '一级 1',
          children: [
          {
            label: '二级 1-1',
            test: 'Test'
          },
          {
            label: '二级 1-2',
            test: 'Test2'
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
      }
  },
  components: {
      Test,
      Test2
  },

  computed: {},

  mounted() {}

}

</script>
<style lang='scss' scoped>
    .container{
        height: calc(100% - 38px);
        //background-color:azure;
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
        }
        .right-side{
          height: 100%;
          width: calc(100% - 205px);
          overflow: auto;
          float: left;
          background-color: aqua;
         
        }
    }
</style>