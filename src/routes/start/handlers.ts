import { activeItem, isPressed } from './store'
import type { MottoItem } from './typings'
import { shortInterval, items, repeatDelay } from './consts'

let timer = setInterval(main, shortInterval * 1000)

const itemsMemo: MottoItem[] = []

export function handleClick() {
  console.log('Hold!')

  isPressed.set(true)
  clearInterval(timer)
}

export function handleClickOff() {
  console.log('Go!')
  isPressed.set(false)
  main()
  timer = setInterval(main, shortInterval * 1000)
}

function main() {
  selectAlmostRandomItem()
}

function getRandomIndex(arr: any[]) {
  return Math.floor(Math.random() * arr.length)
}

function selectAlmostRandomItem() {
  let item = items[getRandomIndex(items)]

  while (itemsMemo.indexOf(item) != -1) {
    item = items[getRandomIndex(items)]
  }

  if (itemsMemo.length == repeatDelay) {
    itemsMemo.shift()
  }

  itemsMemo.push(item)

  activeItem.set(item)
}

main()
