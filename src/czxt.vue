<template>
  <div class="czxt">
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
  background-color: aqua;
  font-size: 20px;
}
</style>