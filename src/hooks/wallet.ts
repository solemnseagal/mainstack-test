import { useQuery } from "@tanstack/react-query"
import { transactionsService, walletService } from "../services"

export const useGetWallet = () => {
  return useQuery({
    queryKey: ["wallet"],
    queryFn: () => walletService.getWallet(),
  })
}

export const useGetUserDetails = () => {
  return useQuery({
    queryKey: ["useDetails"],
    queryFn: () => walletService.getUserDetails(),
  })
}