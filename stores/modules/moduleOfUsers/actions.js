import User from "../../../models/User.js";

export default {
  actionForUpdateUser(context, payload){

    // User classından obje tanımla

    if(payload.user){
      localStorage.setItem('currentUser', JSON.stringify(payload.user));
    }else{
      localStorage.removeItem('currentUser');
    }
    context.commit("mutationsForUpdateUser", payload.user);
  },


  async actionForGetUser(context, payload) {

    let id = payload.id;

    const requestLink = "http://localhost:8080/api/user/id/" + id;
    let user = [];

    const response = await fetch(requestLink);
    const jsonResponse = await response.json();

    if (!response.ok) {
      console.log("NOK, sth went wrong");
    } else {
      user = new User(
        jsonResponse.id,
        jsonResponse.name,
        jsonResponse.userName,
        jsonResponse.role
      );
    }

    context.commit("mutationforGetUser", user);
  },
};
