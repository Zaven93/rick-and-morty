import { useState } from 'react'
import { Input, Menu, Dropdown, Button } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { charactersOptions, episodesOptions, locationsOptions } from '../../core/utils/options'

const Navbar = ({ filterValue, setFilterValue, setOpenListModal }) => {
    const history = useHistory()

    const handlePath = (pathName) => history.push(`/${pathName}`)

    const setOptions = () => {
        if (filterValue.filterScreen === 'Characters') {
            return charactersOptions
        } else if (filterValue.filterScreen === 'Episodes') {
            return episodesOptions
        } else if (filterValue.filterScreen === 'Locations') {
            return locationsOptions
        }
    }

    console.log('Filter value from navbar', filterValue)

    return (
        <Menu pointing>
            <Menu.Item
                name='Characters'
                active={filterValue.filterScreen === 'Characters'}
                onClick={(e, { name }) => {
                    setFilterValue({ ...filterValue, filterScreen: name })
                    handlePath('')
                }}
            />
            <Menu.Item
                name='Episodes'
                active={filterValue.filterScreen === 'Episodes'}
                onClick={(e, { name }) => {
                    setFilterValue({ ...filterValue, filterScreen: name })
                    handlePath('episodes')
                }}
            />
            <Menu.Item
                name='Locations'
                active={filterValue.filterScreen === 'Locations'}
                onClick={(e, { name }) => {
                    setFilterValue({ ...filterValue, filterScreen: name })
                    handlePath('locations')
                }}
            />
            <Menu.Item
                name='My watch list'
                active={filterValue.filterScreen === 'My watch list'}
                onClick={(e, { name }) => {
                    setFilterValue({ ...filterValue, filterScreen: name })
                    handlePath('my-list')
                }}
            />
            <Menu.Menu position='right'>
                {filterValue.filterScreen === 'My watch list' ? (
                    <Menu.Item>
                        <Button primary onClick={() => setOpenListModal(true)}>
                            Create watch item
                        </Button>
                    </Menu.Item>
                ) : (
                    <>
                        <Menu.Item>
                            {filterValue.filterScreen === 'Characters' &&
                            filterValue.filterBy === 'gender' ? (
                                <Dropdown
                                    options={[
                                        {
                                            key: 'male and female',
                                            value: 'male and female',
                                            text: 'Male and Female'
                                        },
                                        {
                                            key: 'male',
                                            value: 'male',
                                            text: 'Male'
                                        },
                                        {
                                            key: 'female',
                                            value: 'female',
                                            text: 'Female'
                                        }
                                    ]}
                                    placeholder='Select gender'
                                    selection
                                    onChange={(e, data) =>
                                        setFilterValue({ ...filterValue, value: data.value })
                                    }
                                />
                            ) : (
                                <Input
                                    onChange={(e, data) =>
                                        setFilterValue({ ...filterValue, value: data.value })
                                    }
                                    disabled={!filterValue.filterBy}
                                    icon='search'
                                    placeholder={`Search by ${filterValue.filterBy}`}
                                />
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            <Dropdown
                                placeholder='Filter by'
                                selection
                                onChange={(e, data) =>
                                    setFilterValue({
                                        ...filterValue,
                                        value: '',
                                        filterBy: data.value
                                    })
                                }
                                options={setOptions()}
                            />
                        </Menu.Item>
                    </>
                )}
            </Menu.Menu>
        </Menu>
    )
}

export default Navbar
