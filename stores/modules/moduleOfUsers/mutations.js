export default{
    mutationforGetUser(state, payload){
        state.user = payload;
        //localstorage'a da yazılabilir
    },
    mutationsForUpdateUser(state, payload){
        state.user = payload;
    }
}