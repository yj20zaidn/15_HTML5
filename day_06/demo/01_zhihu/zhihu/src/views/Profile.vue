<template>
    <div>
        <mt-header title="个人设置" fixed>
            <router-link to="/me" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="main">
            <p>姓名:{{username}}</p>
            <p>上次登录日期:2020年04月11日 15:29:36</p>
            <p>发表的文章数量:300篇</p>
            <p>密码：{{password}}</p>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
    computed:{
        ...mapState([
            'id',
            'username'
        ])
    },
    data(){
        return {
            password:''
        }
    },
    //在挂载后要从WEB服务器获取当前用户的相关信息
    mounted(){
        //形式为profile/3
        this.axios.get('/profile/' + this.id).then(res=>{
            this.password = res.data.info.password;
        });
    }
}
</script>
<style scoped>
.main{
    margin-top:50px;
    margin-left:10px;
}
.main p{
    line-height:2em;
}
</style>