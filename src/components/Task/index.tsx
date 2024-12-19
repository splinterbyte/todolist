import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { debounce } from 'lodash'
import React, { useRef } from 'react'
import style from './Task.module.scss'

interface Props {
	id: number
	borderId: number
	text: string
}

const updateTask = async ({
	id,
	borderId,
	text,
}: {
	id: number
	borderId: number
	text: string
}): Promise<void> => {
	await axios.patch(`http://localhost:8000/borders/${borderId}/tasks/${id}`, {
		text,
	})
}

const deleteTask = async ({
	id,
	borderId,
}: {
	id: number
	borderId: number
}): Promise<void> => {
	await axios.delete(`http://localhost:8000/borders/${borderId}/tasks/${id}`)
}

export const Task = ({ id, borderId, text }: Props) => {
	const textareaRef = useRef<HTMLTextAreaElement>(null)
	const queryClient = useQueryClient()

	const mutation = useMutation({
		mutationFn: deleteTask,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['borders'] })
		},
		onError: error => {
			console.error('Error deleting task:', error)
		},
	})

	const mutationDelete = useMutation({
		mutationFn: updateTask,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['borders'] })
		},
		onError: error => {
			console.error('Error deleting task:', error)
		},
	})

	const handleDelete = () => {
		mutation.mutate({ id, borderId })
	}

	const handleUpdate = (text: string) => {
		mutationDelete.mutate({ id, borderId, text })
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debouncedHandleChange = React.useCallback(
		debounce(handleUpdate, 3000),
		[]
	)

	const handleChangeArea = () => {
		const text = textareaRef.current?.value || ''
		debouncedHandleChange(text)
	}

	const [checked, setChecked] = React.useState(false)

	return (
		<div className={style.area}>
			<textarea maxLength={57} ref={textareaRef} onChange={handleChangeArea}>
				{text}
			</textarea>
			<div className={style.widgets}>
				<input
					type='checkbox'
					checked={checked}
					onChange={() => setChecked(!checked)}
				/>
				<button onClick={handleDelete}>❌</button>
			</div>
		</div>
	)
}
