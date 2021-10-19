import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { UpdatePlace } from './places/components/UpdatePlace';
import { NewPlace } from './places/pages/NewPlace';
import { UserPlaces } from './places/pages/UserPlaces';
import { MainNavigation } from './shared/components/Navigation/MainNavigation';

import { Users } from './user/pages/Users';

const App = () => {
   return (
      <Router>
         <MainNavigation />
         <main>
            <Switch>
               <Route path='/' exact>
                  <Users />
               </Route>
               <Route path='/:userId/places' exact>
                  <UserPlaces />
               </Route>
               <Route path='/places/new'>
                  <NewPlace />
               </Route>
               <Route path='/places/:placeId'>
                  <UpdatePlace />
               </Route>
               <Redirect to='/' />
            </Switch>
         </main>
      </Router>
   );
};

export default App;
