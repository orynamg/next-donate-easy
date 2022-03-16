import type { NextPage } from 'next'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faPaypal } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from '../components/navbar'
import Showcase from '../components/showcase'
import CharityCards from '../components/charity-cards'

const Home: NextPage = () => {
  return (
    <div>

      <Navbar></Navbar>
      
      <Showcase></Showcase>

      <CharityCards></CharityCards>


    </div>

  )
}

export default Home
