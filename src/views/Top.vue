<template>
  <div id="top">
    <div class="imgAndText">
      <img class="takoImg" src="../assets/tako.png" />
      <p class="titleText">キメ</p>
      <p class="subText">くだらないことで、ぐだらない</p>
    </div>
    <div class="buttonWrapper">
      <button class="startButton">人数を選んではじめる</button>
    </div>
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
      /*

      goToResult: function() {
          this.$router.push({
          name: 'result',
        })
      },

      */
  }
 }
</script>

<style lang="scss" scoped>

#top {
  height: 100%;
  width: 100%;
  color: white;
  background-color: #CC667D;
}

.imgAndText {
  width: calc(100% - 16px * 2);
  position: absolute;
  top: calc(50% - 16px * 10);
  right: 0;
  left: 0;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center; //中央
  justify-content: center; //たて
}

.takoImg {
  width: 100px;
}

.titleText {
  margin-top: 32px;
  font-size: 32px;
  font-weight: 600;
}

.subText {
  margin-top: 16px;
  font-size: 14px;
}

.buttonWrapper {
  width: 100%;
  position: absolute;
  right: 0;
  bottom: 64px;
  left: 0;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center; //中央
  justify-content: center; //たて
}

.startButton {
  width: 240px;
  height: 64px;
}

</style>
