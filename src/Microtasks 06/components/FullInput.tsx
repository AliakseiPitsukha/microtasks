import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    addMessage: (text: string)=>void
}

export const FullInput = (props: FullInputPropsType) => {
    const [text, setText] = useState('')
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }
    const onClickButtonHandler = (text: string) => {
        props.addMessage(text)
        setText('')
        console.log(text)
    }
    return (
        <div>
            <input value={text} onChange={onChangeInputHandler}/>
            <button onClick={()=>{onClickButtonHandler(text)}}>+</button>
        </div>
    );
};