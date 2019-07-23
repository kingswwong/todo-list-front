<template>
  <div id="dialog">
    <a-modal
      title="UpdateItem"
      :visible="visit"
      @ok="handleOk"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
    >
      <Item  :item="item"></Item>
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
    mounted(){
      this.$get('/todoapp/' + this.id).then((res) => {
        this.item = res
      })
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
      handleOk(e) {
        this.ModalText = 'The modal will be closed after two seconds';
        this.confirmLoading = true;
      },
      handleCancel(e) {
        this.visit = false
      },
      changeVisable(){
        this.visit = true
      }

    }
  }
</script>

<style scoped>

</style>
