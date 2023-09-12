import { Link } from 'react-router-dom'
import './Tabs.scss'

function Tabs() {
  return (
    <div>
      <ul class="list-inline tabs-underlined">
        <li>
          <Link href="#" class="tab-underlined active">
            Développement
          </Link>
        </li>
        <li>
          <Link href="#" class="tab-underlined">
            Hébergement
          </Link>
        </li>
        <li>
          <Link href="#" class="tab-underlined">
            Maintenance
          </Link>
        </li>
      </ul>
      {/* Bloc image marue entrprise */}
    </div>
  )
}
export default Tabs
