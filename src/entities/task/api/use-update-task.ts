import { useMutation } from '@tanstack/react-query'
import { taskApi } from '..'

export const useUpdateTask = () =>
	useMutation({
		mutationFn: taskApi.updateTask,
	})
