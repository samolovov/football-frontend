// in src/tournaments.js
import * as React from "react";
import {Create, Datagrid, Edit, EditButton, List, SimpleForm, TextField, TextInput} from 'react-admin';

const TournamentTitle = ({record}) => {
    return <span>Tournament {record ? `"${record.name}"` : ''}</span>;
};

export const TournamentList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="name"/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const TournamentEdit = props => (
    <Edit title={<TournamentTitle/>} {...props}>
        <SimpleForm>
            <TextInput disabled source="id"/>
            <TextInput source="name"/>
        </SimpleForm>
    </Edit>
);

export const TournamentCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name"/>
        </SimpleForm>
    </Create>
);