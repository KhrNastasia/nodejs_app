import Button from '../Button/Button'
import Input from '../Input/Input'
import Label from '../Label/Label'
import classes from './ListForm.module.css'

export default function ListForm(props) {
	return (
		<form className={classes.form} onSubmit={props.onSubmit}>
			<Label className={classes.label} htmlFor='num'>
				Введите число
			</Label>
			<Input
				className={classes.input}
				type='text'
				value={props.num}
				onChange={props.onChange}
			/>
			<Button className={classes.button}>Отправить</Button>
		</form>
	)
}
