import type { NextPage } from 'next'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faPaypal } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <button className="btn btn-primary shadow-lg">Button</button>
      <div className="shadow-md inline-block p-2 rounded-lg">
        hello
      </div>
      <FontAwesomeIcon icon={faCoffee} />
      <FontAwesomeIcon icon={faPaypal} />
      <Image src="/img/countryside.jpeg" alt="me" width="64" height="64" />
    </div>

  )
}

export default Home
