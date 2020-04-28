<template>
    <div>
        <!-- 头部区域开始 -->
        <mt-header title="有问题，上知乎" fixed>
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <router-link to="/" slot="right">
                <mt-button icon="more"></mt-button>
            </router-link>
        </mt-header>
        <!-- 头部区域结束 -->
        <!-- 注册区域开始 -->
        <div class="main">
            <mt-field type="text" label="用户名" v-model="username">
            </mt-field>

            <mt-field type="password" label="密码" v-model="password">

            </mt-field>
            <mt-button type="primary" size="large" @click="login">
                快速登录
            </mt-button>
        </div>
        <!-- 注册区域结束 -->
    </div>
</template>
<script>
import {mapMutations} from 'vuex';
export default {
    data(){
        return {
            username:'',
            password:''
        }
    },
    methods:{
        ...mapMutations([
            'logined'
        ]),
        login(){
            this.axios.post('/login','username=' + this.username + '&password=' + this.password).then(res=>{
                //获取服务器的响应代码
                var code = res.data.code;
                if(code == 0){ //登录失败
                    this.$messagebox.alert('用户名或密码错误','登录失败');
                } else { 
                    
                    //登录成功,修改state的状态
                    this.logined({id:res.data.id,username:res.data.username});
                    
                    //将服务器返回id,username等相关信息存储到webstorage中
                    sessionStorage.setItem('id',res.data.id);
                    sessionStorage.setItem('username',res.data.username);
                    sessionStorage.setItem('isLogined',true);

                    //如果需要跳转到登录前的页面
                    //route代表路由路由对象(URL地址)
                    //router代表路由实例(或称路由表、路由器)
                    if(this.$route.query.path){
                        this.$router.push(this.$route.query.path);
                    } else {
                        this.$router.push('/');
                    }
                }
            });
        }
    }
}
</script>
<style scoped>
.main{
    margin-top:40px;
}
</style>