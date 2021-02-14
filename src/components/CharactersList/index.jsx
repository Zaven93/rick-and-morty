import CharacterCard from '../CharacterCard'
import { Grid } from 'semantic-ui-react'

const CharactersList = ({ characters, filterValue, setFilterValue }) => {
    return (
        <Grid columns='equal'>
            {characters &&
                characters
                    .filter((character) => {
                        if (filterValue.filterScreen !== 'Characters') {
                            return character
                        }
                        if (!filterValue.filterBy) {
                            return character
                        }
                        if (filterValue.filterBy === 'gender') {
                            if (
                                filterValue.value === '' ||
                                filterValue.value === 'male and female'
                            ) {
                                return character
                            }
                            return (
                                character.gender.toLowerCase() === filterValue.value.toLowerCase()
                            )
                        }
                        if (filterValue.filterBy === 'species') {
                            if (filterValue.value === '') {
                                return character
                            }
                            return character.species
                                .toLowerCase()
                                .includes(filterValue.value.toLowerCase())
                        }
                        if (filterValue.filterBy === 'status') {
                            if (filterValue.value === '') {
                                return character
                            }
                            return character.status
                                .toLowerCase()
                                .includes(filterValue.value.toLowerCase())
                        }
                    })
                    .map((character) => (
                        <Grid.Column width={5}>
                            <CharacterCard key={character.id} character={character} />
                        </Grid.Column>
                    ))}
        </Grid>
    )
}

export default CharactersList
