import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { List, Checkbox } from 'semantic-ui-react'
import MyListModal from '../../components/MyListModal'
import useLocalStorage from '../../core/hooks/useLocalStorage'
import { formatDate } from '../../core/utils'

const MyList = ({ openListModal, setOpenListModal, filterValue, setFilterValue }) => {
    const [items, setItems] = useState(null)
    const [myListArray, setMyListArray] = useLocalStorage('myList', [])

    useEffect(() => {
        setFilterValue({ ...filterValue, filterScreen: 'My watch list' })
    }, [])

    useEffect(() => {
        setItems(myListArray)
    }, [myListArray])

    console.log('Items', items)

    return (
        <>
            {items && (
                <List divided relaxed>
                    {items.map((item) => (
                        <List.Item className='my-list-row' key={item.id}>
                            <Checkbox
                                onChange={(e, data) =>
                                    setMyListArray(
                                        items.map((listItem) => {
                                            if (listItem.id === item.id) {
                                                listItem.watched = data.checked
                                            }

                                            return listItem
                                        })
                                    )
                                }
                                checked={item.watched}
                            />
                            <List.Icon name='clipboard list' size='large' verticalAlign='middle' />
                            <List.Content>
                                <List.Header>{item.episode}</List.Header>
                                <List.Description>{formatDate(item.date)}</List.Description>
                            </List.Content>
                            <List.Icon
                                style={{ cursor: 'pointer' }}
                                color='red'
                                name='remove'
                                size='large'
                                verticalAlign='middle'
                                onClick={() =>
                                    setMyListArray(
                                        items.filter((listItem) => listItem.id !== item.id)
                                    )
                                }
                            />
                        </List.Item>
                    ))}
                </List>
            )}
            <MyListModal
                items={items}
                setItems={setItems}
                openListModal={openListModal}
                setOpenListModal={setOpenListModal}
            />
        </>
    )
}

export default MyList
