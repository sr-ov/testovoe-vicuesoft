import * as React from 'react'
import { InputProps } from 'react-html-props'
import cn from 'classnames'

interface IInputProps extends InputProps {}

const Input: React.FunctionComponent<IInputProps> = ({
	placeholder,
	value,
	className,
	...props
}) => {
	return (
		<>
			<input
				className={cn(
					'block w-full p-4 text-lg rounded-full transition focus:ring-8 focus:outline-none focus:ring-white bg-[color:var(--c-sec)]',
					className
				)}
				placeholder={placeholder}
				value={value}
				type="text"
				{...props}
			/>
		</>
	)
}

export default Input
