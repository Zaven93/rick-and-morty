import React from 'react'
import { Table, Label } from 'semantic-ui-react'
import { formatDate } from '../../core/utils'

const LocationsList = ({ locations, filterValue, setFilterValue }) => {
    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell textAlign='center'>Type</Table.HeaderCell>
                    <Table.HeaderCell textAlign='center'>Dimension</Table.HeaderCell>
                    <Table.HeaderCell textAlign='center'>Created at</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {locations &&
                    locations
                        .filter((location) => {
                            if (filterValue.filterScreen !== 'Locations') {
                                return location
                            }
                            if (!filterValue.filterBy) {
                                return location
                            }
                            if (filterValue.filterBy === 'name') {
                                return location.name
                                    .toLowerCase()
                                    .includes(filterValue.value.toLowerCase())
                            }
                            if (filterValue.filterBy === 'type') {
                                return location.type
                                    .toLowerCase()
                                    .includes(filterValue.value.toLowerCase())
                            }
                            if (filterValue.filterBy === 'dimension') {
                                return location.dimension
                                    .toLowerCase()
                                    .includes(filterValue.value.toLowerCase())
                            }
                        })
                        .map((location) => (
                            <Table.Row key={location.id}>
                                <Table.Cell>
                                    <Label ribbon>{location.name}</Label>
                                </Table.Cell>
                                <Table.Cell textAlign='center'>{location.type}</Table.Cell>
                                <Table.Cell textAlign='center'>{location.dimension}</Table.Cell>
                                <Table.Cell textAlign='center'>
                                    {formatDate(location.created)}
                                </Table.Cell>
                            </Table.Row>
                        ))}
            </Table.Body>
        </Table>
    )
}

export default LocationsList
