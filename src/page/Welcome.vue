<template>
  <div id="welcome">
    <div>
      <h1>TODO LIST</h1>
    </div>
    <div>
      <transition name="slide-fade">
        <a-button type="dashed" ghost size="large" v-if="startButtonShow" @click="startButtonShow = false">Start</a-button>
      </transition>
    </div>
    <div>
      <transition name="slide-fade">
        <a-input placeholder="Input your Name" v-if="!startButtonShow" size="large" style="width: 150px" v-model="userName"/>
      </transition>
    </div>
    <div style="margin-top: 20px">
      <transition name="slide-fade">
        <a-button type="dashed" ghost size="large" v-if="!startButtonShow" @click="setUserName" >Go</a-button>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Welcome",
    data(){
      return {
        startButtonShow:true,
        userName: ""
      }
    },
    methods:{
      setUserName() {
        this.$store.commit('setUserName',this.userName)
        this.$router.push({path:'/main/list'})
      }
    }
  }
</script>

<style scoped>

</style>
