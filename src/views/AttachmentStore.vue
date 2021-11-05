<template>
    
 <div class="container">
  <div class="row">
    <div class="col"  v-for="attachment in attachments" :key="attachment">                         
           <storecard :article="attachments" />
    </div>
    </div>
</div>
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
            attachments: [],  
         }    
    },
   
  methods: {
    refreshData(){
        const API_URL = "https://localhost:44314/api/"
        axios.get(API_URL + "Attachment")
        .then((response)=>{
            this.attachments=response.data;
        })        
    }
},
mounted:function(){
    this.refreshData();
 },

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
