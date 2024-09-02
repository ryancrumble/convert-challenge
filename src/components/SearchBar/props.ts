import { Product } from 'types/api'

export interface SearchBarProps {
	results: Product[]
	onSearch: (query: string) => void
	isLoading?: boolean
}
