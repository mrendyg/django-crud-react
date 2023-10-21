import { Link } from 'react-router-dom'

function Navegation() {
    return (
        <div>
            <Link to="/task">
                <h1>Task App</h1>
            </Link>
            <Link to="/tasks-create">create task</Link>
        </div>
    )
}

export default Navegation