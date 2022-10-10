import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useEffect } from 'react'
import Dropdown from "../../../../components/Dropdown/Dropdown.jsx"



const Home: NextPage = () => {
  return (
    <main className="">
        <div className="assessment-header">
            <div className="container container-fluid d-flex justify-content-between align-items-center">
                <div className="url">
                    Quality-Management / ISO
                </div>
                <div></div>
            </div>
        </div>
        <div className="container container-fluid container-1120 mt-5">
            <div className="d-flex flex-auto flex-justify-start">
                <div className="select-container">
                    <Dropdown/>
                </div>
                <div className="select-version">ISO - 27001	</div>
                
            </div>
        </div>
    </main>
  )
}

export default Home
