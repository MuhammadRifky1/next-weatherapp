import { connect } from 'react-redux'
import Counter from './counter'
import css from '../style/style.css'
import Link from 'next/link'

function Examples ({ lastUpdate, light }) {
  return (
    <div className={css.container}> 
      <div className={css.wrapper}>
        <Counter />
        <ul className={css.list_wrapper}>
          <li className={css.list_item}><Link href="/">Weather</Link></li>
          <li className={css.list_item}><Link href="/Counter">Counter</Link></li>
      </ul>
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  const { lastUpdate, light } = state
  return { lastUpdate, light }
}

export default connect(mapStateToProps)(Examples)
