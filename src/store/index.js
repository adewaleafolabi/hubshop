import Vue from 'vue'
import Vuex from 'vuex'
import {productGetters, categoryGetters, sortGetters, cartGetters} from './getters'
import {
  productMutations,
  cartMutations,
  categoryMutations,
  productPaginationMutations,
  productSortMutations,
  loaderMutations
} from './mutations'
import {productActions, categoryActions, productPaginationActions, productSortActions} from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    cart: [],
    showLoader: false,
    product: {},
    products: [],
    categories: [],
    category: {id: ''},
    sort: '',
    productPagination: {total: 0, page: 1, limit: 9}
  },
  mutations: Object.assign({}, productMutations, cartMutations, categoryMutations, productPaginationMutations, productSortMutations, loaderMutations),
  getters: Object.assign({}, productGetters, categoryGetters, sortGetters, cartGetters),
  actions: Object.assign({}, productActions, categoryActions, productPaginationActions, productSortActions)
})
