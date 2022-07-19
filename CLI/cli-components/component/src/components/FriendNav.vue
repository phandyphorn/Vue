<template>
    <div class="nav" id='app'>
        <ul>
            <li><a href="">{{home}}</a></li>
            <li><a href="">{{about}}</a></li>
            <li><a href="">{{service}}</a></li>
            <li><a href="">{{help}}</a></li>
        </ul>
    </div>
</template>

<script>

// Export
export default ({
    data() {
        return {
            home: "HOME",
            about: "ABOUT US",
            service: "SERVICE",
            help: "HELP",
        }
    },
    // put in App.vue
    name: "friend-nav"
    
})
</script>

<style scoped>
    * {
        margin: 0px;
        padding: 0px;
    }
    .nav {
        background: rgb(206, 108, 16);
        margin-bottom: 30px;
    }
    ul{
        display: flex;
    }

    li {
        margin: 20px;
        list-style: none;
    }
    a {
        text-decoration: none;
        color: white;
    }
</style>