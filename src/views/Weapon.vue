<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>
                   WeaponId
                </th>
                <th>
                    Name
                </th>
                <th>
                    Brand
                </th>
            </tr>
        </thead>
             
            <tbody>
                <tr v-for="weapon in weapons" :key="weapon">
                    <td>{{weapon.ID}}</td>
                    <td>{{weapon.name}}</td>
                    <td>{{weapon.brand}}</td>
                   <td>
                       <button type="button"
                       class="btn btn-light mr-1">
                       </button>
                   </td>
                </tr>
            </tbody>
        
    </table>
    
</template>


<script>
import variables from '../config/variable.js'
import axios from 'axios'

export default {
    data (){
        return{
            weapons: []     
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
 }
}
</script>

