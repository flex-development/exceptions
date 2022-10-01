declare module 'axios/lib/core/createError' {
  import type { AxiosError } from '#src/interfaces'
  import type { AxiosRequestConfig, AxiosResponse } from 'axios'
  import type { ClientRequest } from 'node:http'

  export default function <Payload = any, Data = any>(
    message: string,
    config: AxiosRequestConfig<Data>,
    code?: string,
    request?: ClientRequest | XMLHttpRequest,
    response?: AxiosResponse<Payload, Data>
  ): AxiosError<Payload, Data>
}
