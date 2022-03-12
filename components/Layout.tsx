import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

/** Components */
import Header from './Header';

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
    <Header />
    <div className='container mx-auto px-10 py-6'>
      {children}
    </div>
  </div>
)

export default Layout
