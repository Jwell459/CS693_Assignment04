import Employee from '..models/Employee.js'

const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find({})

        res.status(200).json({ employees, count: employees.length })
        // res.send('Get all employees')
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}

const getEmployee = async (req, res) => {
    try {
        let { id: employeeID } = req.params
        const employee = await Employee.findOne({ _id: employeeId })
        if (!employee) {
            return res.status(404).json({ msg: `No employee with ID ${empoyeeId} found.` })
        } else {
            res.status(200).json({ employee })
        }
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}

const createEmployee = async (req, res) => {
    try {
        const employee = await Employee.create(req.body)
        res.status(201).json({ employee })
        // res.status(201).json({ msg: 'Employee added successfully' })
        // res.send('Create a new employee')
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}