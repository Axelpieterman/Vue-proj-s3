<template>

<div class="form">
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
                <tr v-for="weapon in weapons" :key="weapon" >
                    <td>{{weapon.ID}}</td>
                    <td>{{weapon.name}}</td>
                    <td>{{weapon.brand}}</td>
                   <td>
                       <button  class="delete" v-on:click="showModal(weapon)">
                        <i class="fas fa-trash"/>
                       </button>
                      
                        <router-link
                         :to="`/edit/article/${weapon.ID}`"
                        >
                       <button  class="edit" v-on:click="showModal(weapon)">
                        <i class="fas fa-edit"/>
                       </button>
                       </router-link>
                   </td>
                </tr>
            </tbody>
        
    </table>
    <Modal
      v-show="isModalVisible"
      :header="header"
      :body="body"
      @close="closeModal"
      @deleteArticle="Deleteweapon"
    />
</div>
    
</template>


<script>

import axios from 'axios'
import Modal from '@/components/Modal.vue';

export default {
    data (){
        return{
            isModalVisible: false,
            weapons: [],
            header: '',
            body: '',
            weapon: [],    
        }
    },
    components: {
      Modal,
    },

methods: {
    showModal(weapon) {
        this.isModalVisible = true
        this.header = 'Delete'
        this.body = 'Are you sure you want to delete ' + weapon.name + '?'
        this.weapon = weapon
    },
    closeModal() {
        this.isModalVisible = false
    },
    refreshData(){
         axios.get("Weapon")
        .then((response)=>{
            this.weapons=response.data
        })      
    },
    Deleteweapon(){
        axios.delete("Weapon/delete/ByID?id=" + this.weapon.ID)  
        this.closeModal()
        this.refreshData()
        this.$router.go()
    }
},
mounted:function(){
    this.refreshData();
 },
 onchange(event){
    this.weapons = event;
},
}

</script>

<style scoped>

p, a, td, th, tr{
    color: black;
}
.form {   
    max-width: 1000px;
    margin: 30px auto;
    background: #D4C69E;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
button{
    
     margin: 0px 3px 0;        
     font-weight: bold;
     background: #AAAAAA;
     color: black;
     left: 5px;
}
.delete{
    background: red;
}

</style>

