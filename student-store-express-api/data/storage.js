import { join, dirname } from 'path'
import { Low, JSONFile } from 'lowdb'
import fileSync} 

class Storage {
  constructor() {
    this.path = `${dirname}/db.json`
    this.setup()
  }

  async setup() {
    const adapter = new JSONFile(file)
    this.db = new Low(adapter)
    this.db.defaults({ purchases: [], products: [] }).write()
  }

  set(key, value) {
    return this.db.set(key, value)
  }

  get(key) {
    return this.db.get(key)
  }
}

module.exports = {
  storage: new Storage(),
}
