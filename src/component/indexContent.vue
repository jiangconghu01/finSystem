<template>
  <!-- <div class="container" :style="{height:height+'px'}"> -->
  <div class="container" >
    <div class="left-side">
      <p class="title">{{leftMu && leftMu.name}}</p>
      <el-tree 
      v-if="leftMu " 
      :data="leftMu.children" 
      :props="defaultProps" 
      @node-click="handleNodeClick" 
      :default-expand-all="true"
      @mouseover.native="showTitle($event)"
      ></el-tree>
      <!-- <el-tree 
      v-if="leftMu && leftMu.type === 'levelone'" 
      :data="leftMu.children" 
      :props="defaultProps" 
      @node-click="handleNodeClick2" 
      :default-expand-all="true"
      @mouseover.native="showTitle($event)"
      class="leve1-tree"></el-tree> -->
    </div>
    <div class="right-side">
        <component v-bind:is="currentContent" :data="url" class="right-content"></component>
    </div>
  </div>
</template>

<script>
import Basic from './rightcontent/basic.vue';
import Basic2 from './rightcontent/basic2.vue';
import Ifreme from './rightcontent/ifremecontent.vue';
export default {
  props:{
    height:{
      type: Number,
      required: false
    },
    mudata:{
      type:Object,
      required:true
    }
    
  },
  data () {
    return {
        boxheight:this.height,
        currentContent: 'Basic',
        url:'1237',
        defaultProps: {
          children: 'children',
          label: 'label'
        }
    };
  },

  computed: {
    leftMu(){
      const name =this.mudata.name;
      const list = this.mudata.children;
      let isLevelOne = true;
      list.forEach(element => {
        element.children.length>0 && (isLevelOne = false);
      });
      return {
        name:name,
        children:isLevelOne?[{label:name,children:list,link:''}]:list,
        type:isLevelOne?'levelone':'levelmore'
      };
    }
  },
  methods: {
      handleNodeClick(data) {
        console.log(data);
        if(data.link){
          this.currentContent = 'Ifreme';
        }

      },
      showTitle(e){
        if(e.target.className === 'el-tree-node__label' && e.target.nodeName === 'SPAN'){
          e.target.setAttribute('title',e.target.innerText);
        }
       // console.log(e,e.target);
      }
  },
  components: {
      Basic,
      Basic2,
      Ifreme
  },


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
          width: 215px;
          height: 100%;
          padding-left: 5px;
          background-color: #F7F7F7;
          border-right: 1px solid #EAEAEA;
        }
        .right-side{
          height: 100%;
          width: calc(100% - 225px);
         // overflow: auto;
          float: left;
          //background-color: aqua;
         
        }
    }
</style>