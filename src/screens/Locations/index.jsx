import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getLocations } from '../../core/actions/locationsActions'
import LocationsList from '../../components/LocationsList'
import Pagination from '../../components/Pagination'

const Locations = ({ filterValue, setFilterValue }) => {
    const dispatch = useDispatch()
    const locations = useSelector((state) => state.locations)

    const [activePage, setActivePage] = useState(1)

    useEffect(() => {
        dispatch(getLocations())
        setFilterValue({ ...filterValue, filterScreen: 'Locations' })
    }, [])

    useEffect(() => {
        if (activePage === 1) {
            return
        }

        dispatch(getLocations(activePage))
    }, [activePage])

    console.log('Locations', locations)

    console.log('Location active page', activePage)
    return (
        <>
            {locations && locations.locations && (
                <div className='table-container'>
                    <LocationsList
                        filterValue={filterValue}
                        setFilterValue={setFilterValue}
                        locations={locations.locations.results}
                    />
                    <div className='pagination-container'>
                        <Pagination
                            activePage={activePage}
                            setActivePage={setActivePage}
                            totalPages={locations.locations.info.pages}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default Locations
