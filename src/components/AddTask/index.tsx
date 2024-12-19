import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import style from './AddTask.module.scss'

interface Props {
	borderId: number
}

const addTask = async (border_id: number) => {
	await axios.post(
		`http://localhost:8000/borders/${border_id}/tasks/
`,
		{}
	)
}

export const AddTask = ({ borderId }: Props) => {
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationFn: addTask,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['borders'] })
		},
		onError: error => {
			console.error('Error update border:', error)
		},
	})

	const handleAdd = () => {
		mutation.mutate(borderId)
	}
	return (
		<button className={style.btn} onClick={handleAdd}>
			+
		</button>
	)
}
