<template>
  <div id="top">
    <div class="btn" v-on:click="goToResult()">近くのお店を取得</div>
  </div>
</template>

<script>

export default {
  name: 'top',
  data () {
    return {
    }
  },
  methods: {
      goToResult: function() {
          this.$router.push({
          name: 'result',
          //params: {
          //  message: this.search,
          //  judge: 'blank',
          //}
        })
      },
  }
 }
</script>

<style lang="scss">

</style>
