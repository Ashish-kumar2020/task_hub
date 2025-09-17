import React from 'react'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-muted/40 p-4">
      <div className="w-full max-w-xl">
        <Outlet />
      </div>
    </div>
  )
}


export default AuthLayout