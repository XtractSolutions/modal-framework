import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './styles/indexStyles.styl'

library.add(faTimes)

export modalActions from './actions/modalActions'
export modalReducer from './reducers/modalReducer'
export ModalFramework from './components/ModalFramework.jsx'
