import Value from "./Models/Value.js"
import Weather from "./Models/Weather.js"
import Quote from "./Models/Quote.js"
import Todo from "./Models/Todo.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  /** @type {Weather} */
  weatherApiWeathers = null

  /** @type {Quote} */

  apiQuotes = null

  /** @type {Todo} */

  todos = null
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
