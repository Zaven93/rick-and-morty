import React, { useState } from 'react'
import { Card, Image, Modal, Header, Button } from 'semantic-ui-react'
import { formatDate } from '../../core/utils/index'

const CharacterCard = ({ character }) => {
    const [showPopup, setShowPopup] = useState(false)
    return (
        <>
            <Card className='character-card' onClick={() => setShowPopup(true)}>
                <Image src={character.image} wrapped ui={false} />
                <Card.Content>
                    <Card.Header textAlign='center' className='name-content'>
                        {character.name}
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <i className='fas fa-calendar-alt'></i>
                    {formatDate(character.created)}
                </Card.Content>
                <Card.Content className='content-container' extra>
                    <i class='fas fa-user-tag'></i> {character.species}
                </Card.Content>
                <Card.Content className='content-container' extra>
                    <i class='fas fa-venus-mars'></i> {character.gender}
                </Card.Content>
                <Card.Content className='content-container' extra>
                    <i class='fab fa-staylinked'></i> {character.status}
                </Card.Content>
                <Card.Content className='content-container' extra>
                    <i className='fas fa-map-marker-alt'></i>
                    {character.location.name}
                </Card.Content>
            </Card>
            <Modal onClose={() => setShowPopup(false)} open={showPopup}>
                <Modal.Header>Character elaborate information</Modal.Header>
                <Modal.Content image>
                    <Image className='modal-image' size='medium' src={character.image} wrapped />
                    <Modal.Description>
                        <Header>Name: {character.name}</Header>
                        <p>
                            <i className='fas fa-calendar-alt'></i>{' '}
                            {`Created at: ${formatDate(character.created)}`}
                        </p>
                        <br />
                        <p>
                            <i class='fas fa-user-tag'></i> {`Specie: ${character.species}`}
                        </p>{' '}
                        <br />
                        <p>
                            <i class='fas fa-venus-mars'></i> {`Gender: ${character.gender}`}
                        </p>{' '}
                        <br />
                        <p>
                            <i class='fab fa-staylinked'></i> {`Status: ${character.status}`}
                        </p>{' '}
                        <br />
                        <p>
                            <i class='fas fa-globe'></i> {`Origin: ${character.origin.name}`}
                        </p>
                        <br />
                        <p>
                            <i className='fas fa-map-marker-alt'></i>{' '}
                            {`Location: ${character.location.name}`}
                        </p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='red' onClick={() => setShowPopup(false)}>
                        Close
                    </Button>
                </Modal.Actions>
            </Modal>
        </>
    )
}

export default CharacterCard
