import { DndContext } from '@dnd-kit/core'
import { SortableContext, arrayMove } from '@dnd-kit/sortable'
import { React } from 'react'
import ListForm from '../ListForm/ListForm'
import SortableItem from '../SortableItem/SortableItem'
import classes from './List.module.css'

function List(props) {
	const { arr, state, setArr, onRemove, setState, onEdit } = props

	const reorderList = e => {
		if (!e.over) return

		if (e.active.id !== e.over.id) {
			setArr(arr => {
				const oldIdx = arr.indexOf(e.active.id.toString())
				const newIdx = arr.indexOf(e.over.id.toString())
				return arrayMove(arr, oldIdx, newIdx)
			})
		}
	}

	return (
		<div className={classes.div}>
			<ListForm
				num={props.num}
				onChange={props.onChange}
				onSubmit={props.onSubmit}
			/>
			<DndContext onDragEnd={reorderList}>
				<SortableContext items={arr}>
					<ul>
						{arr.map((item, key) => {
							return (
								<SortableItem
									id={key}
									item={item}
									key={key}
									state={state}
									setState={setState}
									onRemove={onRemove}
									onEdit={onEdit}
								>
									{item}
								</SortableItem>
							)
						})}
					</ul>
				</SortableContext>
			</DndContext>
		</div>
	)
}

export default List
