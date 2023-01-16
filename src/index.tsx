import React, { useContext } from "react"
import mitt, { Emitter, EventType } from "mitt"
const emitter: Emitter<Record<EventType, unknown>> = mitt()

export interface MittContextType {
  emitter: Emitter<Record<EventType, unknown>>
}

const MittContext = React.createContext<MittContextType>({ emitter })
type MittProps = {
  children: React.ReactNode
}
export const MittProvider: React.FC = ({ children }: MittProps) => {
  return (
    <MittContext.Provider value={{ emitter }}>{children}</MittContext.Provider>
  )
}

export const useMitt = (): MittContextType => useContext(MittContext)
