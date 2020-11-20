// in src/App.js
import * as React from "react";
import PersonIcon from '@material-ui/icons/Person';
import TournamentIcon from '@material-ui/icons/SportsSoccer';
import TeamIcon from '@material-ui/icons/Group';
import RefereeIcon from '@material-ui/icons/Sports';
import {Admin, Resource} from 'react-admin';
import Dashboard from './Dashboard';
import {TournamentCreate, TournamentEdit, TournamentList} from './tournaments';
import {PlayerCreate, PlayerEdit, PlayerList} from './players';
import {TeamCreate, TeamEdit, TeamList} from './teams';
import dataProvider from './dataProvider';
import {RefereeCreate, RefereeEdit, RefereeList} from "./referees";

const App = () => (
    <Admin dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource name="tournaments" list={TournamentList} edit={TournamentEdit} create={TournamentCreate}
                  icon={TournamentIcon}/>
        <Resource name="players" list={PlayerList} edit={PlayerEdit} create={PlayerCreate}
                  icon={PersonIcon}/>
        <Resource name="teams" list={TeamList} edit={TeamEdit} create={TeamCreate}
                  icon={TeamIcon}/>
        <Resource name="referees" list={RefereeList} edit={RefereeEdit} create={RefereeCreate}
                  icon={RefereeIcon}/>
    </Admin>
);

export default App;