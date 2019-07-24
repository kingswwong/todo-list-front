<template>
  <div id="info-form">
    <a-form :layout="formLayout">
      <a-form-item
        label="UserName"
        :label-col="formItemLayout.labelCol"
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-input placeholder="Input your userName" v-model="userName"/>
      </a-form-item>
      <a-form-item
        :wrapper-col="buttonItemLayout.wrapperCol"
      >
        <a-button type="primary" @click="setUserName" >
          Submit
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
  export default {
    name: "Info",
    data () {
      return {
        formLayout: 'horizontal',
        userName: this.$store.state.userName
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
    methods:{
      setUserName(){
        this.$store.commit('setUserName',this.userName)
      }
    }
  }
</script>

<style scoped>

</style>
