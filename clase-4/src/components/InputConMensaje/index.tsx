const InputConMensaje = ({setValor}: {setValor: (name: string, value: string) => void}) => {
  return (
    <div>
    <label htmlFor="">
      <input type="text" name="name" onChange={(e) => setValor(e.target.name, e.target.value)}/>
    </label>
    <label htmlFor="">
      <input type="text" name="password" onChange={(e) => setValor(e.target.name, e.target.value)}/>
    </label>
    </div>
  )
}

export default InputConMensaje;