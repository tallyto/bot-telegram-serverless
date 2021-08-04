import { TelegramApi } from '../helper/telegramApi'

export class TelegramMessageController {
  private readonly api: TelegramApi

  constructor (api: TelegramApi) {
    this.api = api
  }

  async handler (event: any): Promise<any> {
    if (event.message) {
      const { chat, text } = event.message
      const msg = this.processMessage(text)
      return await this.sendMessage(msg, chat)
    }
    if (event.edited_message) {
      const { chat, text } = event.edited_message
      return await this.sendMessage(text, chat)
    }
  }

  private async sendMessage (text: any, chat: any): Promise<any> {
    const msg = this.processMessage(text)
    return await this.api.sendMessage(chat.id, msg)
  }

  private processMessage (message: string): string {
    if (message.charAt(0) === '/') {
      const [argument] = message.slice(1).split(' ')
      return this.commands(argument)
    }
    return message
  }

  private commands (command: string): string {
    console.log('comando', command)
    switch (command) {
      case 'help':
        return '/joke para uma piada aleatoria\n/dolar para saber a cotacao do dolar'
      case 'joke':
        return 'Desenvolvedor fullstalker e aquele que segue a pessoa em todas as redes sociais'
      default:
        return 'comando inválido'
    }
  }
}
