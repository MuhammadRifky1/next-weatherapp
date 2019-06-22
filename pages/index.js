import fetch from 'isomorphic-unfetch'
import css from './style/index.css'
//import Form from './components/Forms'
//import Weather from './components/Weather'

const API_KEY = 'a3536c23419eaaa0556cecaae8ae73bb';

function Home({ weather }) {
  console.log({weather})
  return <div className={css.container}>{weather.name}</div>
}

Home.getInitialProps = async ({ req }) => {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=bogor,id&appid=${API_KEY}`);
  const json = await res.json();
  return { weather: json };
};
  
export default Home;