import { createRoot } from 'react-dom/client'
import './global.css'
import { QueryProvider } from './providers'
import { AppRouter } from './router'

createRoot(document.getElementById('root')!).render(
	<QueryProvider>
		<AppRouter />
	</QueryProvider>
)
