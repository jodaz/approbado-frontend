import * as React from 'react'
// Components
import Admin from '../layouts/Admin'
import TabbedList from '@approbado/lib/components/TabbedList'

const tags = [
    {
        name: 'Categorías',
        pathname: '/configurations/categories'
    },
    {
        name: 'Niveles',
        pathname: '/configurations/levels'
    },
]

const Configurations = ({ children }) => (
    <Admin>
        <TabbedList
            tags={tags}
            name='Configuraciones'
        />
        {children}
    </Admin>
)

export default Configurations
