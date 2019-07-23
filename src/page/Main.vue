<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <Header/>
    </a-layout-header>
    <a-layout :style="{height: '100%'}">
      <Sider/>
      <a-layout style="padding: 0 24px 24px">
        <a-layout-content :style="{ background: '#fff', padding: '24px', margin: '20px', minHeight: '100%' }">
          <component :is="currentTabComponent"></component>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
  import Header from "../components/Header";
  import Sider from "../components/Sider";
  import List from "./content/List";
  import Item from "./content/Item";

  export default {
    name: "Welcome",
    components: {Sider, Header,List,Item},
    data() {
      return {
        collapsed: false,
      }

    },
    computed:{
      currentTabComponent(){
        return this.$store.state.currentComponent
      }
    },
    methods: {}
  }
</script>

<style scoped>
  #components-layout-demo-top-side-2{
    height: 100%;
    width: 100%;
    position: fixed;
  }
</style>


