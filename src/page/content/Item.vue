<template>
  <div id="form">
    <a-form :layout="formLayout"  :form="form">
      <a-form-item
        label="Title"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"

      >
        <a-input placeholder="input the title"  v-decorator="['item.title',{rules: [{ required: true, message: 'Please input your title!' }]}
        ]"/>
      </a-form-item>
      <a-form-item
        label="Content"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-input placeholder="input the content"  v-decorator="['item.content',{rules: [{ required: true, message: 'Please input your content!' }]}]"/>
      </a-form-item>
      <a-form-item
        :wrapper-col="buttonItemLayout.wrapperCol"
      >
        <a-button type="primary" html-type="submit">
          Submit
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
  import {createItem,updateItem} from "../../api/item";

  export default {
    name: "Item",
    props: {
      item: {
        type: Object,
        default() {
          return {content: '', title: '', id: ''}
        }
      }
    },
    data() {
      return {
        formLayout: 'horizontal',
        form: this.$form.createForm(this)
      };
    },
    mounted(){
      this.form.setFieldsValue({
        item:{
          title: this.item.title,
          content: this.item.content,
        }
      })
    },
    watch:{
      item(newValue){
        this.form.setFieldsValue({
          item:{
            title: newValue.title,
            content: newValue.content,
          }
        })
      }
    },
    computed: {
      formItemLayout() {
        const {formLayout} = this;
        return formLayout === 'horizontal' ? {
          labelCol: {span: 4},
          wrapperCol: {span: 14},
        } : {};
      },
      buttonItemLayout() {
        const {formLayout} = this;
        return formLayout === 'horizontal' ? {
          wrapperCol: {span: 14, offset: 4},
        } : {};
      }
    },
    methods: {
      addItem(e) {
        this.form.validateFields((err, values) => {
          if (!err) {
            if(this.item.id !== ''){
              let theUpdateItem = {
                content: values.item.content,
                title: values.item.title
              }
              updateItem(this.item.id,theUpdateItem).then(() => {
                this.$message.success('Update Success', 5);
                this.$emit('refresh');
              })
            }else{
              createItem(values.item).then(() => {
                this.$message.success('Create Success', 5);
                this.$router.push({path:'/main/list'})
              })
            }
          }
        });
      }
    }
  }
</script>

<style scoped>

</style>

