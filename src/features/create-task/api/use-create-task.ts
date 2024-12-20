import { api } from '@/shared'
import { useMutation } from '@tanstack/react-query'

export const useCreateTask = () =>
	useMutation({
		mutationFn: api.createTask,
	})
