<template>
  <div :class="$style.czxt">
    <div class="test">{{aa}}</div>
     <span class="card"><img src="../static/wzz.png" alt=""></span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      aa: 'this is index page'
    }
  },
  components: {},

  computed: {},

  mounted () {
    console.log('czxt')
  },

  methods: {}
}
</script>
<style lang='scss' module>
.czxt{
  color:green;
}
</style>