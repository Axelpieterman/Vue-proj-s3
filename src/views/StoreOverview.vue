<template>
    
 <div class="container">
  <div class="row">
    <div class="col"  v-for="weapon in weapons" :key="weapon">                         
           <storecard :article="weapon" />
    </div>
    </div>
</div>
</template>

<script>
import variables from '../config/variable.js'
import axios from 'axios'
import storecard from '../views/StoreCard.vue'

export default{
              components:{
     storecard,
    },
     data(){
         return{
            guns:  [
            {name: 'AR-15', brand: 'ArmaLite', url: 'https://www.youtube.com/watch?v=BSizVpfqFtw', img: "https://usercontent.one/wp/www.mikpunt.store/wp-content/uploads/2021/03/6171C5E4-A20A-4836-8770-B298D142E4A8-600x200.png", isFav: true},
            {name: 'HK-416', brand: 'Hecklor & Koch', url: 'https://www.youtube.com/watch?v=pbImvaiXGFU', img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/HK416N.png/1200px-HK416N.png", isFav: false},
            {name: 'Scar-L', brand: 'FNH USA', url: 'https://www.youtube.com/watch?v=DAUIi05Rckc', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/FN_SCAR-L_noBG.png/1200px-FN_SCAR-L_noBG.png', isFav: true},
            {name: 'Scar-L', brand: 'FNH USA', url: 'https://www.youtube.com/watch?v=DAUIi05Rckc', img: 'https://www.heckler-koch.com/uploads/tx_z7productshk/UMP9_re_SG.png', isFav: true}
            ],
            weapons: [],   
         }    
    },
   
  methods: {
    refreshData(){
        const API_URL = "https://localhost:44314/api/"
        axios.get(API_URL + "Weapon")
        .then((response)=>{
            this.weapons=response.data;
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
