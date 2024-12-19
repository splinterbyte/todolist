import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import trash from '../../assets/trash.svg'
import { Task, TTask } from '../../entities/task'
import { CreateTask } from '../../features/create-task'
import style from './Border.module.scss'

type Props = {
	borderId: number
	tasks: Omit<TTask[], 'borderId'>
}

const deleteBorder = async (id: number): Promise<void> => {
	await axios.delete(`http://localhost:8000/borders/${id}`)
}

export const Border = ({ borderId, tasks }: Props) => {
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationFn: deleteBorder,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['borders'] })
		},
		onError: error => {
			console.error('Error deleting border:', error)
		},
	})

	const handleDelete = () => {
		mutation.mutate(borderId)
	}

	return (
		<div className={style.borderMain}>
			<div className={style.border}>
				{tasks?.map(task => (
					<Task key={task.id} task={{ ...task, borderId }} />
				))}
				{tasks.length < 4 && <CreateTask borderId={borderId} />}
			</div>
			<button className={style.deleteButton} onClick={handleDelete}>
				<img src={trash} alt='Delete Border' />
			</button>
		</div>
	)
}
