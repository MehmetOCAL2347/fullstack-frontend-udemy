<template>
    <div>
        <input type="text" @input="getId">
        <button @click="login">Login</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                id: ""
            }
        },
        methods: {
            async login(){

                if(this.id === null || this.id === ""){
                    console.log("id is not null");
                }else {
                    await this.$store.dispatch('actionForGetUser', {id: this.id});
                    console.log(this.$store.getters.getterForGetUser);
                }
            },
            getId(event){
                this.id = event.target.value.trim();
            }
        }
    }
</script>

<style scoped>

</style>