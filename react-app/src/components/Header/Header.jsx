import classes from './Header.module.css'

export default function Header() {
	return (
		<div className={classes.header}>
			<div className={classes.logo}>logo</div>
			<ul className={classes.ul}>
				<li className={classes.li}>First element</li>
				<li className={classes.li}>Second element</li>
				<li className={classes.li}>Third element</li>
			</ul>
			<div className={classes.log}>login</div>
		</div>
	)
}
