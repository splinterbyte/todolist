import { api } from '@/shared'
import { useMutation } from '@tanstack/react-query'

export const useCreateBorder = () =>
	useMutation({
		mutationFn: api.createBorder,
	})
