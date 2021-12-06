import { splithyphen } from './string'

export const sortasc = (data, key) =>
  data.sort(function (a, b) {
    return a[key] > b[key] ? 0 : a[key] < b[key] ? -1 : 1
  })

export const filtered = (data, key, value) =>
  data.filter((el) => {
    return el[key].toLowerCase().indexOf(value.toLowerCase()) >= 0
  })

export const range = (data, key, value) => {
  let arr = []
  if (value != '') {
    if (value.indexOf('-') > -1) {
      arr = splithyphen(value)
      return data.slice(arr[0] - 1, arr[1])
    } else {
      return data.slice(0, value)
    }
  } else {
    return data
  }
}
