<template>
    <form  @submit.prevent="handleSubmit">
        <div v-if="!accountcreated">
        <h3>Sign-up</h3>
        <label>Email address*</label>
        <input type="email" required v-model="email">

         <label>Password*</label>
        <input type="password" required v-model="password">
        <div v-if="passwordError" class="error">{{ passwordError }}</div>
        
        <label>City*</label>
        <input type="city" required v-model="city">
        
        <label>Postal Code*</label>
        <input type="postalcode" required v-model="postalcode">

        <label>Address*</label>
        <input type="address" required v-model="address">
        <div class="terms">

            <input type="checkbox" required v-model="terms">
            <label>Accept terms and conditions*</label>
        </div>
        <div class="newsletter">
            <input type="checkbox">
            <label>Sign-up for the newsletter</label>
        </div>
        <button class="btn btn-secondary">Create Account</button>
        <br>
        <p class="smallLetters">* Required fields</p>
        </div>
        <div v-else>
            <h3>You've succesfully created an account!</h3>
        </div>
    </form>
</template>

<script>


export default {
    data (){
        return{
            email: '',
            password: '',
            passwordError: '',
            city: '',
            postalCode: '',
            address: '',
            fade: true,
            terms: false,  
            accountcreated: false,      
        }
    },
    methods:{
        createAccount(){

        },
        handleSubmit(){
           this.passwordError = this.password.length > 5 ? 
           '' : 'Password must be at least 6 chars long'
           if(!this.passwordError){
               console.log('email:', this.email)
               console.log('password:', this.password)
               console.log('address:', this.address)
               console.log('city:', this.city)
               console.log('postalcode:', this.postalcode)
               this.accountcreated = true;
           }
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
     font-weight: bold;
     background: #AAAAAA;
     color: black;
  
}
.createAccMover{     
     background: rgb(252, 241, 173);
    
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
