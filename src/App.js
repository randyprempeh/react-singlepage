import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Link } from "react-router-dom"
import logo from './logo.svg';
import './App.css';


const myData = [
  {
    id: 1,
    title: "1. Buch",
    text: "This is the text for book 1"
  },
  {
    id: 2,
    title: "2. Buch",
    text: "This is the text for book 2"
  },
  {
    id: 3,
    title: "3. Buch",
    text: "This is the text for book 3"
  },
  {
    id: 4,
    title: "4. Buch",
    text: "This is the text for book 4"
  },
  {
    id: 5,
    title: "5. Buch",
    text: "This is the text for book 5"
  },
  {
    id: 6,
    title: "6. Buch",
    text: "This is the text for book 6"
  },
  {
    id: 7,
    title: "7. Buch",
    text: "This is the text for book 7"
  }
]



let introductionNextButton = (props) => {
  if (props.location.pathname == "/") {
    return (
      <Link to="/Page2" >NEXT</Link>
    )
  } else if (props.location.pathname == "/Page2") {
    return (
      <Link to="/Page3" >NEXT</Link>
    )
  } else if (props.location.pathname == "/Page3") {
    return (
      <Link to="/Page4" >NEXT</Link>
    )
  } else if (props.location.pathname == "/Page4") {
    return (
      <Link to="/overview" >NEXT</Link>
    )
  }
}


  const Page1 = props => (
    <div>
      <img src="public/nas.png" alt="img-logo" />
      <p className="App-intro"><b>Explore page</b> <br /><span>Anything that you <br />thrive to get in Life <br />doesnt come that <br />easily,
          step out of your<br /> comfort zone and get it</span></p>
      {introductionNextButton(props)}
    </div>


  )

  const Page2 = props => (
    <div>
      <img src="./nas1.png" alt="img-logo" />
      <p className="App-intro"><b>Access Life</b> <br /><span>Notice that you <br />power in Life <br />doesnt come that <br />easily,
          step out of your<br /> sleep and live</span></p>
      {introductionNextButton(props)}

    </div>


  )

  const Page3 = props => (
    <div>
      <img src="./nas2.png" alt="img-logo" />
      <p className="App-intro"><b>Memoirs out</b> <br /><span>dont be afraid to live <br />your Life <br />that you ever wanted <br />be ready,
          stoop low on your pains<br /> come and enjoy PRIDE</span></p>
      {introductionNextButton(props)}
    </div>

  )

  const Page4 = props => (
    <div>
      <img src="./nas3.png" alt="img-logo" />
      <p className="App-intro"><b>Choose</b> <br /><span>your <br />happiness Today<br />and always <br />know
          today<br /> aint promised</span></p>
      {introductionNextButton(props)}
    </div>
  )

  const ItemOverview = props => {
    return (
      <div>
        {
          myData.map(item => {
            return (
              <div>
                <Link to={"/book/" + item.id}>
                  <h2>{item.title}</h2>
                </Link>
              </div>
            )
          })
        }
      </div>
    )
  }

  const ItemDetail = props => {
    let item = myData.filter(item => {
      return item.id == props.match.params.id
    })

    return (item.map(item => {
      return (
        <div>
          <button onClick={props.history.goBack}>BACK</button>
          <h1>{item.title}</h1>
          <p>{item.text}</p>
        </div>
      )
    }))
  }


  const Navigation = props => (
    <nav>
      <NavLink exact activeClass="active" to="/" ></NavLink>
      <NavLink exact activeClass="active" to="/Page2" ></NavLink>
      <NavLink exact activeClass="active" to="/Page3" ></NavLink>

    </nav>

  )




  class App extends Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Simple Page Application Practice</h1>
          </header>
          <BrowserRouter>
            <div>

              <Route exact path="/" component={Page1} />
              <Route exact path="/page2" component={Page2} />
              <Route exact path="/page3" component={Page3} />
              <Route exact path="/page4" component={Page4} />
              <Route path="/overview" component={ItemOverview} />
              <Route path="/book/:id" component={ItemDetail} />
              <Navigation />

            </div>

          </BrowserRouter>

        </div>
      );
    }
  }



  export default App
