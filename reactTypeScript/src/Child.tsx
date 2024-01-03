import type { ReactNode } from "react"

type ChildProps = {
    name: string,
    children: ReactNode
}

const Child = ({name,children}:ChildProps) => {
  return (
    <div>
        <h1>{name}</h1>
        <h1>
            {children}
        </h1>
    </div>
  )
}

export default Child