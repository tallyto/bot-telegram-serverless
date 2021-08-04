'use strict'
import { TelegramMessageFactory } from './factory/telegramMessageFactory'
import { internalServerError, StatusCode, success } from './helper/status-code'
export const webhook = async (event: any): Promise<StatusCode> => {
  const data = JSON.parse(event.body)
  console.log('event', data)
  const messageFactory = TelegramMessageFactory()
  try {
    await messageFactory.handler(data)
    return success()
  } catch (error) {
    return internalServerError(error.message)
  }
}
