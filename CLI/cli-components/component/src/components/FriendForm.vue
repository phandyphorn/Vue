<template>
    <div class="container">
        <form action="" id="app">
            <div class="controller"><input class="form-control" type="text" placeholder="First Name"></div>
            <div class="controller"><input class="form-control" type="text" placeholder="Last Name"></div>
            <div class="controller"><input class="form-control" type="text" placeholder="Comment"></div>
            <div class="controller"><button  class="btn form-control" type="submit">ADD</button></div>
        </form>
    </div>
</template>


<script>
   export default ({
    // put in App.vue
    name: "friend-form"
    
})
</script>


<style scoped>
    .container {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        width: 50%;
        margin:auto;
        padding: 10px;
        border-radius: 10px;
    }
    
    .form-control {
        padding: 10px;
        width: 100%;
        box-sizing: border-box;
    }
    .controller {
        padding: 5px;
        margin: 5px;
    }

    .btn {
        background: rgb(182, 176, 176);
        color: white;
    }

</style>

