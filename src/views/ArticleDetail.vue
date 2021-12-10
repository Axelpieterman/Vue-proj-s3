<template>
<div class="container">
    <div class="container-md mt-5">
        <div>
            <div>
                <div class="row">
                    <div class="col-md-5 col-sm-6 product-img border border-0 border-secondary bg-transparent rounded">
                        <img :src="weapon.imgURL" :alt="weapon.name" class="img-fluid">
                    </div>
                    <div class="col-md-7 col-sm-6 fs-5 d-flex flex-column justify-content-between align-items-start mb-md-0 mb-5 px-4">
                        <div class="mt-4 mt-md-0">
                            <h2 class="mb-4">{{weapon.name}}</h2>
                            <p class="my-2">Category: <span class="text-capitalize">{{weapon.type}}</span></p>
                        
                            <p class="my-2">
                                Price:
                                <span class="text-capitalize">
                                    <i class="fas fa-euro-sign"></i>
                                    {{weapon.price}}
                                </span>
                            </p>
                            <p class="mt-3 fs-6">
                                <strong class="fs-4">Description</strong>
                                <br />
                                {{weapon.description}}
                            </p>
                            <button class="btn btn-success mt-2 btn-sm">
                                <i class="fas fa-cart-plus mx-1"></i>
                                Add to Card
                            </button>
                        </div>
                        <div class="d-inline-block mt-4">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
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
            weapon: [], 
         }    
    },
   
  methods: {
    refreshData(){
        axios.get("Weapon/Get/ByID?id=" + this.$route.params.id)
        .then((response)=>{
            this.weapon=response.data;
            
        })        
    }
},
mounted:function(){
    this.refreshData();
 },

}
 
</script>

<style scoped>

.container{
     max-width: 95%;
    margin: 30px auto;
    background: #AAAAAA;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
i{
    width: 500px;
}
</style>

