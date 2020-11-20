// in src/teams.js
import * as React from "react";
import {
    Create,
    Datagrid,
    DateField,
    DateInput,
    Edit,
    EditButton,
    List,
    SimpleForm,
    TextField,
    TextInput
} from 'react-admin';

const TeamTitle = ({record}) => {
    return <span>Team {record ? `"${record.name}"` : ''}</span>;
};

export const TeamList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="name"/>
            <DateField source="birthday"/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const TeamEdit = props => (
    <Edit title={<TeamTitle/>} {...props}>
        <SimpleForm>
            <TextInput disabled source="id"/>
            <TextInput source="name"/>
            <DateInput source="birthday"/>
            <TextInput source="description"/>
            <TextInput source="avatar"/>
        </SimpleForm>
    </Edit>
);

export const TeamCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name"/>
            <DateInput source="birthday"/>
            <TextInput source="description"/>
            <TextInput source="avatar"/>
        </SimpleForm>
    </Create>
);