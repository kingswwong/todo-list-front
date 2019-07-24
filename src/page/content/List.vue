<template>
  <div id="list">
    <a-list
      class="demo-loadmore-list"
      itemLayout="horizontal"
      :dataSource="itemList"
      :pagination="pagination"
    >
      <a-list-item slot="renderItem" slot-scope="item, index" >
        <a slot="actions"><a-switch v-model="item.isFinish" checkedChildren="finish" unCheckedChildren="ready" @change="changeStatus(item)"/></a>
        <a slot="actions" @click="editItem(item.id)">
          <a href="#">Edit</a>
        </a>
        <a slot="actions">
          <a-popconfirm title="Are you sure？"  @confirm="delItem(item.id)" >
            <a-icon slot="icon" type="question-circle-o" style="color: red" />
            <a href="#">Delete</a>
          </a-popconfirm>
        </a>
        <a-list-item-meta
          :description=item.content>
          <a slot="title" href="https://vue.ant.design/">{{item.title}}</a>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
    <Dialog ref="dialog" :id="id"/>
  </div>
</template>

<script>

  import Dialog from "../../components/Dialog";
  import {getAllItem,deleteItem,updateItem} from "../../api/item"
  export default {
    name: "List",
    components: {Dialog},
    mounted () {
      this.getAll()
    },
    data() {
      return {
        itemList: [],
        pagination: {
          pageSize: 10,
        },
        visible:false,
        id: ""
      }
    },
    methods:{
      getAll(){
        getAllItem().then((res) => {
          this.itemList = res
        })
      },
      delItem(id){
        deleteItem(id).then(() => {
          this.getAll()
        })
      },
      changeStatus(item){
        updateItem(item.id, item)
      },
      editItem(id){
        this.$refs.dialog.showDialog(id)
      }
    }
  }
</script>

<style scoped>

</style>
