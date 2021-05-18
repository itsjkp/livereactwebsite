import React, {useState} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const ListCom = (props)=>{
    const [line, setLine] = useState(false);
    const cutIt = () => {
        setLine(true);
    };
    return (
        <>
            <div className="todo_style">
                <span onClick={cutIt} onDoubleClick={props.funCall}>
                <DeleteIcon className="deleteIcon" id={props.id} />
                </span>
                <li style={{ textDecoration: line ? "line-through" : "none" }}>{props.currval}</li>
            </div>
        </>
    );
}

export default ListCom;