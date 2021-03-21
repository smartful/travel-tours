export const shortener = (text, length) => {
  if (text.length < length) {
    return text
  }

  return text.slice(0, length) + ' ...'
}
