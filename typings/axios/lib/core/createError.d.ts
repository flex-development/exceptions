declare module 'axios/lib/core/createError' {
  import type { AxiosRequestConfig, AxiosResponse } from 'axios'
  import type { ClientRequest } from 'node:http'
  import type { AxiosError } from 'src/interfaces'

  export default function <Payload = any, Data = any>(
    message: string,
    config: AxiosRequestConfig<Data>,
    code?: string,
    request?: ClientRequest,
    response?: AxiosResponse<Payload, Data>
  ): AxiosError<Payload, Data>
}
