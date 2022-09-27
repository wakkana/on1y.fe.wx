<template>
  <div id="main-scroll">

    <div id="posters">海报</div>
    <div id="down">
      <div id="notice">通知</div>
      <div id="control">
        <div id="search-device"> 寻找设备 </div>
        <div id="device-option">
          <div id="start"> 启动设备</div>
          <div id="stop"> 关闭设备</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      imgLink: {
         
      }
    }
  },

  components: {

  },

  methods: {

  },

  created() {
    // let app = getApp()
  }
}
</script>

<style scoped>
#main-scroll {
  height: 100vh;
}

#posters {
  width: 100vw;
  height: 30vh;
  background-image: url('../../../static/index/ui14.png');
}


#down {
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: grey;
}

#notice {
  width: auto;
  height: 20vh;
  background-color: chocolate;
  margin: 20px 30px 20px 30px;
}

#control {
  width: 100vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px 30px 20px;
  box-sizing: border-box;
}

#search-device {
  height: 18vh;
  width: 100%;
  background-color: #3480fd;
  background-image: -webkit-radial-gradient(50% -200px, circle, #b0e0ff 0, #18a7fd 45%, #3480fd 100%);
  background-image: radial-gradient(circle at 50% -200px, #b0e0ff 0, #18a7fd 45%, #3480fd 100%);
}

#device-option {
  margin-top: 20px;
  height: 32vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#start {
  width: 46%;
  height: 18vh;
  background-color: #3480fd;
  background-image: -webkit-radial-gradient(50% -200px, circle, #b0e0ff 0, #18a7fd 45%, #3480fd 100%);
  background-image: radial-gradient(circle at 50% -200px, #b0e0ff 0, #18a7fd 45%, #3480fd 100%);
}

#stop {
  width: 46%;
  height: 18vh;
  background-color: #3480fd;
  background-image: -webkit-radial-gradient(50% -200px, circle, #b0e0ff 0, #18a7fd 45%, #3480fd 100%);
  background-image: radial-gradient(circle at 50% -200px, #b0e0ff 0, #18a7fd 45%, #3480fd 100%);
}
</style>
