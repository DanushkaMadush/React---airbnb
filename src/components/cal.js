import React from "react";

export default function Cal () {
    const colors = ["Red" , "Orange" , "Yellow" , "Green" , "Blue" , "Indigo" , "Violet"]

    const colorElements = colors.map(color => {
        return (
            <div>
                <h3>{color}</h3>
            </div>
        )
    })
    
    return (
        `<h3>${colors.map}</h3>`
    )
}