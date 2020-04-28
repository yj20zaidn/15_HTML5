<template>
    <div>
        <!-- 顶部导航开始 -->
        <header>
            <mt-header title="知乎-有问题,上知乎">
                <router-link slot="left" to="/">
                    <mt-button  icon="back"></mt-button>
                </router-link>
            </mt-header>
        </header>
        <!-- 导航导航结束 -->
        <!-- 正文区域开始 -->
        <div class="questionHeader-content">
                <div class="questionHeader-title">
                    {{subject}}
                </div>
                <div class="richContent" v-html="content">
                </div>
        </div>
        <!-- 正文区域结束 -->
    </div>
</template>
<script>
export default {
    data(){
        return {
            //存储文章的标题
            subject:'',
            //文章的正文
            content:''
        }
    },
    //挂载完成后发送AJAX请求,以获取文章的标题及正文等相关信息
    mounted(){
        var id = this.$route.params.id;
        this.axios.get('/article/' + id).then(res=>{
            //文章标题
            this.subject = res.data.article.subject;
            //文章正文
            this.content = res.data.article.content;
        });
    }
}
</script>
<style scoped>
.questionHeader-content {
    padding: 15px 10px;
    border-top: 0;
}
.questionHeader-title {
    margin-top: 8px;
    font-size: 20px;
    color: #1a1a1a;
    font-synthesis: style;
    letter-spacing: 0;
    line-height: 1.67;
    text-align: left;
}
.richContent {
    line-height: 1.67;
}
.richContent p{
    margin: 1.4em 0;
}
</style>