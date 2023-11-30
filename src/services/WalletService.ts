import {HttpMethod} from "./HttpService"
import QueryService from "./QueryService"

export default class WalletService {
  constructor(
    private queryService: QueryService,
  ) {}


  async getWallet() {
    return this.queryService.getRequest(
      {
        url: `wallet`,
        method: HttpMethod.GET,
        headers: {
          Authorization: "",
        },
      },
      true
    )
  }

  async getUserDetails() {
    return this.queryService.getRequest(
      {
        url: `user`,
        method: HttpMethod.GET,
        headers: {
          Authorization: "",
        },
      },
      true
    )
  }


}