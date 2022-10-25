import React from 'react';
import {Header} from "./site/Header/Header";
import {Body} from "./site/Body/Body";
import {Footer} from "./site/Footer/Footer";
import {NewComponent} from "./NewComponent";
import {Button} from "./components/Button";
import {Bankomat} from "./components/Bankomat";
import {Microtask06} from "./Microtasks 06/Micotasks 06";

function App() {
    // const students = [
    //     {id: 1, name: "James", age: 8},
    //     {id: 2, name: "Robert", age: 18},
    //     {id: 3, name: "John", age: 28},
    //     {id: 4, name: "Michael", age: 38},
    //     {id: 5, name: "William", age: 48},
    //     {id: 6, name: "David", age: 58},
    //     {id: 7, name: "Richard", age: 68},
    //     {id: 8, name: "Joseph", age: 78},
    //     {id: 9, name: "Thomas", age: 88},
    //     {id: 10, name: "Charles", age: 98},
    //     {id: 11, name: "Christopher", age: 100},
    // ]
    // const onClickHandler = (name: string) => {
    //     return (
    //         console.log(name)
    //     )
    // }
    //
    // const money = [
    //     {banknote: 'Dollars', nominal: 100, number: ' a1234567890'},
    //     {banknote: 'Dollars', nominal: 50, number: ' z1234567890'},
    //     {banknote: 'Rubls', nominal: 100, number: ' w1234567890'},
    //     {banknote: 'Dollars', nominal: 100, number: ' e1234567890'},
    //     {banknote: 'Dollars', nominal: 50, number: ' c1234567890'},
    //     {banknote: 'Rubls', nominal: 100, number: ' r1234567890'},
    //     {banknote: 'Dollars', nominal: 50, number: ' x1234567890'},
    //     {banknote: 'Rubls', nominal: 50, number: ' v1234567890'},
    // ]


    return (
        // <>
        //     <Header titleForHeader={'Header'}/>
        //     <Body titleForBody={'Body'}/>
        //     <Footer titleForFooter={'Footer'}/>
        //     <NewComponent students={students}/>
        //     <Button
        //         title={'YouTubeSubscriber'}
        //         callBack={() => onClickHandler('Boris')}/>
        //     <Bankomat money={money}/>
        // </>
        <Microtask06/>
    );
}

export default App;