import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

import store from '../store';

// 测试案例开始
import Header from '../components/MintUI/Header.vue';
import Button from '../components/MintUI/Button.vue';
import Field from '../components/MintUI/Field.vue';
import Toast from '../components/MintUI/Toast.vue'
import Checklist from '../components/MintUI/Checklist.vue'
import Radio from '../components/MintUI/Radio.vue'
import Switch from '../components/MintUI/Switch.vue'
import Cell from '../components/MintUI/Cell.vue';
import Cellswipe from '../components/MintUI/Cellswipe.vue'
import Messagebox from '../components/MintUI/Messagebox.vue'
import Navbar from '../components/MintUI/Navbar.vue'
import Tabcontainer from '../components/MintUI/Tabcontainer.vue'
import Lazyload from '../components/MintUI/Lazyload.vue';
import Infinite from '../components/MintUI/Infinite.vue';
import Indicator from '../components/MintUI/Indicator.vue'
import Tabbar from '../components/MintUI/Tabbar.vue';
// 测试案例结束
import Register from '../views/Register';
import Me from '../views/Me';
import About from '../views/About';
import Profile from '../views/Profile';
import Login from '../views/Login';
import Article from '../views/Article';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/header',
    component: Header
  },
  {
    path: '/button',
    component: Button
  },
  {
    path: '/field',
    component: Field
  },
  {
    path: '/toast',
    component: Toast
  },
  {
    path: '/checklist',
    component: Checklist
  },
  {
    path: '/radio',
    component: Radio
  },
  {
    path: '/switch',
    component: Switch
  },
  {
    path: '/cell',
    component: Cell
  },
  {
    path: '/cellswipe',
    component: Cellswipe
  },  
  {
    path: '/messagebox',
    component: Messagebox
  }, 
  {
    path: '/navbar',
    component: Navbar
  }, 
  {
    path: '/tabcontainer',
    component: Tabcontainer
  }, 
  {
    path: '/lazyload',
    component: Lazyload
  }, 
  {
    path: '/infinite',
    component: Infinite
  },
  {
    path: '/indicator',
    component: Indicator
  }, 
  {
    path: '/tabbar',
    component: Tabbar
  }, 
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login
  },  
  {
    path: '/article/:id',
    component: Article
  },  
  {
    path: '/me',
    component: Me,
    //在路由的头部添加相关的信息
    meta: {
      //requiresAuth是自定义的头部名称,表示需要进行合法的检测
      requiresAuth:true
    }
  },
  {
    path: '/about',
    component:About,
    meta: {
      requiresAuth:true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      requiresAuth:true
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//全局前置守卫
router.beforeEach((to, from, next) => {
    //检测to的meta中是否包含requiresAuth属性，如包含则进行检测
    //console.log(to);
    if (to.matched.some(r => r.meta.requiresAuth)) { 
        //如果store中isLogined为false或sessionStorage中的isLogined为false
        //则跳转到登录路由
      if (store.state.isLogined == false || sessionStorage.getItem('isLogined') == false) {
            //因为需要跳转到登录前的路由,所以需要将登录前的路由作为
            //参数传递给login,当在login登录成功后,
            //再获取该参数并且跳转到这个路由地址
            router.push({ path: '/login',query:{path:to.fullPath} });
        } else {
            next();
        }
    }
    else {
        next();
    }
});


export default router
