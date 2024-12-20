import { api } from '@/shared'
import { useMutation } from '@tanstack/react-query'

export const useDeleteBorder = () =>
	useMutation({
		mutationFn: api.deleteBorder,
	})
