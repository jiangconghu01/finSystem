<template>
  <div class="czxt">
    <div class="test">{{aa}}</div>
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
        aa:'this is index page'
    };
  },
  components: {},

  computed: {},

  mounted() {
    console.log('czxt');
  },

  methods: {}
}

</script>
<style lang='scss' scoped>
.czxt{
  color:red;
  .test{
    transform: rotate(50deg)
  }
}
</style>