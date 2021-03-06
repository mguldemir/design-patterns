class ProductNames {
  constructor() {
    if (!ProductNames.instance) {
      this._data = []
      ProductNames.instance = this
    }
    return ProductNames.instance
  }

  set(item) {
    this._data.push(item)
  }

  get(id) {
    return this._data.find((d) => d.id === id)
  }
}

const instance = new ProductNames()
Object.freeze(instance)

export default instance
