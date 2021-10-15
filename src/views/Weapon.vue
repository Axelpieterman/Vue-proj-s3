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
             
            <tbody>
                <tr v-for="weapon in weapons" :key="weapon">
                    <td>{{weapon.WeaponId}}</td>
                    <td>{{weapon.WeaponName}}</td>
                    <td>{{weapon.WeaponBrand}}</td>
                   <td>
                       <button type="button"
                       class="btn btn-light mr-1">
                       </button>
                   </td>
                </tr>
            </tbody>
        </thead>
    </table>
    
</template>


<script>
export default {
    data (){
        return{
            weapons: []     
        }
    },

methods: {
    refreshData(){
        axios.get(variables.API_URL+"weapon")
        .then((response)=>{
            this.weapons=response.data;
        });
    }
},
mounted:function(){
    this.refreshData();
 }
}
</script>

