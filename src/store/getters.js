
export const productGetters = {
  allProducts: (state, getters) => {
    return state.products
  },
  pagination: (state, getters) => {
    return state.productPagination
  },
  productById: (state, getters) => id => {
    if (getters.allProducts.length > 0) {
      return getters.allProducts.filter(p => p.id === id)[0]
    } else {
      return state.product
    }
  },
  product: state => state.product
}

export const categoryGetters = {
  allCategories: state => state.categories,
  categoryById: (state, getters) => id => {
    if (getters.allCategories.length > 0) {
      return getters.allCategories.filter(p => p.id === id)[0]
    } else {
      return state.category
    }
  },
  category: (state, getters) => {
    return state.category
  }
}
export const sortGetters = {
  sort: state => state.sort
}

export const cartGetters = {
  cart: state => state.cart
}

