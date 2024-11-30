import { create } from 'zustand'

interface Border {
	id_border: number
}

interface IBorderStore {
	borders: Border[]
	addBorder: () => void
	deleteBorder: (id: number) => void
}
export const useBorderStore = create<IBorderStore>(set => ({
	borders: [],
	addBorder: () => {
		const newBorder: Border = { id_border: Date.now() }
		set(state => ({ borders: [...state.borders, newBorder] }))
	},

	deleteBorder: (id_border: number) => {
		set(state => ({
			borders: state.borders.filter(border => border.id_border !== id_border),
		}))
	},
}))
