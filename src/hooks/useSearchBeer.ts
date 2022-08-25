import { Dispatch, SetStateAction, useState } from 'react'

import { getFoundBeer } from '../api'
import { IBeer } from '../types/IBeer'

export const useSearchBeer = (setBeers: Dispatch<SetStateAction<IBeer[]>>) => {
	const [nameBeer, setNameBeer] = useState('')

	const searchBeer = async () => {
		try {
			const beers = await getFoundBeer(nameBeer)
			setBeers(beers)
		} catch (error) {
			console.error(error)
		}
	}

	const onChangeSearchBeer = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNameBeer(e.currentTarget.value)
	}

	const onSearchBeer = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key !== 'Enter') return
		if (!nameBeer.trim()) return

		searchBeer()
	}

	return { onChangeSearchBeer, onSearchBeer, nameBeer }
}
