import React from 'react'
import { Table, Label } from 'semantic-ui-react'
import { formatDate } from '../../core/utils'

const EpisodesList = ({ episodes, filterValue, setFilterValue }) => {
    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell textAlign='center'>Air Date</Table.HeaderCell>
                    <Table.HeaderCell textAlign='center'>Episode</Table.HeaderCell>
                    <Table.HeaderCell textAlign='center'>Created at</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {episodes &&
                    episodes
                        .filter((episode) => {
                            if (filterValue.filterScreen !== 'Episodes') {
                                return episode
                            }
                            if (!filterValue.filterBy) {
                                return episode
                            }
                            if (filterValue.filterBy === 'name') {
                                return episode.name
                                    .toLowerCase()
                                    .includes(filterValue.value.toLowerCase())
                            }
                            if (filterValue.filterBy === 'episodes') {
                                return episode.episode
                                    .toLowerCase()
                                    .includes(filterValue.value.toLowerCase())
                            }
                        })
                        .map((episode) => (
                            <Table.Row key={episode.id}>
                                <Table.Cell>
                                    <Label ribbon>{episode.name}</Label>
                                </Table.Cell>
                                <Table.Cell textAlign='center'>{episode.air_date}</Table.Cell>
                                <Table.Cell textAlign='center'>{episode.episode}</Table.Cell>
                                <Table.Cell textAlign='center'>
                                    {formatDate(episode.created)}
                                </Table.Cell>
                            </Table.Row>
                        ))}
            </Table.Body>
        </Table>
    )
}

export default EpisodesList
