import React, { ReactElement, useCallback, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import debounce from 'lodash.debounce'
import { SearchBar } from 'components/SearchBar/SearchBar'
import { getProducts } from 'api/product'

export default function SearchPage(): ReactElement {
	const [query, setQuery] = useState('')
	const { data, isFetching } = useQuery({
		queryKey: ['products', query],
		queryFn: () => getProducts({ query, limit: 4 }),
		enabled: !!query
	})

	const handleSearch = useCallback((newQuery: string) => {
		const delay = newQuery !== '' ? 300 : 0

		if (delay > 0) {
			debounce(() => setQuery(newQuery), delay)()
		} else {
			setQuery(newQuery)
		}
	}, [])

	return (
		<section className='h-screen bg-stone-50 px-4 py-8'>
			<div className='mx-auto flex w-3/5 flex-col items-center gap-2 bg-stone-300 p-6 '>
				<h1>Task One</h1>
				<SearchBar
					results={data?.products || []}
					isLoading={isFetching}
					onSearch={handleSearch}
				/>
			</div>
		</section>
	)
}
