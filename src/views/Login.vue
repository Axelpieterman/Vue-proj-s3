<template>
    <form @submit.prevent="handleSubmit">
        <h3>Login</h3>
        <label>Email address</label>
        <input type="email" required v-model="email">

         <label>Password</label>
        <input type="password" required v-model="password">
        <div v-if="passwordError" class="error">{{ passwordError }}</div>
        <div class="remember">
            <input type="checkbox">
            <label>Remember me next time</label>
        </div>
        <button v-if="fade"  @mouseover="fadeEvent" @click="createAccount">Create Account</button>
        <button v-else @mouseleave="fadeEvent" @click="createAccount" class="createAccMover">Create Account</button>
    </form>
</template>

<script>


export default {
    data (){
        return{
            email: '',
            password: '',
            passwordError: '', 
            fade: true,       
        }
    },
    methods:{
        createAccount(){

        },
        fadeEvent(){
            this.fade = !this.fade;
        },
        handleSubmit(){
           
        }
    }
}


</script>


<style scoped>
form {   
    max-width: 420px;
    margin: 30px auto;
    background: #D4C69E;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label{
    color: black;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.66em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
    font-style: arial;
}
input {
    display: block;
    background: #D4C69E;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid black;
    color: black;

}
input[type="checkbox"]{
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}
button{
     display: block;
     margin: 25px 0 15px;
     width: 100%;
     height: 40px;         
     background: #e1d798;
     font-weight: bold;
     border: none;
}
.createAccMover{     
     background: #FFA500;
     border: black;
}
.smallLetters{
    color: gray;
    font-size: 0.75em;
}
.error{
    color: crimson;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
}

</style>