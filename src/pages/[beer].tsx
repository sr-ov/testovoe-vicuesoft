import * as React from 'react'
import type {
	GetStaticPropsContext,
	GetStaticPropsResult,
	NextPage,
	GetStaticProps,
	GetStaticPaths,
} from 'next'
import { ParsedUrlQuery } from 'querystring'

import { getBeer, getBeers } from '../api'
import { IBeer } from '../types/IBeer'
import { BeerProduct } from '../components'

interface BeerProps {
	beer: IBeer
}

const Beer: NextPage<BeerProps> = ({ beer }) => {
	return (
		<div className="min-h-screen bg-yellow-300 text-[color:var(--c-sec)]">
			<main className="min-h-screen max-w-5xl mx-auto px-4 py-6">
				<BeerProduct beer={beer} />
			</main>
		</div>
	)
}

export default Beer

interface Params extends ParsedUrlQuery {
	beer: string
}

export const getStaticProps: GetStaticProps<BeerProps, Params> = async ({
	params,
}: GetStaticPropsContext<ParsedUrlQuery>): Promise<GetStaticPropsResult<BeerProps>> => {
	if (!params) {
		return { notFound: true }
	}

	try {
		const beer = await getBeer(params.beer as string)

		return {
			props: { beer },
		}
	} catch (error) {
		return { notFound: true }
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const beers = await getBeers()

		return {
			paths: beers.map(({ id }) => `/${id}`),
			fallback: true,
		}
	} catch (error) {
		return {
			paths: [],
			fallback: false,
		}
	}
}
