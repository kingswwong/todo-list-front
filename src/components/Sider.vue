<template>
  <div id="sider" style="background-color: #001528">
    <a-layout-sider width="200" style="background: #fff">
      <a-menu
        mode="inline"
        theme="dark"
        :defaultOpenKeys="['1']"
        :defaultSelectedKeys="['list']"
        :style="{ height: '100%', borderRight: 0 }"
        @click="changeItem"
      >
        <a-sub-menu key="1">
          <span slot="title"><a-icon type="folder"/>Todo Item</span>
          <a-menu-item key="add">
            <a-icon type="folder-add"/>
            Add
          </a-menu-item>
          <a-menu-item key="list">
            <a-icon type="folder-open"/>
            List
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="info">
          <a-icon type="user"/>
          My Info
        </a-menu-item>

      </a-menu>
    </a-layout-sider>
  </div>
</template>

<script>
  export default {
    name: "Sider",
    methods: {
      changeItem(e) {
        if(e.key === 'add' || e.key === 'list' || e.key === 'info'){
          this.$router.push({path:e.key})
        }
      }
    }
  }
</script>

<style scoped>

</style>
