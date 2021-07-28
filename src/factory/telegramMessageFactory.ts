import { TelegramMessageController } from '../controllers/telegramMessage'
import { TelegramApi } from '../helper/telegramApi'

export const TelegramMessageFactory = (): TelegramMessageController => {
  const telegramApi = new TelegramApi()
  return new TelegramMessageController(telegramApi)
}
