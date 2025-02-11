// import Modal from 'react-modal'
import { useState } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import classes from './ModelForm.module.css'

export default function ModelForm(props) {
	const { element, id, arr, state, setState, onSubmit, onEdit, setArr } = props
	const [value, setValue] = useState(element)

	function handleChange(event) {
		setValue(event.target.value)
	}

	const switchModelForm = () => {
		setState(!state)
		onEdit(element)
		setValue('')
	}

	function onUpdate(id, value) {
		setArr(
			arr.map((el, key) => {
				if (key === id) {
					return value
				} else return el
			})
		)
		console.log(arr)
		console.log(id)
		console.log(value)
		setState(!state)
	}

	const modalContent = (
		<div className={classes.back}>
			<div className={classes.model}>
				<div className={classes.head}>
					<h2>Отредактируйте элемент</h2>
					<p className={classes.close} onClick={switchModelForm}>
						x
					</p>
				</div>
				<Input
					className={classes.input}
					value={value || ''}
					onChange={handleChange}
					onSubmit={onSubmit}
				/>
				<Button
					id={id}
					className={classes.button}
					onClick={e => onUpdate(id, value)}
				>
					Редактировать
				</Button>
			</div>
		</div>
	)

	return <div>{modalContent}</div>
}
