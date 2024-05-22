'use client'

import { useState, useEffect, use } from "react"
import { getCurrentDirection } from "../lib/handleMoveMap"
import classNames  from 'classnames';

const Map = () => {
    const [currentLocation, setCurrentLocation] = useState("kitchen")
    const [directions, setDirections] = useState([])

    useEffect(() => {
        const fetchDirections = async () => {
            try {
                const directionsArray = await getCurrentDirection(currentLocation);
                setDirections(directionsArray);
            } catch (error) {
                console.error('Failed to fetch directions:', error);
            }
        };

        fetchDirections();
    },[currentLocation])
    
    

    const handleMove = (index: number) => {
        if(!directions[index]) return
        
        setCurrentLocation(directions[index])
        
    }

    const buttonStyles = (index: number) => {
        return classNames(
            'w-24 md:w-40 aspect-video transition-opacity duration-500 ease-in-out',
            {
                'opacity-0': !directions[index],
                'border border-neutral-200 opacity-100': directions[index],
            }
        );
    } 

    
    return(
        <section className="grid grid-cols-3 grid-rows-3 md:text-2xl text-base">
            <button onClick={() => handleMove(0)} className={classNames("col-start-2 row-start-1", buttonStyles(0))}>{directions[0]}</button>
            <button onClick={() => handleMove(1)} className={classNames("col-start-3 row-start-2", buttonStyles(1))}>{directions[1]}</button>
            <button onClick={() => handleMove(2)} className={classNames("col-start-2 row-start-3", buttonStyles(2))}>{directions[2]}</button>
            <button onClick={() => handleMove(3)} className={classNames("col-start-1 row-start-2", buttonStyles(3))}>{directions[3]}</button>
            <div className="col-start-2 row-start-2 flex items-center justify-center w-24 md:w-40 aspect-video border border-neutral-200">
                <p>{currentLocation}</p> 
            </div>
    </section>
    )
}

export { Map }