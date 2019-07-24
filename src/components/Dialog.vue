<template>
  <div id="dialog">
    <a-modal
      title="UpdateItem"
      :visible="visit"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
      footer=""
    >
      <Item  :item="item" ></Item>
      <template slot="footer">

      </template>
    </a-modal>
  </div>
</template>

<script>
  import Item from "../page/content/Item";

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
      handleCancel(e) {
        this.visit = false
      },
      showDialog(id){
        this.$get('/todoapp/' + id).then((res) => {
          this.item = res
          this.visit = true
        })
      }

    }
  }
</script>

<style scoped>

</style>
