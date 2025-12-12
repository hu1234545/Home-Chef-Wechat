const data = require('../../utils/data.js')

Page({
  data: {
    categories: ['全部','炒菜','蒸菜','汤','主食','早餐','凉拌','炖菜','炸品','砂锅菜','煮锅','烫菜','饮品'],
    activeCategory: '全部',
    query: '',
    list: []
  },
  onLoad() {
    this.applyFilter()
  },
  onSearchInput(e) {
    this.setData({ query: e.detail.value || '' })
    this.applyFilter()
  },
  onTapCategory(e) {
    const cat = e.currentTarget.dataset.cat
    this.setData({ activeCategory: cat })
    this.applyFilter()
  },
  applyFilter() {
    const q = this.data.query.trim()
    const cat = this.data.activeCategory
    let list = data
    if (cat !== '全部') list = list.filter(d => d.category === cat)
    if (q) list = list.filter(d => d.name.indexOf(q) !== -1)
    this.setData({ list })
  },
  onTapItem(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: `/packageA/pages/detail/detail?id=${id}` })
  }
})
