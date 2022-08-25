import { useMemo, useState, memo } from 'react'
import { useUpdateEffect } from 'react-use'

interface IPaginationProps {
	onChangePage: (currentPage: number) => void
}

const START_PAGE = 1
const END_PAGE = 37

const Pagination: React.FunctionComponent<IPaginationProps> = ({ onChangePage }) => {
	const [currentPage, setCurrentPage] = useState(START_PAGE)
	const isFirstPage = useMemo(() => currentPage === START_PAGE, [currentPage])
	const isLastPage = useMemo(() => currentPage === END_PAGE, [currentPage])

	const onPrevPage = () => {
		setCurrentPage((prev) => (prev === START_PAGE ? prev : prev - 1))
	}

	const onNextPage = () => {
		setCurrentPage((prev) => (prev === END_PAGE ? prev : prev + 1))
	}

	useUpdateEffect(() => {
		onChangePage(currentPage)
	}, [currentPage, onChangePage])

	return (
		<div className="space-x-6">
			<button
				className="p-2 text-lg rounded-xl hover:ring-8 focus:ring-8 ring-white transition disabled:opacity-30"
				disabled={isFirstPage}
				onClick={onPrevPage}
			>
				{'< '}prev
			</button>
			<button
				className="p-2 text-lg rounded-xl hover:ring-8 focus:ring-8 ring-white transition disabled:opacity-30"
				disabled={isLastPage}
				onClick={onNextPage}
			>
				next{' >'}
			</button>
		</div>
	)
}

export default memo(Pagination)
