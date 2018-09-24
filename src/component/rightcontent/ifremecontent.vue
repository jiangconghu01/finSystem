<template>
  <div class="test">
      <iframe src="https://www.baidu.com/" frameborder="0">

      </iframe>
  </div>
</template>

<script>
export default {
    data () {
        return {
            iframeHtml:''
        };
    },

    components: {},
    created(){
        // this.$http.get('https://www.baidu.com/').then(data =>{
        //     console.log(data);
        // })
    },
    computed: {},

    mounted() {
        console.log('test');
    },

    methods: {}
};
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