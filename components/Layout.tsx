import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Seller Dashboard' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <img src="" alt="LOGO"/>
        </Link>
        <a>EVENTS</a>
        <a>FEATURES</a>
        <a>COMMUNITY</a>
        <a>CATALOGUE</a>
      </nav>
    </header>
    {children}
  </div>
)

export default Layout
