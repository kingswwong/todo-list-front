<template>
  <div id="form">
    <a-form :layout="formLayout" @submit="addItem" :form="form">
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
    watch:{
      item(newValue){
        console.log(newValue)
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
              let updateItem = {
                content: values.item.content,
                title: values.item.title
              }
              this.$put('/todoapp/'+this.item.id,updateItem).then(() => {
                this.$message.success('Update Success', 5);
              })
            }else{
              this.$post('/todoapp', values.item).then(() => {
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

