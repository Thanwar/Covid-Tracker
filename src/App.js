import React from 'react';

import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Cards from './components/Cards/Cards';
import CountrySelector from './components/CountrySelector/countrySelector';
import Chart from "./components/Chart/chart";
import { fetchGlobalData } from "./Api/index";



class App extends React.Component{

  state = {
    data: {},
    country: '',
  }

  async componentDidMount()
  {
    const FetchedData = await fetchGlobalData();
    // console.log("app.js ===> ",FetchedData);
    this.setState({data: FetchedData})
  }

  handleCountryChange = async (country)=>{
    const FetchedData = await fetchGlobalData(country);

    this.setState({data: FetchedData, country: country});

    //console.log("app.js ===> ",FetchedData);
    //console.log(country);
  }


  render(){

    const { data , country } = this.state;

    return (
      <div className="container ">
        <Header />
        <Cards data={data} />
        <CountrySelector handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country}/>
        <Footer />
      </div>
    );

  }

}

export default App;
