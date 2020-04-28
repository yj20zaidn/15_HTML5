<template>
    <div>
        <h1>访问数据(页面1)-V1</h1>
        <hr>
        <p>用户名：{{username}}</p>
        <p>年龄：{{age}}</p>
        <p>性别：{{sex ? '男' : '女'}}</p>
        <p>工资：{{salary}}</p>
        <p>学历：{{extension.education}}</p>
        <p>婚否：{{extension.isMarray ? '已婚' : '未婚'}}</p>
        <hr>

        <h2>库存在中有 {{count}} 件商品，列表如下:</h2>
        
        <p v-for="(item,index) in products" :key="index">
            商品ID：{{ ++index }}
            商品名称:{{ item.productName }}
            销售价格：{{ item.salePrice }}
        </p>
    </div>
</template>
<script>
import {mapState,mapGetters} from 'vuex';
export default {
    computed:{
        //作为当前组件的计算属性(数组形态)
        ...mapState([
            'username',
            'age',
            'sex',
            'salary',
            'products'
        ]),
        //作为当前组件的计算属性(对象形态)
        ...mapState({
            extension:'extends'
        }),
        //作为当前组件的计算属性以获取Getters
        ...mapGetters({
            count:'getNums'
        })
    }
}
</script>