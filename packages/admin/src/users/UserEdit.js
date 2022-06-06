import * as React from 'react'
import {
    SelectInput,
    BooleanInput,
    useNotify
} from 'react-admin'
import { Grid } from '@material-ui/core'
import BaseForm from '@approbado/lib/components/BaseForm'
import InputContainer from '@approbado/lib/components/InputContainer'
import CustomPasswordInput from './CustomPasswordInput'
import { useHistory, useParams } from 'react-router-dom'
import TextInput from '@approbado/lib/components/TextInput'
import { axios } from '@approbado/lib/providers'

const ACCESS_TYPES = [
    { id: 'Administrador', name: 'Administrador' },
    { id: 'Pagos', name: 'Pagos' },
    { id: 'Moderador', name: 'Moderador' }
]

const validate = (values) => {
  const errors = {};

  if (!values.names) {
    errors.name = "Ingrese el nombre.";
  }
  if (!values.email) {
    errors.email = "Ingrese un correo electronico.";
  }

  return errors;
};

const UserEdit = () => {
    const notify = useNotify();
    const history = useHistory()
    const { id } = useParams();
    const [record, setRecord] = React.useState(null)

    const save = React.useCallback(async (values) => {
        try {
            const { data } = await axios.put(`/users/${record.id}`, values)

            if (data) {
                history.push('/users?tab=admins')
                notify('Se ha completado el registro con éxito', 'success');
            }
        } catch (error) {
            if (error.response.data.errors) {
                return error.response.data.errors;
            }
        }
    }, []);

    const fetchRecord = React.useCallback(async () => {
        const { data } = await axios.get(`/users/${id}`);

        setRecord(data);
    }, []);

    React.useEffect(() => {
        fetchRecord()
    }, [])

    if (!record) return null;

    return (
        <BaseForm
            save={save}
            validate={validate}
            record={record}
            formName='Editar usuario'
            saveButtonLabel='Actualizar'
        >
            <InputContainer
                labelName='Nombres'
            >
                <TextInput
                    name="names"
                    placeholder="Nombres"
                    fullWidth
                />
            </InputContainer>
            <InputContainer labelName='Correo electrónico'>
                <TextInput
                    label={false}
                    name="email"
                    placeholder="Correo electronico"
                    fullWidth
                />
            </InputContainer>
            <Grid item xs={12}>
                <BooleanInput
                    source="random_pass"
                    label="Generar contraseña y enviar por correo"
                />
            </Grid>
            <CustomPasswordInput />
            <InputContainer labelName='Tipo de acceso'>
                <SelectInput
                    label={false}
                    source="rol"
                    choices={ACCESS_TYPES}
                    fullWidth
                />
            </InputContainer>
        </BaseForm>
    )
}

export default UserEdit
