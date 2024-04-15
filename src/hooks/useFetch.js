import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState([]);

    const findCharacters = async () => {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Error al obtener datos de los personajes');
            }
            const fullData = await response.json();

            setData(fullData.results);
        } catch (error) {
            console.error(error);
        }
    }

    //useEffect(() => {


    return { data, findCharacters };
}
