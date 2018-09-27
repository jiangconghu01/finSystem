<template>
  <div class="czxt">
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {}
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
    width: 100%;
    height: 100%;
}
</style>