import { ListComponent } from "./components/List.component"

function App() {

  return (
    <>
      <article className='max-h-screen grid grid-cols-1'>

        <h1 className="font-bold text-center bg-slate-500 text-white py-2 h-fit">React-Native-TP-4</h1>

        <ListComponent />
      </article>
    </>
  )
}

export default App
