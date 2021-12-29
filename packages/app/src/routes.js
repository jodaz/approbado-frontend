import Authenticate from '@approbado/lib/layouts/Authenticate'
import Account from './account';
import Profile from './profile';
import { RouteWithoutLayout } from 'ra-core';
import { Route } from 'react-router-dom'
import TriviaList from './trivias/TriviaList'
import ErrorLayout from '@approbado/lib/layouts/Error'

export default [
    <RouteWithoutLayout path='/auth' render={() => <Authenticate />} />,
    <Route exact path="/account" render={() => <Account />} />,
    <Route exact path="/profile/:username" render={() => <Profile />} />,
    <Route exact path="/trivias" render={() => <TriviaList />} />,
    <RouteWithoutLayout
        path="/error"
        render={() => <ErrorLayout />}
    />,
];
