import fetch from 'isomorphic-unfetch'
import css from './style/style.css'
import Form from './components/Forms'
import Weather from './components/Weather'

const API_KEY = 'a3536c23419eaaa0556cecaae8ae73bb';

const Home = ({weather}) => (
  <div className={css.container}> 
    <div className={css.wrapper}>
      <div className={css.leftside}>
        
      </div>
      <div className={css.right_side}>
        <Form  />
        <Weather data={weather} />
      </div>
    </div>
  </div>
  
)
const getName = 

Home.getInitialProps = async ({ req }) => {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=bogor,id&appid=${API_KEY}`);
  const json = await res.json();
  return { weather: json };
};
  
export default Home;