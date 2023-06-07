import { Edit } from '@element-plus/icons-vue'
import { shallowRef } from 'vue'
 
// 路由
export default [
  {
    path: "/",
    component: () => import("../layout/layout.vue"), //路由懒加载
    redirect: "/index",
    children: [
      {
        path: '/index',
        name: '我的',
        meta: { icon: shallowRef(Edit) },
        redirect: "/index/commission",
        component: () => import("../pages/index/index.vue"), //路由懒加载
        children: [
          {
            path: "/index/commission",
            name: "我的佣金",
            meta: {icon: shallowRef(Edit)},
            component: () => import("../pages/index/commission/index.vue"),
          },
          {
            path: "/index/performance",
            name: "我的业绩",
            meta: {icon: shallowRef(Edit)},
            component: () => import("../pages/index/performance/index.vue"),
          },
        ]
      },
      {
        path: '/user',
        name: '用户中心',
        meta: { icon: shallowRef(Edit) },
        redirect: "/user/authority",
        component: () => import("../pages/user/index.vue"), //路由懒加载
        children: [
          {
            path: "/user/org",
            name: "组织架构",
            meta: {icon: shallowRef(Edit)},
            component: () => import("../pages/user/org/index.vue"),
          },
          {
            path: "/user/role",
            name: "角色权限",
            meta: {icon: shallowRef(Edit)},
            component: () => import("../pages/user/role/index.vue"),
          },
          {
            path: "/user/info",
            name: "数据权限",
            meta: {icon: shallowRef(Edit)},
            component: () => import("../pages/user/info/index.vue"),
          },
        ]
      },
      {
        path:'/config',
        name: '系统配置',
        meta: { icon: shallowRef(Edit) }, 
        component: () => import("../pages/config/index.vue"), //路由懒加载
      },
      {
        path: '/error',
        name: '错误页',
        component: () => import('../pages/error/index.vue')
      },
    ]
  },
  {
    path: '/login',
    name: '登录页',
    component: () => import('../pages/login/index.vue')
  },
  
];
