<template>
    <form @submit="AddArticle">
        <h3>Add {{add}}</h3>

        <label for="articles">What do you want to add?</label>

        <select v-model="add" @change="onChange">
        <option value="Weapon">Weapon</option>
        <option value="Gear">Gear</option>
        <option value="Attachment">Attachment</option>
        </select>

        <label>Name</label>
        <input type="name" required v-model="name">
        <label>Description</label>
        <input type="description" required v-model="description">
         <label>Model</label>
        <input type="model" required v-model="model">
        <label>Brand</label>
        <input type="brand" required v-model="brand">
        <label>Type</label>
        <input type="type" required v-model="type">
        <label>Price in €</label>
        <input type="price" required v-model="price">
        <label v-if="add === 'Weapon'">Magsize</label>
        <input v-if="add === 'Weapon'" type="magsize" required v-model="magSize">
        <label v-if="add === 'Weapon'">Caliber</label>
        <input v-if="add === 'Weapon'" type="caliber" required v-model="caliber">
        <label>Stock</label>
        <input type="stock" required v-model="stock">
        <label v-if="add === 'Weapon'" >Firemode</label>
        <input v-if="add === 'Weapon'" type="firemode" required v-model="fireMode">
        <label v-if="add === 'Weapon'">Rounds per minute</label>
        <input v-if="add === 'Weapon'" type="rpm" required v-model="rpm">
        <label>Weight in grams</label>
        <input type="weight" required v-model="weightInGram">
        <label>Height in milimeters</label>
        <input type="height" required v-model="heightInMm">
        <label>Width in milimeters</label>
        <input type="width" required v-model="widthInMm">
        <label>Color</label>
        <input type="string" required v-model="color">
        <label>Image URL</label>
        <input type="string" required v-model="imgURL">
        <label v-if="add === 'Weapon'">Video URL</label>
        <input v-if="add === 'Weapon'" type="string" required v-model="videoURL">

         <button class="btn btn-secondary">Submit</button>
    </form>
</template>

<script>

import axios from 'axios'
import storecard from './StoreCard.vue'

export default{
              components:{
     storecard,
    },
     data(){
         return{           
  add: 'Weapon', 
  API: '',
  WhatToAdd: 'AddWeapon',
  name: '',
  description: '',
  model: '',
  brand: '',
  type: '',
  price: 0,
  magSize: 0,
  caliber: 0,
  stock: 0,
  fireMode: '',
  rpm: 0,
  weightInGram: 0,
  heightInMm: 0,
  widthInMm: 0,
  color: '',
  imgURL: '',
  videoURL: '', 
         }    
    },
   
  methods: {
    AddArticle(e){
        if (this.add === 'Weapon'){
            this.API = 'https://localhost:44314/Weapon/Create';
        
            axios.post(this.API, {
               
                name: this.name,
                description: this.description,
                model: this.model,
                brand: this.brand,
                type: this.type,
                price: this.price,
                caliber: this.caliber,
                stock: this.stock,
                fireMode: this.fireMode,
                rpm: this.rpm,
                weightInGram: this.weightInGram,
                heightInMm: this.heightInMm,
                widthInMm: this.widthInMm,
                color: this.color,
                imgURL: this.imgURL,
                videoURL: this.videoURL
          })  
        }
        else if (this.add === 'Gear'){
             this.API = 'https://localhost:44314/Gear/Create';
        }  
        else if (this.add === 'Attachment'){
             this.API = 'https://localhost:44314/Attachment/Create';
        }     
        if(this.add !== 'Weapon'){
              axios.post(this.API, {
               
                name: this.name,
                description: this.description,
                model: this.model,
                brand: this.brand,
                type: this.type,
                price: this.price,              
                stock: this.stock,
                weightInGram: this.weightInGram,
                heightInMm: this.heightInMm,
                widthInMm: this.widthInMm,
                color: this.color,
                imgURL: this.imgURL,                
          })  
        }
},
    
onchange(event){
    this.add = event;
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
