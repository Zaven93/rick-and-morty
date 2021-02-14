import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCharacters } from '../../core/actions/charactersActions'
import CharactersList from '../../components/CharactersList'
import Pagination from '../../components/Pagination'

const Characters = ({ filterValue, setFilterValue }) => {
    const dispatch = useDispatch()
    const char = useSelector((state) => state.characters.characters)
    const [activePage, setActivePage] = useState(1)
    const [characters, setCharacters] = useState(null)

    useEffect(() => {
        setFilterValue({ ...filterValue, filterScreen: 'Characters' })
    }, [])

    useEffect(() => {
        if (activePage === 1) {
            return dispatch(getCharacters())
        }

        if (activePage % 2 === 0) {
            return dispatch(getCharacters(activePage / 2))
        }

        dispatch(getCharacters((activePage + 1) / 2))
    }, [dispatch, activePage])

    useEffect(() => {
        if (!char) return

        if (char.results.length <= 11) {
            return setCharacters(char.results)
        }

        if (activePage % 2 === 0) {
            return setCharacters(char.results.slice(char.results.length / 2))
        } else {
            return setCharacters(char.results.slice(0, char.results.length / 2))
        }
    }, [char, activePage])

    return (
        <div>
            {characters && char && (
                <>
                    <CharactersList
                        filterValue={filterValue}
                        setFilterValue={setFilterValue}
                        characters={characters}
                    />{' '}
                    <div className='pagination-container'>
                        <Pagination
                            activePage={activePage}
                            setActivePage={setActivePage}
                            totalPages={char.info.pages * 2 - 1}
                        />
                    </div>
                </>
            )}
        </div>
    )
}

export default Characters
