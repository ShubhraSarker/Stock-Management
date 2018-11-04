<template>
    <div>
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <router-link to="/" class="navbar-brand"><a>Stock Trade</a></router-link>
                </div>
                <ul class="nav navbar-nav">
                    <router-link to="/portfolio" tag="li"> <a>Portfolio</a> </router-link>
                    <router-link to="/stocks" tag="li"> <a>Stocks</a> </router-link>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" @click="endDay"><span class=" "></span> End Day</a></li>
                    <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown"
                                            href="#"> Save & Load <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#" @click="saveData">Save data</a></li>
                            <li><a href="#" @click="loadData">Load data</a></li>
                        </ul>
                    </li>
                    <li><a><span class=" "></span> <strong>Funds: {{ funds | currency}}</strong></a></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        computed: {
            funds(){
                return this.$store.getters.funds;
            }
        },
        methods:{
            ...mapActions({
                randomizeStock : 'randomizeStocks',
                fetchData : 'loadData'
            }),
            endDay(){
                 this.randomizeStocks();
            },
            saveData(){
                console.log('save data method');
                const data = {
                    funds: this.$store.getters.funds,
                    stocks: this.$store.getters.stocks,
                    stockPortfolio: this.$store.getters.stockPortfolio
                };
                this.$http.put('data.json', data);
            },
            loadData(){
                this.fetchData();
            }
        }
    }
</script>

<style scoped>

</style>