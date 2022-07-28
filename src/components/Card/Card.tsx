import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MAX_CHARS, MOCK_IMAGE } from '../../constants'

interface ICardProps {
	imgSrc: string | null
	name: string
	desc: string
	id: number
}

const Card: React.FunctionComponent<ICardProps> = ({ imgSrc, name, desc, id }) => {
	return (
		<Link href={String(id)}>
			<a className="block h-full rounded-[100%_100%_15%_15%] overflow-hidden p-6 ring-2 ring-white hover:ring-8 transition">
				<div className="mb-4 p-2 rounded rounded-t-full rounded-b-[400px] overflow-hidden ring-2 ring-white">
					<Image
						className="w-full"
						src={imgSrc ?? MOCK_IMAGE}
						alt={desc}
						height="330"
						width="180"
						layout="responsive"
						objectFit="contain"
					/>
				</div>

				<div>
					<div className="mb-4 text-lg rounded ring-2 ring-white p-2 font-bold">
						{name}
					</div>
					<div className="text-sm">
						{desc.length > MAX_CHARS ? desc.slice(0, MAX_CHARS) + '...' : desc}
					</div>
				</div>
			</a>
		</Link>
	)
}

export default Card
