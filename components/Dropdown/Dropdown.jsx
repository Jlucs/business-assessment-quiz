import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState, forwardRef } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";


const NextLink = forwardRef((props, ref) => {
  let { href, children, ...rest } = props
    return (
        <Link href={href}>
          <a ref={ref} {...rest}>
            {children}
          </a>
        </Link>
    )
  })

export default function Dropdown() {
  const router = useRouter();
  return (
    <Menu as="div">
      <Menu.Button className="dropdown-btn-1">
        Version
        <div className="dropdown-caret"></div>
    </Menu.Button>
      <Menu.Items className="dropdown-1">
        <div className="dropdown-modal">
        <Menu.Item>
          
            <NextLink
              className={["link", router.pathname == "/assessment-gate/quality-management/iso/20001-2018" ? "current" : ""].join(" ")}
              href="/assessment-gate/quality-management/iso/20001-2018"
            >
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
                <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
            </svg>
            20001-2018	
            </NextLink>
         
        </Menu.Item>
        <Menu.Item>
        
            <NextLink className={["link", router.pathname == "/assessment-gate/quality-management/iso/9001-2015" ? "current" : ""].join(" ")} 
            href="/assessment-gate/quality-management/iso/9001-2015">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
                <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
            </svg>
            9001-2015		
            </NextLink>
          
        </Menu.Item>
        <Menu.Item>
        
            <NextLink
              className={["link", router.pathname == "/assessment-gate/quality-management/iso/27001" ? "current" : ""].join(" ")} 
              href="/assessment-gate/quality-management/iso/27001"
            >
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-check SelectMenu-icon SelectMenu-icon--check">
                <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
            </svg>
            27001		
            </NextLink>
          
        </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  )
}