/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
'use strict'
import { TelegramMessageFactory } from './factory/telegramMessageFactory'

module.exports.hello = async (event: any) => {
  const data = JSON.parse(event.body)

  console.log('telegram event', data)
  const messageFactory = TelegramMessageFactory()

  try {
    const result = await messageFactory.handler(data)
    console.log('telegram result', result)
    return {
      statusCode: 200
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500
    }
  }
}
