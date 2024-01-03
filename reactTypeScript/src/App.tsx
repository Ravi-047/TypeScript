import { useRef, useState } from "react"
import Button from "./Button"
import Child from "./Child"

function App() {
  const [value, setValue] = useState<string>()
  const inputRef = useRef<HTMLInputElement>(null);
  const valueRef = useRef<number>();

  inputRef.current?.focus();
  valueRef.current = 10;

  return (
    <>
      <h1>Hi</h1>
      <Child name="Ravi">
        <p>This is a child</p>
      </Child>
      <Button outline>Hi Iam a button</Button>

      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
      <input type="text" ref={inputRef} />
    </>
  )
}

export default App
