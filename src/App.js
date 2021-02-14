import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Characters from './screens/Characters'
import Episodes from './screens/Episodes'
import Locations from './screens/Locations'
import MyList from './screens/MyList'
import Navbar from './components/Navbar'
import './App.css'

function App() {
    const [filterValue, setFilterValue] = useState({
        filterScreen: '',
        filterBy: '',
        value: ''
    })
    const [openListModal, setOpenListModal] = useState(false)

    return (
        <Router>
            <Navbar
                setOpenListModal={setOpenListModal}
                filterValue={filterValue}
                setFilterValue={setFilterValue}
            />
            <Switch>
                <Route
                    exact
                    path='/'
                    render={() => (
                        <Characters filterValue={filterValue} setFilterValue={setFilterValue} />
                    )}
                />
                <Route
                    exact
                    path='/episodes'
                    render={() => (
                        <Episodes filterValue={filterValue} setFilterValue={setFilterValue} />
                    )}
                />
                <Route
                    exact
                    path='/locations'
                    render={() => (
                        <Locations filterValue={filterValue} setFilterValue={setFilterValue} />
                    )}
                />
                <Route
                    exact
                    path='/my-list'
                    render={() => (
                        <MyList
                            openListModal={openListModal}
                            setOpenListModal={setOpenListModal}
                            filterValue={filterValue}
                            setFilterValue={setFilterValue}
                        />
                    )}
                />
            </Switch>
        </Router>
    )
}

export default App
