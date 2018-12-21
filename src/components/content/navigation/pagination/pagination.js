import React from 'react'
import { Pagination} from 'semantic-ui-react'
import './pagination.css';

const Paginate = () => <Pagination defaultActivePage={1} totalPages={5} />

export default Paginate