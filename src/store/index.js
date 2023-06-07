import { createStore } from 'vuex'

export const store = createStore({
    state: {
        //左侧导航数据
        sidenNavList: [],
        iscollapse: false
    },
    mutations: {
        setNavBar(state, data) { //保存用户信息 
            let { list, now } = data;
            let _list0 = list.filter((z) => {
                return z.path == '/';
            });
            let _list1 = _list0[0].children.filter((r) => r.name != '错误页')
            state.sidenNavList = _list1.filter((r) => !r.name.includes("二级页"))
        },
        setIsColl(state, data) {
            state.iscollapse = data
            window.sessionStorage.removeItem('setIsColl')
            window.sessionStorage.setItem('setIsColl', data)
        }
    },
    actions: {
    },
    modules: {
    },
    getters: {
        getSidenNavList(state) {
            return state.sidenNavList
        },
    }

});