import classes from './Input.module.css'

function Input({ value, onChange, onClick, className, ...props }) {
	const classNameRes = className
		? `${className} ${classes.button}`
		: `${classes.button}`

	return (
		<input
			className={classNameRes}
			type={props.type}
			value={value}
			onChange={onChange}
			onClick={onClick}
		/>
	)
}

export default Input
