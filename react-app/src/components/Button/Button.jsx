import classes from './Button.module.css'

export default function Button({
	children,
	onClick,
	isActive,
	className,
	...props
}) {
	const classNameRes = className
		? `${className} ${classes.button}`
		: `${classes.button}`

	return (
		<button {...props} onClick={onClick} className={classNameRes}>
			{children}
		</button>
	)
}
