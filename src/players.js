// in src/tournaments.js
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
    TextInput,
    ImageInput,
    ImageField
} from 'react-admin';

const PlayerTitle = ({record}) => {
    return <span>Player {record ? `"${record.firstName} ${record.lastName}"` : ''}</span>;
};

export const PlayerList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="firstName"/>
            <TextField source="lastName"/>
            <TextField source="position"/>
            <DateField source="birthday"/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const PlayerEdit = props => (
    <Edit title={<PlayerTitle/>} {...props}>
        <SimpleForm>
            <ImageInput source="avatar" label="Avatar" accept="image/*" placeholder={<p>Drop your file here</p>}>
                <ImageField source="src" title="Avatar" />
            </ImageInput>
            <TextInput disabled source="id"/>
            <TextInput source="firstName"/>
            <TextInput source="lastName"/>
            <TextInput source="position"/>
            <DateInput source="birthday"/>
        </SimpleForm>
    </Edit>
);

export const PlayerCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ImageInput source="avatar" label="Avatar" accept="image/*" placeholder={<p>Drop your file here</p>}>
                <ImageField source="src" title="Avatar" />
            </ImageInput>
            <TextInput source="firstName"/>
            <TextInput source="lastName"/>
            <TextInput source="position"/>
            <DateInput source="birthday"/>
        </SimpleForm>
    </Create>
);