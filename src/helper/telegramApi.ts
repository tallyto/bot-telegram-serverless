import axios from 'axios'

export class TelegramApi {
  async sendMessage (chatId: string, text: string): Promise<any> {
    const token = String(process.env.TELEGRAM_TOKEN)
    const result = await axios.get(`https://api.telegram.org/bot${token}/sendMessage`, {
      params: {
        chat_id: chatId,
        text
      }
    })
    return result.data
  }
}
