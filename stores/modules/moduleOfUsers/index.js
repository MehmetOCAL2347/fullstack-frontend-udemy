import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
    state(){
        // Global değişkenleri burada tutacağız
        return {
            //user: []//: JSON.parse(localStorage.getItem('currentUser')) // Burası şu anda bir işe yaramıyor
            user: JSON.parse(localStorage.getItem('currentUSer'))
        }
    },
    actions,
    getters,
    mutations
}