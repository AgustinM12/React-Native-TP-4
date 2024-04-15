import { useState } from "react";

export const ListComponent = () => {

    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const response = await fetch("https://swapi.dev/api/people");

            if (!response.ok) {
                throw new Error('Error al obtener datos de los personajes');
            }
            const fullData = await response.json();

            setData(fullData.results);
        } catch (error) {
            console.error(error);
        }
    }

    const deleteItem = (e) => {
        e.target.parentElement.parentElement.remove();
    }

    return (
        <>
            <section className="bg-slate-500 border-t border-b border-white p-6 text-center flex justify-center">
                <button className="p-2 bg-blue-500 rounded text-white hover:bg-blue-700 flex items-center space-x-2 tensition-colors" onClick={() => fetchData()}> Buscar Personajes de Star Wars
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </button>
            </section>

            <section className="bg-slate-500">
                <ul>
                    {data.map((item) => (
                        <li key={item.name}>
                            <div className="bg-slate-600 rounded border-2 border-white flex justify-between">
                                <div className="p-5">
                                    <h2 className="font-bold"><span className="underline">Nombre:</span>  {item.name}</h2>
                                    <p className="font-bold"><span className="underline">Altura:</span> {item.height}</p>
                                    <p className="font-bold"><span className="underline">Peso:</span> Peso: {item.mass}</p>
                                    <p className="font-bold"><span className="underline">Color de cabello:</span> {item.hair_color}</p>
                                    <p className="font-bold"><span className="underline">Color de piel:</span> {item.skin_color}</p>
                                    <p className="font-bold"><span className="underline">Color de ojos:</span> {item.eye_color}</p>
                                    <p className="font-bold"><span className="underline">Genero:</span> {item.gender}</p>
                                </div>

                                <div className="pt-20 pr-5">
                                    <button onClick={deleteItem} className="p-2 rounded bg-red-500 text-white hover:bg-red-700 transition-colors">Eliminar</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}
