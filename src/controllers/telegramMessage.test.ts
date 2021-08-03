import axios from 'axios'
import { TelegramApi } from '../helper/telegramApi'
import { TelegramMessageController } from './telegramMessage'
const makeSut = (): TelegramMessageController => {
  const telegramApi = new TelegramApi()
  return new TelegramMessageController(telegramApi)
}
describe('Telegram Message Controller', () => {
  it('Deve receber uma mensagem e envia-la', async () => {
    const sut = makeSut()
    const event = { message: { text: 'teste', chat: { id: 1 } } }
    jest.spyOn(axios, 'get').mockResolvedValue({ data: 'ok' })
    const result = await sut.handler(event)
    expect(result).toBe('ok')
  })
})
