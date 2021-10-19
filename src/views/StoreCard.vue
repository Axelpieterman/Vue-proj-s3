<template>
    <div class="card" style="width: 18rem; height: 18rem;">
                <div class="imgbox">
             <img :src="article.imgURL" class="card-img-top" alt="...">
             </div>
                <div class="card-body">
                    <h5 class="card-title">{{article.name}}</h5>
                    <p class="card-text">{{article.description}}</p>
                    <a href="#" class="btn btn-dark">View article</a>
                </div>
            </div> 
</template>
<script>

export default {
  name: 'StoreCard',
  props: {
    article: []
  }
}
</script>
<style scoped>
        .card-text{
            overflow: hidden;
            height: 75px;
        }
        img{
            height: 80%;
        }
        .imgbox{
            margin: 10px 0px 0px;
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 50%;
            height: 90px;
            width: 200px;
            top: 20px;
        }
        .card{
            background: #AAAAAA;
        }
</style>
