import { ProductResponse } from 'types/api'

export async function getProducts({
	query,
	limit
}: {
	query: string
	limit?: number
}): Promise<ProductResponse> {
	try {
		const limitQuery = limit ? '&limit=' + limit : ''

		const response = await fetch(
			import.meta.env.VITE_BASE_API_URL +
				'/products/search?q=' +
				query +
				limitQuery
		)
		return (await response.json()) as Promise<ProductResponse>
	} catch (error) {
		throw new Error('Failed to fetch products')
	}
}
