import {HttpMethod} from "./HttpService"
import QueryService from "./QueryService"

export default class TransactionsService {
  constructor(
    private queryService: QueryService,
  ) {}


  async getTransactions() {
    return this.queryService.getRequest(
      {
        url: `transactions`,
        method: HttpMethod.GET,
        headers: {
          Authorization: "",
        },
      },
      true
    )
  }


}