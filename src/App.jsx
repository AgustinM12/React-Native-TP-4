import { ListComponent } from "./components/List.component"

function App() {

  return (
    <>
      <article className='max-h-screen grid grid-cols-1'>

        <h1 className="font-bold text-center bg-slate-500 text-white py-2 h-fit">React-Native-TP-4</h1>

        {/* <section className="bg-slate-500 border-t border-b border-white p-6 text-center flex justify-center">
          <button className="p-2 bg-blue-500 rounded text-white hover:bg-blue-700 flex items-center space-x-2 tensition-colors"> Buscar Personajes de Star Wars
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </section> */}

        <ListComponent />
      </article>
    </>
  )
}

export default App
