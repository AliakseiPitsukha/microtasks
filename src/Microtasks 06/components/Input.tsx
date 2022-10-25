import React, {ChangeEvent} from 'react';

type InputPropsType = {
    text: string
    setText: (newText: string)=>void

}

export const Input = (props: InputPropsType) => {
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setText(e.currentTarget.value)
    }
    return (
        <div>
            <input value={props.text} onChange={onChangeInputHandler}/>
        </div>
    );
};