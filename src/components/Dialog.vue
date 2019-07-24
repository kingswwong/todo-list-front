<template>
  <div id="dialog">
    <a-modal
      title="UpdateItem"
      :visible="visit"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
      footer=""
    >
      <Item  :item="item" @refresh="refresh"></Item>
      <template slot="footer">

      </template>
    </a-modal>
  </div>
</template>

<script>
  import Item from "../page/content/Item";
  import {getItemById} from "../api/item";

  export default {
    name: "Dialog",
    components: {Item},
    props: {
      id: String
    },
    data() {
      return {
        ModalText: 'Content of the modal',
        confirmLoading: false,
        visit: false,
        item:{}
      }
    },
    methods: {
      refresh(){
        this.visit = false
      },
      handleCancel(e) {
        this.visit = false
      },
      showDialog(id){
        getItemById(id).then((res) => {
          this.item = res
          this.visit = true
        })
      }
    }
  }
</script>

<style scoped>

</style>
