import { useCreateBorder } from '../api/use-create-border'

export const CreateBorder = () => {
	const { mutateAsync } = useCreateBorder()

	const handleCreateBorder = async () => {
		await mutateAsync()
	}
	return <button onClick={handleCreateBorder}>+</button>
}
