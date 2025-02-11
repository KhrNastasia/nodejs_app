import Button from '../Button/Button'
import classes from './ListItem.module.css'

export default function ListItem(props) {
	// console.log(props)
	const { item, onRemove, id, onEdit, state, setState, setNodeRef, style } =
		props

	return (
		<div className={classes.div} ref={setNodeRef} style={style}>
			<li className={classes.li}>{item}</li>
			<div>
				<Button
					className={classes.button}
					id={id}
					onClick={e => {
						onEdit(id)
						setState(!state)
					}}
				>
					Редактировать
				</Button>
				<Button className={classes.button} id={id} onClick={e => onRemove(id)}>
					Удалить
				</Button>
			</div>
		</div>
	)
}
