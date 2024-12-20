import { api } from '@/shared'
import { useMutation } from '@tanstack/react-query'

export const useDeleteTask = () =>
	useMutation({
		mutationFn: api.deleteTask,
	})
