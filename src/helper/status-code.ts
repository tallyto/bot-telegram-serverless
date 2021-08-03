interface StatusCode {
  statusCode: number
  body?: string
}

enum HttpStatusCode {
  ok = 200,
  notFound = 400,
  internalServerError = 500
}

export const success = (message?: string): StatusCode => {
  return {
    statusCode: HttpStatusCode.ok,
    body: JSON.stringify(message)
  }
}

export const internalServerError = (message?: string): StatusCode => {
  return {
    statusCode: HttpStatusCode.internalServerError,
    body: JSON.stringify(message)
  }
}
