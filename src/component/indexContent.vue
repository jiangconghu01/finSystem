<template>
  <div class="container" >
    <div class="left-side" :class="[page==='index' && 'none']">
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
    <div class="right-side" :class="[page==='index' && 'none']">
        <component v-bind:is="currentContent" :setdata="url" class="right-content"></component>
    </div>
    <div class="index-page" :class="[page==='user' && 'none']">
      <Basic2></Basic2>
    </div>
  </div>
</template>

<script>
import Basic from './rightcontent/basic.vue'
import Basic2 from './rightcontent/basic2.vue'
import Ifreme from './rightcontent/ifremecontent.vue'
import { mapGetters, mapMutations } from 'vuex'
export default {
  props: {
    height: {
      type: Number,
      required: false
    },
    mudata: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: false
    }

  },
  data () {
    return {
      boxheight: this.height,
      currentContent: this.index === 0 ? 'Basic' : '',
      url: '',
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },

  computed: {
    ...mapGetters([
      'project',
      'page'
    ]),
    leftMu () {
      const name = this.mudata.name
      const list = this.mudata.children
      let isLevelOne = true
      list.forEach(element => {
        element.children.length > 0 && (isLevelOne = false)
      })
      return {
        name: name,
        children: isLevelOne ? [{ label: name, children: list, link: '' }] : list,
        type: isLevelOne ? 'levelone' : 'levelmore'
      }
    },
    defaultMu () {
      return this.index === 0 ? 'Basic' : ''
    }
  },
  methods: {
    ...mapMutations([
      'setPage'
    ]),
    handleNodeClick (data) {
      let url = data.link
      const currId = data.sysModuleCode
      const t = (new Date()).getTime()
      if (!!~url.indexOf('ydzcRedidrect.do') || !!~url.indexOf('gwzcRedidrect.do')) {
        this.currentContent = 'Ifreme'
        url = `${url}?currMenuId=${currId}&_:${t}`
        this.url = url
        return
      }
      if (url) {
        console.log(url)
        this.currentContent = 'Ifreme'
        url = ~url.indexOf('?') ? `${this.project}${url}&currMenuId=${currId}&_:${t}` : `${this.project}${url}?currMenuId=${currId}&_:${t}`
        this.url = url
      }
    },
    showTitle (e) {
      if (e.target.className === 'el-tree-node__label' && e.target.nodeName === 'SPAN') {
        e.target.setAttribute('title', e.target.innerText)
      }
    }
  },
  components: {
    Basic,
    Basic2,
    Ifreme
  },

  mounted () {
    console.log(this.index)
    this.currentContent === 'Basic' && this.$nextTick(() => {
      const h = this.currentContent === 'Basic' ? (document.body.scrollHeight - document.getElementById('header').scrollHeight + 'px')
        // (document.body.clientHeight - document.getElementById('header').clientHeight +'px');
        : ''
      this.$emit('setHeight', { height: h })
    })
  },
  watch: {
    currentContent (val, oldVal) {
      this.$nextTick(() => {
        const h = document.body.scrollHeight - document.getElementById('header').scrollHeight + 'px'
        val !== 'Basic' ? this.$emit('setHeight', {}) : this.$emit('setHeight', { height: h })
      })
    }
  }

}
</script>
<style lang='scss' scoped>
    .index-page{
      width: 100%;
      height: 100%;
    }
    .none{
      display: none;
    }
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