import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEpisodes } from '../../core/actions/episodesActions'
import EpisodesList from '../../components/EpisodesList'
import Pagination from '../../components/Pagination'

const Episodes = ({ filterValue, setFilterValue }) => {
    const dispatch = useDispatch()
    const episodes = useSelector((state) => state.episodes)

    const [activePage, setActivePage] = useState(1)
    const [episodesToRender, setEpisodesToRender] = useState([])

    useEffect(() => {
        dispatch(getEpisodes())
        setFilterValue({ ...filterValue, filterScreen: 'Episodes' })
    }, [])

    useEffect(() => {
        if (!episodes || !episodes.episodes) return
        if (activePage === 1 && episodes) {
            return setEpisodesToRender([...episodes.episodes.slice(0, 25)])
        }

        setEpisodesToRender([
            ...episodes.episodes.slice(episodesToRender.length - 1, episodesToRender.length + 25)
        ])
    }, [activePage, episodes])

    return (
        <>
            {episodesToRender && episodes.episodes && episodes.episodes.length && (
                <div className='table-container'>
                    <EpisodesList
                        filterValue={filterValue}
                        setFilterValue={setFilterValue}
                        episodes={episodesToRender}
                    />{' '}
                    <div className='pagination-container'>
                        <Pagination
                            activePage={activePage}
                            setActivePage={setActivePage}
                            totalPages={Math.ceil(episodes.episodes.length / 25)}
                        />
                    </div>
                </div>
            )}
        </>
    )
}

export default Episodes
