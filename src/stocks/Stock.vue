<template>
    <div class="col-sm-6 col-md-6">
        <div class="panel-success panel">
            <div class="panel-heading">
                <h3 class="panel-title">{{ item.name }} <small> (Price: {{ item.price }}) </small></h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input v-model.number="quantity" class="form-control" type="number" placeholder="Quantity" :class="{ danger: insufficientFunds }">
                </div>
                <div class="pull-right">
                    <button class="btn-success btn pull-right"
                            @click="buyStocks"
                            :disabled="insufficientFunds || quantity <=0 "> {{ insufficientFunds ? 'insufficient Funds' : 'Buy' }} </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['item'],
        data: function () {
            return {
                quantity: 0
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            },
            insufficientFunds() {
                return this.quantity * this.item.price > this.funds;
            }
        },
        methods:{
            buyStocks: function () {
                const order = {
                    stockId : this.item.id,
                    stockPrice : this.item.price,
                    quantity : this.quantity
                };
                console.log(order);
                this.$store.dispatch('buyStock', order);
                this.quantity = 0;
            }
        },

    }
</script>

<style scoped>
    .danger{
        border: 1px solid red;
    }
</style>