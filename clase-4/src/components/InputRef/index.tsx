import { useRef } from 'react'

const InputRef = () => {
  const refInput = useRef<HTMLInputElement>(null)
  const focusOnClick = () => {
    if (refInput.current instanceof HTMLInputElement) {
      refInput.current.focus()
    }
  }
  return (
    <div>
      <input type="text" ref={refInput} />
      <button onClick={focusOnClick}>Click me</button>
    </div>
  )
}

export default InputRef
