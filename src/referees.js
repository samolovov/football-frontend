// in src/referees.js
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

const RefereeTitle = ({record}) => {
    return <span>Referee {record ? `"${record.firstName} ${record.lastName}"` : ''}</span>;
};

export const RefereeList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="firstName"/>
            <TextField source="lastName"/>
            <DateField source="birthday"/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const RefereeEdit = props => (
    <Edit title={<RefereeTitle/>} {...props}>
        <SimpleForm>
            <TextInput disabled source="id"/>
            <TextInput source="firstName"/>
            <TextInput source="lastName"/>
            <TextInput source="avatar"/>
            <DateInput source="birthday"/>
        </SimpleForm>
    </Edit>
);

export const RefereeCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="firstName"/>
            <TextInput source="lastName"/>
            <TextInput source="avatar"/>
            <DateInput source="birthday"/>
        </SimpleForm>
    </Create>
);