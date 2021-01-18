import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    name:'',
    id:'',
    type:'',
    address:'',
    memo:'',
    lot_rate_group:'',
    rate_group:'',
    kong:1,
    tubiao:false,
    xitong:0,
}

const mutations = {
    changeId(state,{xitong,chanId,name,type,address,memo,lot_rate_group,rate_group,kong}){
        state.id = chanId;
        state.name = name;
        state.type = type;
        state.address = address;
        state.memo = memo;
        state.lot_rate_group = lot_rate_group;
        state.rate_group = rate_group;
        state.kong = kong;
        state.xitong = xitong;
    },
	changeTu(state,{changeList}){
		state.tubiao = changeList;
	}
}

export default new Vuex.Store({
    state,
    mutations
})