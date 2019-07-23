<template>
<div id="sider" style="background-color: #001528">
  <a-layout-sider width="200" style="background: #fff">
    <a-menu
      mode="inline"
      theme="dark"
      :style="{ height: '100%', borderRight: 0 }"
    >
      <a-sub-menu @click="changeItem" key="1">
        <span slot="title"><a-icon type="folder" />Todo Item</span>
        <a-menu-item key="Item">
          <a-icon type="folder-add" />Add
        </a-menu-item>
        <a-menu-item key="List">
          <a-icon type="folder-open" />List
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item key="2">
        <a-icon type="user" />My Info
      </a-menu-item>

    </a-menu>
  </a-layout-sider>
</div>
</template>

<script>
    export default {
        name: "Sider",
      methods:{
        changeItem(e){
          this.$store.commit('changeContentComponent',e.key)
        }
      }
    }
</script>

<style scoped>

</style>
