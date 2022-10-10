import React, { useState } from 'react'
import { useEffect } from 'react'



type Props = {

}

export default function Aside({}: Props) {
    
  return (
    <aside className="aside">
        <div className="aside-wrapper">
            <div className="menu menu-column menu-rounded menu-sub-indention px-3 mt-2">
                <div className="menu-item menu-accordion active">
                    <div className="menu-link">
                        <div className="menu-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="2" y="2" width="9" height="9" rx="2" fill="currentColor"></rect>
                                <rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="currentColor"></rect>
                                <rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="currentColor"></rect>
                                <rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="currentColor"></rect>
                            </svg>
                            </div>
                        <div className="menu-title">Home</div>
                        <div className="menu-arrow"></div>
                    </div>
                </div>
                <div className="menu-item menu-accordion">
                    <div className="menu-link">
                        <div className="menu-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z" fill="currentColor"></path>
                                <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <div className="menu-title">Assessments</div>
                        <div className="menu-arrow"></div>
                    </div>
                </div>
                <div className="menu-item menu-accordion">
                    <div className="menu-link">
                        <div className="menu-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="currentColor"></path>
                                <path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <div className="menu-title">Documentation</div>
                        <div className="menu-arrow"></div>
                    </div>
                </div>
            </div>
            <div className="separator"></div>
            <div className="menu menu-column menu-rounded menu-sub-indention px-3">
                <div className="menu-item menu-accordion">
                    <div className="menu-link">
                        <div className="menu-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 5.91517C15.8 6.41517 18 8.81519 18 11.8152C18 12.5152 17.9 13.2152 17.6 13.9152L20.1 15.3152C20.6 15.6152 21.4 15.4152 21.6 14.8152C21.9 13.9152 22.1 12.9152 22.1 11.8152C22.1 7.01519 18.8 3.11521 14.3 2.01521C13.7 1.91521 13.1 2.31521 13.1 3.01521V5.91517H13Z" fill="currentColor"></path>
                                <path opacity="0.3" d="M19.1 17.0152C19.7 17.3152 19.8 18.1152 19.3 18.5152C17.5 20.5152 14.9 21.7152 12 21.7152C9.1 21.7152 6.50001 20.5152 4.70001 18.5152C4.30001 18.0152 4.39999 17.3152 4.89999 17.0152L7.39999 15.6152C8.49999 16.9152 10.2 17.8152 12 17.8152C13.8 17.8152 15.5 17.0152 16.6 15.6152L19.1 17.0152ZM6.39999 13.9151C6.19999 13.2151 6 12.5152 6 11.8152C6 8.81517 8.2 6.41515 11 5.91515V3.01519C11 2.41519 10.4 1.91519 9.79999 2.01519C5.29999 3.01519 2 7.01517 2 11.8152C2 12.8152 2.2 13.8152 2.5 14.8152C2.7 15.4152 3.4 15.7152 4 15.3152L6.39999 13.9151Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <div className="menu-title">Support</div>
                        <div className="menu-arrow"></div>
                    </div>
                </div>
                {/* <div className="menu-item menu-accordion">
                    <div className="menu-link">
                        <div className="menu-icon"></div>
                        <div className="menu-title">FAQ</div>
                        <div className="menu-arrow"></div>
                    </div>
                </div>
                <div className="menu-item menu-accordion">
                    <div className="menu-link">
                        <div className="menu-icon"></div>
                        <div className="menu-title">Account</div>
                        <div className="menu-arrow"></div>
                    </div>
                </div> */}
            </div>
        </div>
    </aside>
  )
}