import axios from 'axios'
import store from './index'
import {
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS,
  PRODUCT_BY_CAT_ID,
  PRODUCT_BY_CAT_ID_SUCCESS,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  ALL_CATEGORIES,
  ALL_CATEGORIES_SUCCESS,
  UPDATE_PRODUCT_PAGINATION,
  UPDATE_PRODUCT_PAGINATION_SUCCESS,
  SORT_PRODUCT,
  SORT_PRODUCT_SUCCESS,
  CATEGORY_PRODUCT,
  CATEGORY_PRODUCT_SUCCESS
} from './mutation-types'

var service = axios.create({
  baseURL: `${process.env.API_BASE}`,
  params: {'merchantId': `${process.env.MERCHANT_ID}`, 'channel': 1},
  headers: {'Authorization': `${process.env.AUTHORIZATION}`}
})

export const productActions = {
  allProducts ({commit}) {
    commit(ALL_PRODUCTS)
    service.get(`${process.env.API_BASE}/product/list`, {
      params: {
        page: store.getters.pagination.page,
        catId: store.getters.category.id,
        desc: store.getters.sort,
        limit: store.getters.pagination.limit
      }
    }).then(response => {
      commit(ALL_PRODUCTS_SUCCESS, response.data)
    })
  },
  productById ({commit}, payload) {
    commit(PRODUCT_BY_ID)
    service.get(`${process.env.API_BASE}/products/${payload}`).then(response => {
      console.log(payload, response.data)
      commit(PRODUCT_BY_ID_SUCCESS, response.data)
    })
  },
  productByCategoryId ({commit}, payload) {
    commit(PRODUCT_BY_CAT_ID)
    service.get(`${process.env.API_BASE}/product/list`, {'catId': payload}).then(response => {
      console.log(payload, response.data)
      commit(PRODUCT_BY_CAT_ID_SUCCESS, response.data)
    })
  }
}

export const categoryActions = {
  allCategories ({commit}) {
    commit(ALL_CATEGORIES)
    service.get(`${process.env.API_BASE}/category/list`).then(response => {
      commit(ALL_CATEGORIES_SUCCESS, response.data.categoryList.map(k => {
        k.name = k.catName
        k.subItems = []
        return k
      }))
    })
  },
  category ({commit}, payload) {
    commit(CATEGORY_PRODUCT)
    service.get(`${process.env.API_BASE}/product/list`, {
      params: {
        desc: store.getters.sort,
        catId: payload.id,
        limit: store.getters.pagination.limit
      }
    }).then(response => {
      response.data.category = payload
      response.data.sort = store.getters.sort
      commit(CATEGORY_PRODUCT_SUCCESS, response.data)
    })
  }
}

export const productPaginationActions = {
  pagination ({commit}, payload) {
    commit(UPDATE_PRODUCT_PAGINATION)
    service.get(`${process.env.API_BASE}/product/list`, {
      params: {
        page: payload,
        desc: store.getters.sort,
        catId: store.getters.category.id,
        limit: store.getters.pagination.limit
      }
    }).then(response => {
      commit(UPDATE_PRODUCT_PAGINATION_SUCCESS, response.data)
    })
  }
}
export const productSortActions = {
  sort ({commit}, payload) {
    commit(SORT_PRODUCT)
    service.get(`${process.env.API_BASE}/product/list`, {
      params: {
        desc: payload,
        catId: store.getters.category.id,
        limit: store.getters.pagination.limit
      }
    }).then(response => {
      response.data.sort = payload
      commit(SORT_PRODUCT_SUCCESS, response.data)
    })
  }
}
