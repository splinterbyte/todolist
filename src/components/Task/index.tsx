import { useRef } from 'react'
import trash from '../../assets/trash.svg'
import { useTaskStore } from '../../store/store'
import style from './Task.module.scss'

interface Props {
	id: number
}

export const Task = ({ id }: Props) => {
	const { deleteTask, updateTask } = useTaskStore()

	const textareaRef = useRef<HTMLTextAreaElement>(null)

	return (
		<div className={style.area}>
			<textarea
				maxLength={57}
				onChange={() => updateTask(id, textareaRef.current?.value)}
				ref={textareaRef}
			></textarea>
			<div className={style.widgets}>
				<input type='checkbox' />
				<img src={trash} alt='' onClick={() => deleteTask(id)} />
			</div>
		</div>
	)
}
