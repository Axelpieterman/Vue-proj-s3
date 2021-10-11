<template>
        
 
          <div class="background">
                                           
                <ul>
            <li v-for="gun in guns" :key="gun">
                
                <img v-bind:src="gun.img" alt="gun.name">
                <h3>{{gun.brand}} {{gun.name}}</h3>                       
            </li>
       
        </ul>       
                       
          </div>
          <div class="background">
             <div class="box" v-for="gun in guns" :key="gun">
                <div class="itemimg">
                     <img v-bind:src="gun.img" alt="gun.name">
                </div>
                <div>text</div>
            </div>                                                                    
          </div>
</template>

<script>
export default{
     data(){
         return{
            guns:  [
            {name: 'AR-15', brand: 'ArmaLite', url: 'https://www.youtube.com/watch?v=BSizVpfqFtw', img: "https://snwcdnprod.azureedge.net/sites/default/files/styles/product_main/public/firearms/images/10208-mp-OnWhite-Right.png?itok=aAjfiT2X", isFav: true},
            {name: 'HK-416', brand: 'Hecklor & Koch', url: 'https://www.youtube.com/watch?v=pbImvaiXGFU', img: "./assets/ak47.png", isFav: false},
            {name: 'Scar-L', brand: 'FNH USA', url: 'https://www.youtube.com/watch?v=DAUIi05Rckc', img: 'assets/scar-l.png', isFav: true}
            ],
         }      
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
            background: #D4C69E;
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
    </style>
