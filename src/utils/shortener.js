export const shortener = (text, length = 50) => {
  if (text.length < length) {
    return text
  }

  return text.slice(0, length) + ' ...'
}
