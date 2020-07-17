import { reqCategoryList, reqFloor, reqBanner } from "@/api"
const state = {
  CategoryList: [],
  CateFloor: [],
  CateBanner:[]
}
const mutations = {
  REQCATEGORYLIST (state, reqCategoryList) {
    state.CategoryList = reqCategoryList
  },
  REQFLOOR (state, Floor) {
    state.CateFloor = Floor
  },
  REQBANNER (state, Banner) {
    state.CateBanner = Banner
  }
}
const actions = {
  async getCategoryList ({ commit }) {
    const result = await reqCategoryList()
    if (result.code === 200) {
      commit("REQCATEGORYLIST", result.data)
    }
  },
  async getFloor ({ commit }) {
    const result = await reqFloor()
    if (result.code === 200) {
      commit("REQFLOOR", result.data)
    }
  },
  async getBanner ({ commit }) {
    const result = await reqBanner()
    if (result.code === 200) {
      commit("REQBANNER", result.data)
    }
  }
}
const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}