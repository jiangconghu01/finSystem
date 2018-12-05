<template>
  <div class="test">
      <iframe @load="loadedIframe()"    :src="url" frameborder="0" ref="ifremecontent">

      </iframe>
  </div>
</template>

<script>
export default {
  props: {
    setdata: {
      type: String,
      requried: false
    }

  },
  data () {
    return {
      iframeHtml: '',
      loading: ''
    }
  },

  components: {},
  created () {

  },
  computed: {
    url () {
      const link = this.setdata
      // if(!!~link.indexOf('ydzcRedidrect.do') || !!~link.indexOf('gwzcRedidrect.do')){
      //     return '';
      // }
      return link
    }

  },
  methods: {
    loadedIframe (data) {
      this.$emit('loadingAnimation', 'loaded')
    }

  },
  mounted () {
    this.$emit('loadingAnimation', 'loading')
  },
  watch: {
    url () {
      this.$emit('loadingAnimation', 'loading')
    }
  }
}
</script>
<style lang='scss' scoped>
 .test{
    width: 100%;
    height: 100%;
     iframe{
         width: 100%;
         height: 100%;
     }
 }
</style>