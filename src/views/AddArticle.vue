<template>
    <form @submit="AddArticle">
        <h3>Add weapon</h3>
        <label>Name</label>
        <input type="name" required v-model="name">
        <label>Description</label>
        <input type="description" required v-model="description">
         <label>Model</label>
        <input type="model" required v-model="model">
         <button class="btn btn-success">Submit</button>
    </form>
</template>

<script>


import variables from '../config/variable.js'
import axios from 'axios'
import storecard from './StoreCard.vue'

export default{
              components:{
     storecard,
    },
     data(){
         return{           
            
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
            axios.post('https://localhost:44314/Weapon/Create', {
                name: this.name,
                description: this.description,
                model: this.model,
          })
},
}
}
</script>

<style scoped>
        body{
            background: lightgrey;
            max-width: 200px;
            margin: 20px;
        }
        p, h3, ul{
            margin: 0;
            
            padding: 0;
        }
        li{
            list-style-type: none;
            background: rgb(252, 241, 173);
            margin: 20px auto;
            padding: 10px 20px;
            border-radius: 10px;
            
            align-items: center;
           
            width: 250px;
            height: 250px;
        }
        img{
            width: 190px;
        }
        .background{
            top: 20px;
            padding: 100px 0;
            width: 900px ;
            text-align: center;
            background: #AAAAAA;
            margin: 20px;
            display: inline-block;
            border-radius: 10px;
        }
         .box{
            padding: 50px 0;
            width: 200px ;
            height: 100px;
            text-align: center;
            background: beige;
            margin: 20px;
            display: inline-block;
        }
        
        .container{
            margin: 25px 25px 0px;
        }
        .col{
            margin: 25px 0px 0px;
        }
        
   
    </style>
