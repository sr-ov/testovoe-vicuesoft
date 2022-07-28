import * as React from 'react'
import Image from 'next/image'
import { MOCK_IMAGE } from '../../constants'
import { IBeer } from '../../types/IBeer'

interface IBeerProductProps {
	beer: IBeer
}

const BeerProduct: React.FunctionComponent<IBeerProductProps> = ({ beer }) => {
	return (
		<article className="grid grid-cols-1 md:grid-cols-[40%_1fr] gap-10">
			<div className="">
				<div className="rounded-xl max-h-[530px] max-w-[400px] md:max-h-full md:max-w-full overflow-hidden ring-4 ring-[color:var(--c-sec)] p-2">
					<Image
						src={beer?.image_url ?? MOCK_IMAGE}
						alt={beer?.description}
						height={400}
						width={300}
						layout="responsive"
						objectFit="contain"
					/>
				</div>
			</div>

			<div>
				<h1 className="font-bold text-4xl mb-10">{beer?.name}</h1>
				<div className="rounded ring-2 ring-[color:var(--c-sec)] p-2 mb-8">
					{beer?.description}
				</div>
				<div className="mb-2">
					<span className="font-bold">tagline</span>:{' '}
					<span className="text-lg">{beer?.tagline}</span>
				</div>
				<div className="mb-2">
					<span className="font-bold">abv</span>:{' '}
					<span className="text-lg">{beer?.abv}</span>
				</div>
				<div>
					<span className="font-bold">food pairing</span>:{' '}
					{beer?.food_pairing.map((el) => (
						<span className="text-lg" key={el}>
							{el},{' '}
						</span>
					))}
				</div>
			</div>
		</article>
	)
}

export default BeerProduct
