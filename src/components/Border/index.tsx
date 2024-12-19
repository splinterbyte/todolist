import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import trash from '../../assets/trash.svg'
import { AddTask } from '../AddTask'
import { Task } from '../Task'
import style from './Border.module.scss'

interface Task {
	id: number
	text: string
}

interface Props {
	borderId: number
	tasks: Task[]
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
					<Task
						key={task.id}
						id={task.id}
						borderId={borderId}
						text={task.text}
					/>
				))}
				{tasks.length < 4 && <AddTask borderId={borderId} />}
			</div>
			<button className={style.deleteButton} onClick={handleDelete}>
				<img src={trash} alt='Delete Border' />
			</button>
		</div>
	)
}
