const mutations = {
  setUserName(state, userName){
    state.userName = userName
  },
  changeContentComponent(state, component){
    state.currentComponent = component
  }
}

export default mutations
