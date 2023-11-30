import React from "react"

interface ICoreRoute {
    path: string
    name: string
    element?: React.ComponentType
}
export interface IRoute extends ICoreRoute {
    
    children?: ICoreRoute[]
}