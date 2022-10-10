import React from 'react'
import Header from '../Header/Header'
import Aside from '../Aside/aside'

type Props = {
  children?: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header/>
      <Aside/>
      <div className="wrapper">
        {children}
      </div>
    </>
  )
}