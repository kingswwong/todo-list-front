<template>
<div id="form">
  <a-form :layout="formLayout">
    <a-form-item
      label="Title"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
    >
      <a-input placeholder="input the title" v-model="item.title"/>
    </a-form-item>
    <a-form-item
      label="Content"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
    >
      <a-input placeholder="input the content" v-model="item.content"/>
    </a-form-item>
    <a-form-item
      :wrapper-col="buttonItemLayout.wrapperCol"
    >
      <a-button type="primary">
        Submit
      </a-button>
    </a-form-item>
  </a-form>
</div>
</template>

<script>
    export default {
        name: "Item",
      props:{
        id: String,
        item: Object
      },
      data () {
        return {
          formLayout: 'horizontal'
        };
      },
      computed: {
        formItemLayout () {
          const { formLayout } = this;
          return formLayout === 'horizontal' ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          } : {};
        },
        buttonItemLayout () {
          const { formLayout } = this;
          return formLayout === 'horizontal' ? {
            wrapperCol: { span: 14, offset: 4 },
          } : {};
        }
      },
      // methods:{
      //   getItemInfo(id){
      //     this.$get('/todoapp/' + id).then((res) => {
      //       this.item = res
      //     })
      //   }
      // }
    }
</script>

<style scoped>

</style>

