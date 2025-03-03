import './App.css'
import { Optimistic } from './hooks/Optimistic'
import { Transition } from './hooks/Transition'

function App() {

    return (
        <div style={{ gap: '30px', display: 'flex', flexDirection: 'column' }}>
            <h1>Vite + React</h1>
            <Transition />
            <Optimistic />
        </div>
    )
}

export default App
