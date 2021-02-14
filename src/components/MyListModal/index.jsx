import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Modal, Form, Button } from 'semantic-ui-react'
import useLocalStorage from '../../core/hooks/useLocalStorage'

const MyListModal = ({ openListModal, setOpenListModal, setItems, items }) => {
    const [myListArray, setMyListArray] = useLocalStorage('myList', [])
    const [myListItem, setMyListItem] = useState({
        id: '',
        watched: false,
        episode: '',
        date: ''
    })

    const handleChange = (e) => setMyListItem({ ...myListItem, episode: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault()
        setMyListArray(
            items.concat({ ...myListItem, id: uuidv4(), date: new Date().toISOString() })
        )

        setMyListItem({ ...myListItem, episode: '' })

        setOpenListModal(false)
    }

    useEffect(() => {
        setItems(myListArray)
    }, [myListArray])

    return (
        <Modal open={openListModal} onClose={() => setOpenListModal(false)}>
            <Modal.Header>Create watch-later item</Modal.Header>
            <Modal.Content>
                <Form>
                    <Form.Field>
                        <label>Episode</label>
                        <input
                            value={myListItem.episode}
                            type='text'
                            placeholder='Episode'
                            onChange={handleChange}
                        />
                    </Form.Field>
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button positive type='submit' onClick={handleSubmit}>
                    Add watch-later item
                </Button>
                <Button negative>Close modal</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default MyListModal
