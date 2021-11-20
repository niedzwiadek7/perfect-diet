export enum Place {
  start = 'start',
  end = 'end'
}

export enum AmountChange {
  one = 'one',
  every = 'every'
}

const move = (index: number, array: Array<any>, place: Place): void => {
  const [element] = array.splice(index, 1)
  switch (place) {
    case Place.start:
      array.unshift(element)
      break
    case Place.end:
      array.push(element)
      break
  }
}

const moveElement = (array: Array<any>, condition: Function, place: Place, amount: AmountChange): boolean => {
  let index: number = 0
  let isChanged: boolean = false
  while (index < array.length) {
    if (condition(array[index])) {
      isChanged = true
      if (amount === AmountChange.one) {
        break
      } else {
        move(index, array, place)
      }
    }
    index++
  }

  // when element not found
  if (!isChanged) {
    return false
  }

  if (amount === AmountChange.one) {
    move(index, array, place)
  }
  return true
}

export default moveElement
