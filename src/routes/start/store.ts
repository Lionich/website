import { writable, derived } from 'svelte/store'
import type { MottoItem } from './typings'
import { longInterval, shortInterval, items } from './consts'

const activeItem = writable<MottoItem>(items[0])
const isPressed = writable<boolean>(false)

const videoSrc = derived([isPressed, activeItem], ([$isPressed, $activeItem]) => {
  const { url, startTime } = $activeItem
  const start = startTime || 0
  const interval = $isPressed ? longInterval : shortInterval
  return `${url}#t=${start},${start + interval}`
})

export { activeItem, isPressed, videoSrc }
