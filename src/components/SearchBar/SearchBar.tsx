import React, { ChangeEvent, ReactElement } from 'react'
import { SearchBarProps } from './props'
import './SearchBar.css'

export function SearchBar({
	results,
	isLoading,
	onSearch
}: SearchBarProps): ReactElement {
	const inputRef = React.useRef<HTMLInputElement>(null)

	function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
		const newQuery = event.target.value
		onSearch(newQuery)
	}

	function handleClear() {
		onSearch('')

		if (inputRef.current) {
			inputRef.current.value = ''
		}
	}

	return (
		<div className='search-bar relative w-full'>
			<input
				ref={inputRef}
				type='text'
				name='search-input'
				onChange={handleInputChange}
				placeholder='Search...'
				className='w-full rounded border-0 p-2'
			/>

			<div className='absolute right-2 top-2 flex items-center gap-2'>
				{isLoading ? (
					<div className='loading-indicator text-blue-300'>
						<div className='lds-ring'>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
				) : (
					<button onClick={handleClear}>&#x2715;</button>
				)}
			</div>

			{results.length > 0 && (
				<ul className='absolute left-0 right-0 mt-2 grid grid-cols-2 rounded border bg-white shadow-lg'>
					{results.map((result, index) => (
						<li
							key={result.id}
							className={`flex items-center gap-4 p-4 hover:bg-blue-100 ${
								results.length % 2 !== 0 && index === results.length - 1
									? 'col-span-2'
									: ''
							}`}
						>
							<img
								src={result.images[0]}
								alt={result.title}
								className='h-16 w-16 object-cover'
							/>
							<div>
								<h2 className='text-md select-none font-bold'>
									{result.title}
								</h2>
								<span className='select-none text-sm'>${result.price}</span>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default SearchBar
