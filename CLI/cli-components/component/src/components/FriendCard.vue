<template>
    <div class="contain">
        <div action="" v-for:="info of people">
            <div class="card">
                <h2>{{info.name}}</h2>
                <p>{{info.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default ({
        data() {
            return {
                people: [{name: 'Ronan Ogor', description: 'The best teacher'}, {name: 'Him Hey', description: 'The best trainer'}]
            }
        }
    })
</script>

<style scoped>
    .contain {
        width: 50%;
        margin:auto;
        padding: 10px;
    }
    .card {
        border-radius: 10px;
        margin-top: 10px;
        width: 100%;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        padding: 5px;
        text-align: center;
    }

</style>
