declare module 'axios/lib/core/createError' {
  import type { AxiosError } from '@packages/exceptions/interfaces'
  import type { AxiosRequestConfig, AxiosResponse } from 'axios'
  import type { ClientRequest } from 'http'

  export default function <Payload = any, Data = any>(
    message: string,
    config: AxiosRequestConfig<Data>,
    code?: string,
    request?: ClientRequest,
    response?: AxiosResponse<Payload, Data>
  ): AxiosError<Payload, Data>
}
