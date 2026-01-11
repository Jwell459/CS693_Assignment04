
import react from 'react'
import reactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import EmployeeList from './EmployeeList.jsx'


const root = createRoot(document.getElementByID('content'))

ReactDOM.render(
    <React.StrictMode>
        <EmployeeList />
    </React.StrictMode>,
    document.getElementById('content')
)