import React from "react";
import jokesData from "./data"

export default function Cal () {
    const jokeElements = jokesData.map(joke => {
        return `<h3>${joke}</h3>`
    })
}

