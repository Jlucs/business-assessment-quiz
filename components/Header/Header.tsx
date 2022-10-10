import React, { useState } from 'react'
import { useEffect } from 'react'

type Props = {

}

export default function Header({}: Props) {

  return (
    <header className="header">

        <div className="container container-fluid d-flex flex-row align-items-stretch justify-content-between">
          
          <div id="begin">
              
          </div>

          <div id="center" className="d-flex align-items-center justify-content-center">
            <div className="searchbox">
                <form className="search-form">
                    <div className="search-container">
                        <div className="search-input">
                            <input placeholder="Search"/>
                        </div>
                        <div className="search-icon">
                        <svg aria-hidden="true" className="s-input-icon s-input-icon__search svg-icon iconSearch" width="18" height="18" viewBox="0 0 18 18"><path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"></path></svg>
                        </div>
                    </div>
                </form>
            </div>
          </div>

          <div id="end">
            
          </div>

        </div>

    </header>
  )
}