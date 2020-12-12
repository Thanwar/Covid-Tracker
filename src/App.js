import React from 'react';

import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Cards from './components/Cards/Cards';
//import CountrySelector from './components/CountrySelector/countrySelector';
//import Chart from "./components/Chart/chart";
import { fetchGlobalData } from "./Api/index";





class App extends React.Component{

  state = {
    data: {},
  }

  async componentDidMount()
  {
    const FetchedData = await fetchGlobalData();
    console.log("app.js ===> ",FetchedData);
    this.setState({data: FetchedData})
  }


  render(){

    const { data } = this.state;

    return (
      <div className="container ">
        <Header />
        <Cards data={data} />
        {/* <CountrySelector /> */}
        {/* <Chart /> */}
        <Footer />
      </div>
    );

  }

}

export default App;
