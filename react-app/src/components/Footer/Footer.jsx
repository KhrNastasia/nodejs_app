import classes from './Footer.module.css'

export default function Footer() {
	const year = new Date().getFullYear()
	return <div className={classes.footer}>Footer {year}</div>
}
