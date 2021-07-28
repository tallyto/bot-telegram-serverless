import { TelegramApi } from './telegramApi'
import axios from 'axios'
describe('Telegram Api', () => {
  it('Deve garantir que uma mensagem foi enviada', async () => {
    const sut = new TelegramApi()
    jest.spyOn(axios, 'get').mockResolvedValue({ data: 'ok' })
    const result = await sut.sendMessage('chat_id', 'text')
    expect(result).toBeTruthy()
  })
})
