import React, {useState} from 'react';
import {Button} from "./Button";

type MoneyType = {
    banknote: string
    nominal: number
    number: string
}

type BankomatPropsType = {
    money: Array<MoneyType>
}

type SelectorType = 'All' | 'Rubls' | 'Dollars'

export const Bankomat = (props: BankomatPropsType) => {
    const [selector, setSelector] = useState('All')
    const onClickHandler = (select: SelectorType) => {
        return setSelector(select)
    }
    let currentCash = props.money
    if (selector === 'Rubls') {
            currentCash = props.money.filter((filteredMoney) => filteredMoney.banknote==='Rubls')
    }
    if (selector === 'Dollars') {
        currentCash = props.money.filter((filteredMoney) => filteredMoney.banknote==='Dollars')
    }

    return (
        <>
            <ul>
                {currentCash.map((el, index) => {
                        return (
                            <li key={index}>
                                <span>{el.banknote}  </span>
                                <span>{el.nominal}  </span>
                                <span>{el.number}  </span>
                            </li>
                        )
                    }
                )
                }
            </ul>
            <div>
                <Button title={'All'} callBack={()=>onClickHandler('All')}/>
                <Button title={'Rubls'} callBack={()=>onClickHandler('Rubls')}/>
                <Button title={'Dollars'} callBack={()=>onClickHandler('Dollars')}/>
            </div>
        </>
    );
};