<template>
    <form @submit.prevent="EditArticle">
        <h3>Edit {{article.name}}</h3>

        <label>Name</label>
        <input type="text" required v-model="article.name">
        <label>Description</label>
        <input type="description" required v-model="article.description">
        <label>Model</label>
        <input type="model" required v-model="article.model">
        <label>Brand</label>
        <input type="brand" required v-model.trim="article.brand">
        <label>Type</label>
        <input type="type" required v-model="article.type">
        <label>Price in €</label>
        <input type="price" required v-model="article.price">
        <label >Magsize</label>
        <input  type="magsize" required v-model="article.magSize">
        <label >Caliber</label>
        <input  type="caliber" required v-model="article.caliber">
        <label>Stock</label>
        <input type="stock" required v-model="article.stock">
        <label>Firemode</label>
        <input  type="firemode" required v-model="article.fireMode">
        <label>Rounds per minute</label>
        <input type="rpm" required v-model="article.rpm">
        <label>Weight in grams</label>
        <input type="weight" required v-model="article.weightInGram">
        <label>Height in milimeters</label>
        <input type="height" required v-model="article.heightInMm">
        <label>Width in milimeters</label>
        <input type="width" required v-model="article.widthInMm">
        <label>Color</label>
        <input type="string" required v-model="article.color">
        <label>Image URL</label>
        <input type="string" required v-model="article.imgURL">
        <label >Video URL</label>
        <input  type="string" required v-model="article.videoURL">

        <button class="btn btn-secondary">Submit</button>
    </form>
</template>

<script>

import axios from 'axios'
import InputField from '../components/InputField.vue'

export default{
              components:{
     InputField,
    },
     data(){
         return{ article: [] }    
    },
   
  methods: {
   refreshData(){
        axios.get("Weapon/Get/ByID?id=" + this.$route.params.id)
        .then((response)=>{
            this.article=response.data;
           
        })        
    },
    EditArticle(){
        console.log(this.article)
        const vars = JSON.stringify(this.article)

        axios.post("Weapon/Edit", vars, {
    headers: {
    'Content-Type': 'application/json'
    }})      
    }
},
mounted:function(){
    this.refreshData();
 },
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
select{
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
