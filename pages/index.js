import react, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import css from './style/style.css'
import Form from './components/Forms'
import Weather from './components/Weather'
import { homedir } from 'os';

const API_KEY = 'a3536c23419eaaa0556cecaae8ae73bb';

class Index extends Component {
  state = {
    data: undefined
  }

  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const json = await res.json();
    this.setState({data: json})
  }

  render(){
    return (
    <div className={css.container}> 
      <div className={css.wrapper}>
        <div className={css.leftside}>
        </div>
        <div className={css.right_side}>
          <Form getWeather={this.getWeather} />
          <Weather data={this.state.data}/>
        </div>
      </div>
    </div>
    )
  }
}

export default Index;