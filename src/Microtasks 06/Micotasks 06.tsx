import React, {useState} from "react";
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

export function Microtask06() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'},
        ]
    )

    const addMessage = (newText: string) => {
        setMessage([...message, {message: newText}])
    }

    const [text, setText] = useState('')

    const addMessage2 = () => {
        setMessage([...message, {message: text}])
        setText('')
    }
    return (
        <div className="App">
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input
                text={text}
                setText={setText}
            />
            <Button
                name={"+"}
                callBack={addMessage2}
            />
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}