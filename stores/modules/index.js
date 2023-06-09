import { createStore } from "vuex";

import moduleOfUsers from "../modules/moduleOfUsers/index.js"

const store = createStore({
    modules: {
        users: moduleOfUsers
        //Modullerin hepsinin burada tanımlayacağız
    }
});

export default store;