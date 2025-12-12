const data = require('../../utils/data.js')

function pickN(arr, n) {
  const pool = arr.slice()
  const res = []
  while (res.length < n && pool.length) {
    const i = Math.floor(Math.random() * pool.length)
    res.push(pool.splice(i, 1)[0])
  }
  return res
}

Page({
  data: { result: { others: [], soup: [] } },
  onRandom() {
    const soups = data.filter(d => d.type === '汤类')
    const others = data.filter(d => d.type !== '汤类')
    const selectedOthers = pickN(others, 3)
    const selectedSoup = pickN(soups, 1)
    this.setData({ result: { others: selectedOthers, soup: selectedSoup } })
  },
  onTapItem(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: `/packageA/pages/detail/detail?id=${id}` })
  }
})
