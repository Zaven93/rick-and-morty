import { Pagination } from 'semantic-ui-react'

const PaginationComponent = ({ totalPages, setActivePage, activePage }) => {
    console.log('active page from pagination', activePage)
    return (
        <Pagination
            activePage={activePage}
            totalPages={totalPages}
            onPageChange={(e, data) => setActivePage(data.activePage)}
        />
    )
}

export default PaginationComponent
