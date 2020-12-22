import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home/home.js'
import Footer from './Home/footer.js'
import Pricing from './components/pricing.js'

//const Loading = () => <div className="qbrainx-immigration h-100">Loading</div>

// const Home = Loadable({
//     loader: () => import('./screens/home'),
//     loading: Loading
//   })

  class Routes extends React.Component {

    render(){
        return(
        <BrowserRouter>
          {/* <Header /> */}
        <Switch>
        <Route exact path='/' render={props => <Home {...props} />}/>
        <Route exact path='/pricing' render={props => <Pricing {...props} />}/>
          {/* <Route exact path='/signin' render={props => <Signin {...props} />}/>
          <Route exact path='/bookappointment' render={props => <StepperMain {...props} />}/>
          <Route exact path='/main' render={props => <Main {...props} />}/>
          <Route exact path='/crud' render={props => <Crud {...props} />}/>
          <Route exact path='/sirumalai' render={props => <Sirumalai {...props} />}/> */}

 

        </Switch>
        <Footer />
        </BrowserRouter>
        )
    }

  }

  export default Routes;
