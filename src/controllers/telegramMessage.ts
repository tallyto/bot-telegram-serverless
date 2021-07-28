import { TelegramApi } from '../helper/telegramApi'

export class TelegramMessageController {
  private readonly api: TelegramApi

  constructor (api: TelegramApi) {
    this.api = api
  }

  async handler (event: any): Promise<any> {
    const { chat, text } = event.message
    const result = await this.api.sendMessage(chat.id, text)
    return result
  }
}
