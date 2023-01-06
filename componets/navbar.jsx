import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <Link href="/bio">bio</Link>
        <Link href="/projects">Projects</Link>
    </div>
  )
}

export default Navbar