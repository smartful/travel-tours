import { shortener } from './shortener'

describe('shortener', () => {
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
  'Pellentesque posuere turpis et sem tristique, vitae scelerisque ipsum feugiat.' +
  'Praesent ullamcorper.'

  const smallText = 'Lorem ipsum dolor sit amet'

  it('Should return the shorten text', () => {
    expect(shortener(text, 50)).toBe('Lorem ipsum dolor sit amet, consectetur adipiscing ...')
  })

  it('Should return the shorten text with default length at 50 if not mention', () => {
    expect(shortener(text)).toBe('Lorem ipsum dolor sit amet, consectetur adipiscing ...')
  })

  it('Should return the whole text if to small', () => {
    expect(shortener(smallText, 50)).toBe(smallText)
  })
})
