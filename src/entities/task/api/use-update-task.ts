import { api } from '@/shared'
import { useMutation } from '@tanstack/react-query'

export const useUpdateTask = () =>
	useMutation({
		mutationFn: api.updateTask,
	})
