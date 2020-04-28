<template>
    <div>
        <h1>修改年龄-V1</h1>
        <hr>
        <p>年龄：{{age}}</p>
        <hr>
        <p>
            <button @click="inc">增加年龄</button>
            <button @click="dec">减少年龄</button>
        </p>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex';
export default {
    computed:{
        ...mapState(['age'])
    },
    methods:{
        //作为组件的方法
        ...mapMutations({
            increment:'sIncrement',
            decrement:'sDecrement'
        }),
        inc(){
           //调用store中Mutations内的sIncrement方法
           //跟进货员说：来进货
           //this.$store.commit('sIncrement');
           this.increment();
        },
        dec(){
           //调用store中Mutations内的sDecrement方法
           //跟出货员说：来出货
           //this.$store.commit('sDecrement');
           this.decrement();
        }
    }
}
</script>