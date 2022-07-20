import { WiThunderstorm, WiCloudyWindy, WiSleet, WiRain, WiSnow, WiAlien, WiNightClear, WiCloud, WiMeteor } from 'weather-icons-react';
import {useEffect, useState} from "react";
export default function Weather({isToday, weather, min, max, dayNumber}) {
    let className = "p-4 text-center inline-block float-left"
    className += isToday ? ' border-2 bg-gray-100' : ''

    const getIcon = () => {
        console.log(weather.toString().substring(0,1))
        switch (parseInt(weather.toString().substring(0,1))){
            case 2:
                return <WiThunderstorm className="m-auto" size={56} color='#000' />
            case 3:
                return <WiSleet className="m-auto" size={56} color='#000' />
            case 4:
                return <WiRain className="m-auto" size={56} color='#000' />
            case 5:
                return <WiSnow className="m-auto" size={56} color='#000' />
            case 6:
                return <WiAlien className="m-auto" size={56} color='#000' />
            case 7:
                return <WiCloud className="m-auto" size={56} color='#000' />
            default:
                return <WiMeteor className="m-auto" size={56} color='#000' />
        }
    }

    const getDay = (dayNumber) =>{
        const weekdays = new Array(7);
        weekdays[0] = "Sunday";
        weekdays[1] = "Monday";
        weekdays[2] = "Tuesday";
        weekdays[3] = "Wednesday";
        weekdays[4] = "Thursday";
        weekdays[5] = "Friday";
        weekdays[6] = "Saturday";
        return  weekdays[dayNumber].substring(0,3);
    }


    return (
        <>
            <div className={className}>
                <p className="text-gray-400">{getDay(dayNumber)}</p>
                {getIcon(weather)}
                <div className="text-center ">
                    <span>{Math.round(min)}° </span>
                    <span className="text-gray-400">{Math.round(max)}°</span>
                </div>
            </div>
        </>
    )
}