import { getFromStorage, removeFromStorage, saveToStorage } from "../utils/helpers"


export interface AuthDataProps {
  userId?: string
  accessToken?: string
  refreshToken?: string
  expireIn?: string
}

export default class StorageService {
  saveAuthData(authData: AuthDataProps) {
    this.saveItemIfProvided("accessToken", authData.accessToken)
    this.saveItemIfProvided("refreshToken", authData.refreshToken)
  }

  private saveItemIfProvided(key: string, value?: string) {
    if (value) {
      saveToStorage(key, value)
    }
  }

  clearAuthData() {
    removeFromStorage("accessToken")
  }

  getAuthData(): AuthDataProps {
    return {
      accessToken: getFromStorage("accessToken"),
      refreshToken: getFromStorage("refreshToken"),
    }
  }

  get(key: string): any {
    return getFromStorage(key)
  }

  set(key: string, value: string) {
    this.saveItemIfProvided(key, value)
  }
}
