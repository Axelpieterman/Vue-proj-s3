 
<style scoped>
 .bar{
      margin: auto;
      width: 50%;
      top: 10px;
      background: #AAAAAA;
      padding: 10px;
     border-radius: 25px;
 }

 </style>

<script>


export default{
    data(){
        return{
        advTxt: null,
        socketOpen: false,
        showAd: false,
        connection: null,
        }       
    },
      mounted: function(){
                if ("WebSocket" in window) {
                    // Open a web socket
                    var ws = new WebSocket("wss://localhost:44314/ws")

                    ws.onopen = function () {                       
                        // The Web Socket is connected. Use the send() method to send data
                        ws.send("send data")
                    }

                    ws.onmessage = (evt) => {
                        this.socketOpen = true;
                        this.advTxt = evt.data
                        console.log(this.advTxt)
                    }

                    ws.onclose = function () {
                        // Close websocket
                        alert(this.advTxt)
                    }
                } else {
                    alert("Your browser does not support WebSocket!")
                }      
    }
}
</script>

 <template>
     <div v-if="socketOpen" class="bar">
        <h2>{{this.advTxt}}</h2>
      </div>
 </template>
 
 
 
 
 