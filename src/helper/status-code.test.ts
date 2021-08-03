import { internalServerError, success } from './status-code'
describe('Status code test', () => {
  it('Success', () => {
    const result = success()
    expect(result).toEqual({
      statusCode: 200
    })
  })

  it('Internal server error', () => {
    expect(internalServerError()).toEqual({
      statusCode: 500
    })
  })
})
