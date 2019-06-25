import css from '../style/style.css'

const Weather = (props) => {
    if (props.data !== undefined){
        return (
            <div className={css.weather__container}>
                <div className={css.mx_auto}>
                <p> <b>Location        :</b> {props.data.name}, {props.data.sys.country}</p>
                <p> <b>Coordinate      :</b> {props.data.coord.lat}, {props.data.coord.lon}</p>
                <p> <b>Humidity        :</b> {props.data.main.humidity}</p> 
                <p> <b>pressure        :</b> {props.data.main.pressure}</p> 
                <p> <b>Temperature     :</b> {props.data.main.temp}</p>
                <p> <b>Temperature Max :</b> {props.data.main.temp_max}</p> 
                <p> <b>Temperature Min :</b> {props.data.main.temp_min}</p>
                </div>
            </div>
        )
    }else {
        return(
            <div className={css.weather__container}>
                <div className={css.force_center}>
                    <b>Empty Data</b>
                </div>
            </div>
        ) 
    }
}

     


export default Weather