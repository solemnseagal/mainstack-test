import { baseURL } from "../constants"
import HttpService, {
  getRequestProps,
  Headers,
  HttpError,
  HttpMethod,
  HttpStatus,
} from "./HttpService"
import StorageService from "./StorageService"
import Axios, { AxiosInstance } from "axios"




export default class QueryService extends HttpService {
  constructor(
    private storageService: StorageService,
    client: AxiosInstance = Axios.create({
      baseURL: baseURL,
    })
  ) {
    super(client)
  }

  protected isRefreshing: boolean = false

  private addAuthorizationHeader(headers: Headers): Headers {
    
    headers = {
      // Authorization: `Bearer ${token}`
    }
    return headers
  }

  private async refreshAuthorization() {
    const authData = this.storageService.getAuthData()
    const refreshTokenResponse = await this.getRequest({
      url: `auths/refresh-token`,
      method: HttpMethod.POST,
      body: {
        refreshToken: authData.refreshToken,
        accessToken: authData.accessToken,
      },
    })
    this.storageService.saveAuthData({
      user_id: authData.userId,
      ...refreshTokenResponse?.data,
    })
  }

  async getRequest(
    getRequestProps: getRequestProps,
    authenticate = true
  ): Promise<any> {
    if (authenticate) {
      getRequestProps.headers = this.addAuthorizationHeader(
        getRequestProps.headers || {}
      )
    }

    try {
      return await super.getRequest(getRequestProps)
    } catch (e) {
      const httpError = e as HttpError
      switch (httpError.getStatusCode()) {
        case HttpStatus.RefreshRequired:
          if (authenticate) {
            if (this.isRefreshing) {
              return
            }
            this.isRefreshing = true
            await this.refreshAuthorization()
            await this.getRequest(getRequestProps, authenticate)
            // return this.routerService.reload();
          }
          break
        case HttpStatus.RefreshExpired:
          this.storageService.clearAuthData()
          // this.routerService.navigate("/signin");
          throw httpError
        case HttpStatus.Forbidden:
          this.storageService.clearAuthData()
          // this.routerService.navigate("/signin");
          throw httpError
        default:
          throw httpError
      }
    }
  }
}
