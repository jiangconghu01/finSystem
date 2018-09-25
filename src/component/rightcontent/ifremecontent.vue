<template>
  <div class="test">
      <iframe :src="url" frameborder="0" ref="ifremecontent">

      </iframe>
  </div>
</template>

<script>
export default {
    props:{
        setdata:{
            type:String,
            requried:false
        }

    },
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
    computed: {
        url(){
            const link = this.setdata;
            // if(!!~link.indexOf('ydzcRedidrect.do') || !!~link.indexOf('gwzcRedidrect.do')){
            //     return '';
            // }
            return link;
        }

    },
    methods: {

    },
    mounted() {
    },
    watch:{

    }
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