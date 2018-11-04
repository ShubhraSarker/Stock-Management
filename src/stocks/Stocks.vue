<template>
    <div>
        <app-stock v-for="item in stocks" v-bind:item=item>

        </app-stock>
    </div>
</template>

<script>
    import stock from './Stock';
    export default {
        components: {
            appStock: stock
        },
        computed: {
            stocks() {
                return this.$store.getters.stocks;
            }
        }
    }
</script>

<style scoped>

</style>