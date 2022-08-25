import axios from 'axios'

import { API_URL, PER_PAGE } from '../constants'
import { IBeer } from '../types/IBeer'

const api = axios.create({
	baseURL: API_URL,
})

export const getBeers = async () => {
	const { data } = await api.get<IBeer[]>('beers', { params: { per_page: PER_PAGE } })

	return data
}

export const getBeer = async (beerId: string) => {
	const { data } = await api.get<IBeer[]>('beers/' + beerId)

	return data[0]
}

export const getFoundBeer = async (beerName: string) => {
	const { data } = await api.get<IBeer[]>('beers/', {
		params: { beer_name: beerName.toLowerCase().replace(' ', '_'), per_page: PER_PAGE },
	})

	return data
}

export const getPaginationBeer = async (pageNumber: string) => {
	const { data } = await api.get<IBeer[]>('beers', {
		params: { per_page: PER_PAGE, page: pageNumber },
	})

	return data
}
