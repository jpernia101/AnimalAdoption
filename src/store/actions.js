export default{
    //commit comes from context.commit ..vuex object 
    addPet: ({commit},payload) =>{
        commit('appendPet', payload)
    }

}