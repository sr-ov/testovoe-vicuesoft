import * as React from 'react'
import { Card } from '..'
import { IBeer } from '../../types/IBeer'

interface ICardsProps {
	beers: IBeer[]
}

const Cards: React.FunctionComponent<ICardsProps> = ({ beers }) => {
	return (
		<ul className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-10">
			{beers.length > 0 ? (
				beers.map(({ description, id, image_url, name }) => {
					return (
						<li key={id}>
							<Card imgSrc={image_url} name={name} desc={description} id={id} />
						</li>
					)
				})
			) : (
				<li className="text-9xl uppercase">NOTHING FOUND</li>
			)}
		</ul>
	)
}

export default Cards
