import { useQuery } from "@tanstack/react-query"
import { transactionsService } from "../services"

export const useGetTransactions = () => {
  return useQuery({
    queryKey: ["transactions"],
    queryFn: () => transactionsService.getTransactions(),
  })
}