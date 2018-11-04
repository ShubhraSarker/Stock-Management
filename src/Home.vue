<template>
    <div>
        <div class="home-content">
            <h1>Trade or view your portfolio</h1>
            <p>You may save & load your data</p>
            <p> Click on 'End Day' to begin a new Day!</p>
            <strong>Your fund: {{ funds }}</strong>
        </div>
    </div>
</template>

<script>
    import header from './shared/header';
    export default {
        components:{
            appHeader : header
        },
        computed: {
            funds(){
                return this.$store.getters.funds;
            }
        }
    }
</script>

<style scoped>
    .home-content{
        width: 100%;
        height: 30%;
        padding: 10px;
        text-align: center;
        border: 3px dashed #ccc;
    }
</style>