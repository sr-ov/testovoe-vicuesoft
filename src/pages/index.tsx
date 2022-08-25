import { useCallback, useState } from 'react'
import { ParsedUrlQuery } from 'querystring'
import type {
	GetStaticPropsContext,
	GetStaticPropsResult,
	NextPage,
	GetStaticProps,
} from 'next'

import { Cards, Input, Pagination } from '../components'
import type { IBeer } from '../types/IBeer'
import { getBeers, getPaginationBeer } from '../api'
import { useSearchBeer } from '../hooks/useSearchBeer'

interface HomeProps {
	beers: IBeer[]
}

const Home: NextPage<HomeProps> = ({ beers: beersProp }) => {
	const [beers, setBeers] = useState<IBeer[]>(beersProp)

	const onChangePage = useCallback(async (currentPage: number) => {
		try {
			const beers = await getPaginationBeer(String(currentPage))
			setBeers(beers)
		} catch (error) {
			console.error(error)
		}
	}, [])

	const { onSearchBeer, onChangeSearchBeer, nameBeer } = useSearchBeer(setBeers)

	return (
		<div className="min-h-screen bg-pink-400 px-4 py-6 flex flex-col">
			<main className="min-h-full max-w-5xl mx-auto flex-1">
				<Input
					className="mb-16"
					placeholder="Enter the name of the beer"
					onChange={onChangeSearchBeer}
					onKeyUp={onSearchBeer}
					value={nameBeer}
				/>
				<Cards beers={beers} />
			</main>
			<footer className="pt-8 pb-6 ">
				<div className="max-w-5xl mx-auto">
					{beers.length > 0 && <Pagination onChangePage={onChangePage} />}
				</div>
			</footer>
		</div>
	)
}

export default Home

export const getStaticProps: GetStaticProps<HomeProps> = async ({
	params,
}: GetStaticPropsContext<ParsedUrlQuery>): Promise<GetStaticPropsResult<HomeProps>> => {
	try {
		const beers = await getBeers()

		return {
			props: { beers },
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}
