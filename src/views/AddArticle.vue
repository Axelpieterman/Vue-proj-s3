<template>
    <form @submit.prevent="AddArticle">
        <h3>Add {{add}}</h3>

        <label for="articles">What do you want to add?</label>

        <select v-model="add" @change="onChange">
        <option value="Weapon">Weapon</option>
        <option value="Gear">Gear</option>
        <option value="Attachment">Attachment</option>
        </select>
        <div v-if="add !== ''">
        <label>Name</label>
        <input type="name" required v-model="article.name">
        <label>Description</label>
        <input type="description" required v-model="article.description">
         <label>Model</label>
        <input type="model" required v-model="article.model">
        <label>Brand</label>
        <input type="brand" required v-model="article.brand">
        <label>Type</label>
        <input type="type" required v-model="article.type">
        <label>Price in €</label>
        <input type="price" required v-model="article.price">

        <div v-if="add === 'Weapon'">
        <label>Magsize</label>
        <input type="magsize" required v-model="article.magSize">
        <label>Caliber</label>
        <input type="caliber" required v-model="article.caliber">    
        <label>Firemode</label>
        <input type="firemode" required v-model="article.firemode">
        <label>Rounds per minute</label>
        <input type="rpm" required v-model="article.rpm">
        </div>
        
        <label>Stock</label>
        <input type="stock" required v-model="article.stock">
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
        <label v-if="add === 'Weapon'">Video URL</label>
        <input v-if="add === 'Weapon'" type="string" required v-model="article.videoURL">

        <button class="btn btn-secondary">Submit</button>
        </div>
    </form>
</template>

<script>

import axios from 'axios'


export default{
     data(){
        return {   
            article: {},
            add: '',
        }    
    },
   
  methods: {
    AddArticle(){
        const vars = JSON.stringify(this.article)
        if (this.add === 'Weapon'){
            this.API = 'https://localhost:44314/Weapon/Create';
        }  
        
        else if (this.add === 'Gear'){
             this.API = 'https://localhost:44314/Gear/Create';
        }  
        else if (this.add === 'Attachment'){
             this.API = 'https://localhost:44314/Attachment/Create';
        }     
         axios.post(this.API, vars, {
            headers: {'Content-Type': 'application/json' }})        
    },
    
onChange(){
    this.article = {};  
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
