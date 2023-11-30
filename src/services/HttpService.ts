import Axios, {AxiosError, AxiosInstance, ResponseType} from "axios"
import {baseURL} from "../constants"

export interface Headers {
  [key: string]: string
}

export interface getRequestProps {
  body?: any
  url?: string
  method: HttpMethod
  headers?: Headers
  responseType?: ResponseType
}

export enum HttpMethod {
  POST = "POST",
  GET = "GET",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export enum HttpStatus {
  RefreshRequired = 422,
  RefreshExpired = 424,
  KycRequired = 426,
  BadRequest = 400,
  Created = 201,
  Ok = 200,
  Forbidden = 403,
  Unauthorized = 401,
  NotFound = 404,
  Timeout = 100,
}

export class HttpError extends Error {
  constructor(
    private statusCode: HttpStatus,
    private data?: {[key: string]: any} | any
  ) {
    super("Http Error occurred")
  }

  getStatusCode(): HttpStatus {
    return this.statusCode
  }

  getData(): {[key: string]: any} | undefined {
    return this.data
  }
}

export default class HttpService {
  constructor(
    private client: AxiosInstance = Axios.create({
      baseURL: baseURL,
    })
  ) {}

  async getRequest(getRequestProps: getRequestProps) {
    try {
      const response = await this.client.request({
        url: getRequestProps.url,
        data: getRequestProps.body,
        method: getRequestProps.method,
        headers: getRequestProps.headers,
        responseType: getRequestProps.responseType || "json",
      })

      if (getRequestProps.responseType) {
        return response
      }
      return response.data
    } catch (e) {
      const axiosError = e as AxiosError

      if (axiosError.response) {
        throw new HttpError(
          axiosError.response.status as HttpStatus,
          axiosError.response.data
        )
      } else {
        throw new HttpError(HttpStatus.Timeout, {
          error: {
            detail:
              "An error occurred while processing request. Check your internet connection",
          },
        })
      }
    }
  }
}
