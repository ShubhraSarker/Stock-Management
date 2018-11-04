<template>
    <div class="col-sm-6 col-md-6">
        <div class="panel-success panel">
            <div class="panel-heading">
                <h3 class="panel-title">{{ item.name }} | Quantity : {{ item.quantity }}</h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input class="form-control" type="number" placeholder="Quantity" v-model="quantity" :class="{ danger: insufficiantQuantity }">
                </div>
                <div class="pull-right">
                    <button class="btn-info btn pull-right"
                            @click="sell"
                            :disabled="quantity <= 0 || insufficiantQuantity "> {{ insufficiantQuantity ? 'Not Enough Stock' : 'Sell' }}
                            </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        props: ['item'],
        data: function () {
            return {
                quantity: 0
            }
        },
        computed: {
            insufficiantQuantity(){
                return this.quantity > this.item.quantity;
            },
        },
        methods:{
            ...mapActions([
                'sellStock'
            ]),
            sell(){
                const order = {
                    stockId : this.item.id,
                    stockPrice : this.item.price,
                    quantity : this.quantity
                };
                this.sellStock(order);
                this.quantity = 0;
            }
        }
    }
</script>

<style scoped>
    .danger{
        border: 1px solid red;
    }
</style>