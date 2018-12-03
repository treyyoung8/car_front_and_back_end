import React from 'react';

const Table = (props) => {
    return (
        <div>
            <table>
                <tr>
                <th>Make</th>
                <th>Model</th>
                <th>Nationality</th>
                <th>Horsepower</th>
                <th>Torque</th>
                <th>Top Speed</th>
                <th>Years Made</th>
                </tr>
                {props.cars.map(car =>
                    <tr>
                        <th>{car.make}</th>
                        <th>{car.model}</th>
                        <th>{car.nationality}</th>
                        <th>{car.horsepower} HP</th>
                        <th>{car.torque} ft/lb</th>
                        <th>{car.top_speed} MPH</th>
                        <th>{car.years_made}</th>
                    </tr>)}
            </table>
        </div>
    )
}

export default Table