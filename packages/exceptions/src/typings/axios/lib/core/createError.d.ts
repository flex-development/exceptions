declare module 'axios/lib/core/createError' {
  import type { ObjectPlain } from '@flex-development/tutils'
  import type { AxiosError } from '@packages/exceptions/interfaces'
  import type { AxiosRequestConfig } from '@packages/exceptions/types/axios/axios-request-config.type'
  import type { AxiosResponse } from '@packages/exceptions/types/axios/axios-response.type'
  import type { ClientRequest } from 'http'

  export default function <
    Payload extends any = any,
    Data extends any = any,
    Params extends ObjectPlain = ObjectPlain,
    Dataform extends any = Data,
    DataformReturn extends any = any,
    Resform extends any = any,
    ResformReturn extends any = Payload
  >(
    message: string,
    config: AxiosRequestConfig<
      Data,
      Params,
      Dataform,
      DataformReturn,
      Resform,
      ResformReturn
    >,
    code?: string,
    request?: ClientRequest,
    response?: AxiosResponse<
      Payload,
      Data,
      Params,
      Dataform,
      DataformReturn,
      Resform,
      ResformReturn
    >
  ): AxiosError<
    Payload,
    Data,
    Params,
    Dataform,
    DataformReturn,
    Resform,
    ResformReturn
  >
}
