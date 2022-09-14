<template>
  <div class="user-space">
    <div id="username">
      username
    </div>
  </div>
</template>

<script>

export default {}
</script>

<style scoped>
.user-space {
  background-color: aqua;
  width: auto;
  height: 25vh;
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  margin: 25px 20px 25px 20px;
  padding: 30px 50px 0px 50px;
  background-image: linear-gradient(to bottom right, red, yellow);
}

#username {
  width: 300px;
  height: 10vh;
}
</style>
