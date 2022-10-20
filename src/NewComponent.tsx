import React from 'react';

type StudentsListType = {
    id: number
    name: string
    age: number
}

type NewComponentPropsType = {
    students: Array<StudentsListType>
}

export const NewComponent = (props: NewComponentPropsType) => {
    const topCars = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]
    return (
        <>
            <ul>
                {props.students.map((el) => {
                        return (
                            <li key={el.id}>
                                <span>{el.name},</span>
                                <span> age: {el.age}</span>
                            </li>
                        )
                    }
                )
                }
            </ul>
            <table>
                {topCars.map((car, index) => {
                    return (
                        <tr key={index}>
                            <th>car: {car.manufacturer}</th>
                            <th>model: {car.model}</th>
                        </tr>
                    )
                })}
            </table>
        </>
    );
};