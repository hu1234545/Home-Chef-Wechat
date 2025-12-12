const data = require('../../../utils/data.js')

Page({
  data: {
    dish: {},
    ingredients: [],
    steps: []
  },
  onLoad(options) {
    const id = Number(options.id)
    const dish = data.find(d => d.id === id) || {}
    const ingredients = (dish.ingredients || '').split(/[,，]/).map(s => s.trim()).filter(Boolean)
    const steps = Array.isArray(dish.steps)
      ? dish.steps
      : (dish.steps || '').split(/[。；;]/).map(s => s.trim()).filter(Boolean)
    this.setData({ dish, ingredients, steps })
  }
})
