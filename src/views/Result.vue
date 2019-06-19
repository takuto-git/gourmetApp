<template>
  <div id="result">
    <div class="container">
      <div class="area" v-for="shop in shops">
        <div class="marginWrapper">
          <div class="shopName">{{shop.name}}</div>
          <div class="Name">{{shop.genre.name}}</div>
          <img :src="returnImg(shop.photo.pc.l)" class="imgStyle">
          <div class="catch Name">{{shop.genre.catch}}</div>
          <div class="sideWrapper">
            <div class="budget Name">
              <img src="../assets/budget.png" class="icon">
              <p>{{shop.budget.average}}</p>
            </div>
            <div class="card Name">
              <img src="../assets/card.png" class="icon">
              <p>{{shop.card}}</p>
            </div>
          </div>
            <div class="close Name">
              <img src="../assets/close.png" class="icon">
              <p>{{shop.close}}</p>
            </div>
            <div class="parking Name">
              <img src="../assets/parking.png" class="icon">
              <p>{{shop.parking}}</p>
          </div>
          <div class="smoking Name">
            <img src="../assets/smoking.png" class="icon">
            <p>{{shop.non_smoking}}</p>
          </div>
          <div class="urls Name">
            <img src="../assets/site.png" class="icon">
            <a v-bind:href="`${shop.urls.pc}`">店舗情報</a>
          </div>
          <div class="btnWrapper">
            <div class="btn openMapBtn" v-on:click="openMap(shop.name)">マップを開く</div>
          </div>
        </div>
        <div class="swipeToNext"> >>>   スワイプで次を表示   >>> </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

export default {
  name: 'result',
  data () {
    return {
      shops: [],
      latitude: 34.662933,  //初期値はとりあえず難波駅
      longitude: 135.502295,  //初期値はとりあえず難波駅
      range: 3, //1:300m, 2:500m, 3:1000m, 4:2000m, 5:3000m
      order: 4, //1:名前順, 2:ジャンル順, 3:エリア順, 4:おススメ順(距離順)
      count: 10, //店を何軒取得するか,
      nums: []
    }
  },
  mounted: function() {
    navigator.geolocation.getCurrentPosition(this.runGetLoc, this.showError);
    //this.getRestaurant();
  },
  methods: {
    returnImg: function(img_url) {
      return img_url;
    },
    openMap: function(name) {
        window.open(`https://maps.google.co.jp/maps?q=${name}`);
    },
    runGetLoc: function(position) {
      this.latitude =  position.coords.latitude;
      this.longitude =  position.coords.longitude;
      this.getRestaurant();
    },
    showError: function(message) {
      alert("error! " + message + " 位置情報の取得を許可して下さい！");
    },
    getRestaurant: function() {
      this.shops = [];  //配列の初期化
      const url = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=71474e498509e907&lat=${this.latitude}&lng=${this.longitude}&range=${this.range}&order=${this.order}&count=${this.count}&format=jsonp`

      axios({
          url: url,
          adapter: jsonpAdapter,
          callbackParamName: 'callback'
      }).then((res) => {
        const arrayLength = res.data.results.shop.length
        for(let i=0; i<arrayLength; i++) {
          this.shops.push(res.data.results.shop[i]);
          this.nums.push(i);
        }
      });
    }
  }
 }
</script>

<style lang="scss">

.container {
    position: absolute;
    height: 100%;
    width: 100%;
    scroll-snap-type: x mandatory;
    display: flex;
    overflow-x: scroll;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch; /* Needed to work on iOS Safari */
}

.area{
    min-width: 100vw;
    height: 100%;
    scroll-snap-align: start;
    display: flex;
    justify-content: center;
}

.marginWrapper {
    width: 100%;
    margin: 16px;
}

.imgStyle {
    width: 100%;
    height: calc(70vw - 32px);
    object-fit: cover;  //トリミング
}

.shopName {
    font-weight: 600;
}

.shopName, .Name {
    font-size: .8em;
    margin-top: 8px;
    display: flex;
    align-items: center;
}

.sideWrapper {
    display: flex;
}

.icon {
  width: 32px;
}

p, a{
  margin: 0 24px 4px 8px;
}

.btnWrapper {
  width: calc(100% - 32px);
  position: absolute;
  bottom: 58px;
  display: flex;
  justify-content: center;
}

.swipeToNext {
    position: absolute;
    width: 100vw;
    bottom: 32px;
    text-align: center;
    color: rgba(0,0,0,0.54);  //12,26,54,87
    font-size: .8em;
}

</style>
