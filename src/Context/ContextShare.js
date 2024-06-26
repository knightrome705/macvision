import React, {  createContext, useState } from 'react'

export const isAuthTokenContext=createContext()

export const ContextShare = ({children}) => {

  const [isAuthToken, setIsAuthToken] = useState(true)
  return (
    <>
    <isAuthTokenContext.Provider value={{isAuthToken,setIsAuthToken}}>
    {children}
    </isAuthTokenContext.Provider>
    </>
  )
}
