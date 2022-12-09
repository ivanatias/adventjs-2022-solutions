const countHours = require('./index')

describe('challenge #2 tests', () => {
  test('countHours function returns a number', () => {
    const year = 2022
    const holidays = ['01/06', '04/01', '12/25']

    const returnedValue = countHours(year, holidays)
    expect(typeof returnedValue).toBe('number')
  })

  test('countHours function returns 4 total extra hours', () => {
    const year1 = 2023
    const year2 = 2022
    const holidays = ['01/06', '04/01', '12/25']

    const firstReturnedValue = countHours(year1, holidays)
    expect(firstReturnedValue).toEqual(4)

    const secondReturnedValue = countHours(year2, holidays)
    expect(secondReturnedValue).toEqual(4)
  })

  test('countHours function returns 10 total extra hours', () => {
    const year = 1985
    const holidays = [
      '01/01',
      '01/06',
      '02/02',
      '02/17',
      '02/28',
      '06/03',
      '12/06',
      '12/25'
    ]

    const returnedValue = countHours(year, holidays)
    expect(returnedValue).toEqual(10)
  })

  test('countHours function returns 0 total extra hours', () => {
    const year = 2000
    const holidays = ['01/01']

    const returnedValue = countHours(year, holidays)
    expect(returnedValue).toBe(0)
  })
})
