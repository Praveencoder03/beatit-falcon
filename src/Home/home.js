import React  from 'react'
import Header from '../components/header/header.js'
import Tiktok from '../components/tiktok.js'
import Testemotional from '../components/testemotional.js'

class Home extends React.Component{
    render(){
        return(
            <>
           <Header />
           <Tiktok />
           <Testemotional />
           </>
        )
    }
    }
    export default Home;