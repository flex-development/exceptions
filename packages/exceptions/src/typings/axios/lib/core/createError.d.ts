declare module 'axios/lib/core/createError' {
  import type { AxiosError } from '@packages/exceptions/interfaces'
  import type { AxiosRequestConfig } from '@packages/exceptions/types/axios/axios-request-config.type'
  import type { AxiosResponse } from '@packages/exceptions/types/axios/axios-response.type'
  import type { ClientRequest } from 'http'

  export default function (
    message: string,
    config: AxiosRequestConfig,
    code?: string,
    request?: ClientRequest,
    response?: AxiosResponse
  ): AxiosError
}
