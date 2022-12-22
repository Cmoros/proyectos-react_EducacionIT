import Ejercicio1 from './Ejercicio1'
import Ejercicio2 from './Ejercicio2'
import Ejercicio3 from './Ejercicio3'
import FormularioConComponentes from './FormularioConComponentes'
import InputRef from './InputRef'
import InputTradicional from './InputTradicional'

const App = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      {/* <InputRef /> */}
      {/* <Ejercicio1 /> */}
      {/* <Ejercicio2 /> */}
      <Ejercicio3 />
      <FormularioConComponentes />
    </div>
  )
}

export default App
