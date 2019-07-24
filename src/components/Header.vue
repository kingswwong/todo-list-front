<template>
  <div id="header">
    <div class="logo">Todo List</div>
    <a-menu
      theme="dark"
      mode="horizontal"
      :style="{ lineHeight: '64px',textAlign: 'right'}"
      @click="exit"
    >
      <a-menu-item key="user">
        <a-icon type="user" />Hello,{{userName}}
      </a-menu-item>
      <a-menu-item key="logout">
        <a-icon type="logout" />
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
  export default {
    name: "Header",
    computed:{
      userName(){
        return this.$store.state.userName
      }
    },
    methods:{
      exit(e){
        if(e.key === 'logout'){
          this.$store.commit('setUserName','')
          this.$store.commit('changeContentComponent','')
          this.$router.push({path:'/'})
        }
      }
    }
  }
</script>

<style scoped>
  #header .logo {
    width: 120px;
    height: 31px;
    margin: 5px 28px 16px 0;
    float: left;
    font-family: myfont;
    color: white;
    font-size: 30px;
  }
</style>
