import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { SearchBar } from '../SearchBar'
import { SearchBarProps } from '../props'

const mockOnSearch = vi.fn()

const defaultProps: SearchBarProps = {
	results: [],
	isLoading: false,
	onSearch: mockOnSearch
}

describe('SearchBar Component', () => {
	beforeEach(() => {
		vi.clearAllMocks()
	})

	test('renders SearchBar component', () => {
		render(<SearchBar {...defaultProps} />)
		expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
	})

	test('displays loading indicator when isLoading is true', () => {
		const { container } = render(
			<SearchBar {...defaultProps} isLoading={true} />
		)
		expect(container.getElementsByClassName('loading-indicator')).toHaveLength(
			1
		)
	})

	test('clear button clears input and results', () => {
		render(
			<SearchBar
				{...defaultProps}
				results={[
					{
						id: 1,
						title: 'Test',
						description: 'Test',
						images: ['test.jpg'],
						price: 10,
						category: '',
						discountPercentage: 0,
						rating: 0,
						stock: 0,
						tags: [],
						sku: '',
						weight: 0,
						dimensions: undefined,
						warrantyInformation: '',
						shippingInformation: '',
						availabilityStatus: '',
						reviews: [],
						returnPolicy: '',
						minimumOrderQuantity: 0,
						meta: undefined,
						thumbnail: ''
					}
				]}
			/>
		)
		const clearButton = screen.getByText('✕')
		fireEvent.click(clearButton)
		expect(mockOnSearch).toHaveBeenCalledWith('')
	})

	test('calls onSearch with correct query', () => {
		render(<SearchBar {...defaultProps} />)
		const input = screen.getByPlaceholderText('Search...')
		fireEvent.change(input, { target: { value: 'test' } })
		expect(mockOnSearch).toHaveBeenCalledWith('test')
	})
})
