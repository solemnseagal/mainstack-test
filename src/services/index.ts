import HttpService from "./HttpService"
import QueryService from "./QueryService"
import StorageService from "./StorageService"
import TransactionsService from "./TransactionsService"
import WalletService from "./WalletService"

const httpService = new HttpService()

export const storageService = new StorageService()

const queryService = new QueryService(storageService)

export const transactionsService = new TransactionsService(queryService)
export const walletService = new WalletService(queryService)