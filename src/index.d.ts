import React from "react"
import { Emitter, EventType } from "mitt"

export interface MittContextType {
  emitter: Emitter<Record<EventType, unknown>>
}

export declare const MittProvider
export declare const useMitt: () => MittContextType
