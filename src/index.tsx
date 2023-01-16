import React, { useContext } from "react"
import mitt, { Emitter, EventType } from "mitt"
const emitter = mitt()

export interface MittContextType {
  emitter: Emitter<Record<EventType, unknown>>
}
export type MittProps = {
  children: React.ReactNode | React.ReactNode[]
}

const MittContext = React.createContext<MittContextType>({ emitter })

export const MittProvider = ({ children }: MittProps) => {
  return (
    <MittContext.Provider value={{ emitter }}>{children}</MittContext.Provider>
  )
}

export const useMitt = (): MittContextType => useContext(MittContext)
