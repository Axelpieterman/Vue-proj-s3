
<script>

import axios from 'axios'

export default {
    data (){
        return{
            gear: []     
        }
    },

methods: {
    refreshData(){
        const API_URL = "https://localhost:44314/api/"
        axios.get(API_URL + "Gear")
        .then((response)=>{
            this.gear=response.data;
        })        
    }
},
mounted:function(){
    this.refreshData();
 }
}
</script>

