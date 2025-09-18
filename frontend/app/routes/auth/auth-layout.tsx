import React from 'react'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div className="w-full h-screen grid place-items-center bg-muted/40 p-4">
      <Outlet />
    </div>
  )
}


export default AuthLayout