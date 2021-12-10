<template>
<div>
    <label>{{label}}</label>
    <input
     v-model="inputField"
     type="text"       
    />
  </div>
</template>

<script>
export default  {
    props: {
    label: '',

  }
}
</script>

<style scoped>
label{
    color: black;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.66em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
    font-style: arial;
}
input {
    display: block;
    background: #D4C69E;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid black;
    color: black;

}
</style>
