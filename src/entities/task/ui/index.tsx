import { useRef } from 'react'
import { useDeleteTask } from '../api/use-delete-task'
import { useUpdateTask } from '../api/use-update-task'
import { TTask } from '../model/task'
import style from './Task.module.scss'

type Props = {
	task: TTask
}

export const Task = ({ task }: Props) => {
	const { id, borderId, text } = task
	const textareaRef = useRef<HTMLTextAreaElement>(null)

	const { mutateAsync: deleteTask } = useDeleteTask()
	const { mutateAsync: updateTask } = useUpdateTask()

	const handleClickDelete = async () => {
		await deleteTask({ id, borderId })
	}

	const handleChange = async () => {
		const text = textareaRef.current?.value || ''
		const changeTask: TTask = { id, borderId, text }
		await updateTask(changeTask)
	}

	return (
		<div className={style.area}>
			<textarea maxLength={57} ref={textareaRef} onChange={handleChange}>
				{text}
			</textarea>
			<div className={style.widgets}>
				<input type='checkbox' />
				<button onClick={handleClickDelete}>❌</button>
			</div>
		</div>
	)
}
