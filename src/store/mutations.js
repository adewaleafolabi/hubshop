// import { productSchema } from './schemas'
// import { normalize } from 'normalizr'
// import merge from "lodash/object/merge"

import {
  SHOW_LOADER,
  HIDE_LOADER,
  PRODUCT_BY_ID,
  SET_PRODUCT,
  PRODUCT_BY_ID_SUCCESS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  ALL_CATEGORIES,
  ALL_CATEGORIES_SUCCESS,
  UPDATE_PRODUCT_PAGINATION,
  UPDATE_PRODUCT_PAGINATION_SUCCESS,
  SORT_PRODUCT,
  SORT_PRODUCT_SUCCESS,
  CATEGORY_PRODUCT,
  CATEGORY_PRODUCT_SUCCESS,
  ERROR_MSG
} from './mutation-types'

export const loaderMutations = {
  [SHOW_LOADER] (state) {
    state.showLoader = true
  },
  [HIDE_LOADER] (state) {
    state.showLoader = false
  }
}
export const productMutations = {
  [ALL_PRODUCTS] (state) {
    state.showLoader = true
  },
  [ALL_PRODUCTS_SUCCESS] (state, payload) {
    state.showLoader = false
    state.products = payload.list.map(k => {
      k.images = [k.imageOne, k.imageTwo, k.imageThree]
      k.name = k.prdname
      k.id = k.prdcode
      return k
    })
    state.productPagination.page = payload.page
    state.productPagination.limit = payload.limit
    state.productPagination.total = payload.total
  },
  [PRODUCT_BY_ID] (state) {
    state.showLoader = true
  },
  [PRODUCT_BY_ID_SUCCESS] (state, payload) {
    state.showLoader = false
    state.product = payload
  },
  [SET_PRODUCT]: (state, payload) => { state.product = payload },
  [ERROR_MSG] (state, payload) {}
}

export const cartMutations = {
  [ADD_TO_CART]: (state, payload) => state.cart.push(payload),
  [REMOVE_FROM_CART]: (state, payload) => {
    const index = state.cart.findIndex(p => p.id === payload)
    state.cart.splice(index, 1)
  },
  [UPDATE_CART_QUANTITY]: (state, payload) => {
    state.cart.map(c => {
      if (c.id === payload.id) {
        c.cartQty = payload.cartQty
        return c
      }
      return c
    })
  }
}

export const productPaginationMutations = {
  [UPDATE_PRODUCT_PAGINATION] (state) {
    state.showLoader = true
  },
  [UPDATE_PRODUCT_PAGINATION_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.products = payload.list.map(k => {
      k.images = [k.imageOne, k.imageTwo, k.imageThree]
      k.name = k.prdname
      k.id = k.prdcode
      return k
    })
    state.productPagination.page = payload.page
    state.productPagination.limit = payload.limit
    state.productPagination.total = payload.total
  }
}

export const productSortMutations = {
  [SORT_PRODUCT] (state) {
    state.showLoader = true
  },
  [SORT_PRODUCT_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.products = payload.list.map(k => {
      k.images = [k.imageOne, k.imageTwo, k.imageThree]
      k.name = k.prdname
      k.id = k.prdcode
      return k
    })
    state.sort = payload.sort
    state.productPagination.page = payload.page
    state.productPagination.limit = payload.limit
    state.productPagination.total = payload.total
  }
}

export const categoryMutations = {
  [ALL_CATEGORIES] (state) {
    state.showLoader = true
  },
  [ALL_CATEGORIES_SUCCESS] (state, payload) {
    // state.showLoader = false
    state.categories = payload
  },
  [CATEGORY_PRODUCT] (state) {
    state.showLoader = true
  },
  [CATEGORY_PRODUCT_SUCCESS]: (state, payload) => {
    state.showLoader = false
    state.products = payload.list.map(k => {
      k.images = [k.imageOne, k.imageTwo, k.imageThree]
      k.name = k.prdname
      k.id = k.prdcode
      return k
    })
    state.category = payload.category
    state.sort = payload.sort
    state.productPagination.page = payload.page
    state.productPagination.limit = payload.limit
    state.productPagination.total = payload.total
  }
}
