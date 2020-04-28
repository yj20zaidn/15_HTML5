<template>
    <div>
        <h1>获取服务器端数据</h1>
        <hr>
        <button @click="getData()">获取数据</button>
    </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
    methods:{
        //作为组件方法
        ...mapActions({
            getProductList:'sGetData'
        }),
        getData(){
            //必须存一个事件，然后才让卡车去拉货
            //this.$store.dispatch('sGetData');
            this.getProductList();
        }
    }
}
</script>