import { ChangeEvent, useCallback, useState } from "react"

export default function Home() {

  const [ input, setInput ] = useState<string>("")
  const [ output, setOutput ] = useState<string>("")
  const handleInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value)
    }, []
  )

  const handleOnClick = async () => {
    setOutput("Thinking...")

    const response = await fetch("/api/hello", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({text: input})
    })

    const data = await response.json()
    setInput("")
    setOutput(data.result.choices[0].message.content)
  }

  return (
    <div>
      <h1>Ask a question!</h1>
      <input value={input} onChange={handleInput}></input>
      <button onClick={handleOnClick}>Submit</button>
      <h2>Response: {output}</h2>
    </div>
  )
}
