import { reqGoodsList } from "@/api"
const state = {
  goodsListInfo: {},
}
const mutations = {
  GOODSLIST (state, GoodsList) {
    state.goodsListInfo = GoodsList
  },

}
const actions = {
  async getCategoryList ({ commit }, searchParams) {
    const result = await reqGoodsList(searchParams)
    if (result.code === 200) {
      commit("GOODSLIST", result.data)
    }
  },
}
const getters = {
  attrsList (state) {
    return state.goodsListInfo.attrsList || []
  },
  goodsList (state) {
    return state.goodsListInfo.goodsList || []
  },
  trademarkList (state) {
    return state.goodsListInfo.trademarkList || []
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}