import React from 'react'
import cn from 'classnames'

const TodoListItem = ({ todo, onRemove, onToggle }) => {
    const {id, text, checked} = todo

    return (
        <div className="TodoListItem">
            <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
                {checked ? "O" : "X"} &nbsp;
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                지우기
            </div>
        </div>
    )

}

export default React.memo(TodoListItem)