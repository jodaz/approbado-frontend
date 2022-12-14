import * as React from 'react'
import { useUiDispatch } from '@approbado/lib/hooks/useUI'
import { JSONAxiosInstance as axios } from '@approbado/lib/api'
import { useHistory } from 'react-router-dom'
import BaseForm from '@approbado/lib/components/BaseForm'
import InputContainer from '@approbado/lib/components/InputContainer'
import TextInput from '@approbado/lib/components/TextInput'
import SelectInput from '@approbado/lib/components/SelectInput'
import SelectCategoryInput from './SelectCategoryInput'
import validate from './validateTrivias'
import SelectPlansInput from './SelectPlansInput'

const ACCESS_TYPES = [
    { id: '1', name: 'Gratis' },
    { id: '0', name: 'De pago' }
]

const TriviaCreate = () => {
    const { showNotification } = useUiDispatch();
    const history = useHistory()

    const save = React.useCallback(async (values) => {
        try {
            const { data } = await axios.post('/trivias', values)

            if (data) {
                history.push(`/trivias/${data.id}`)
                showNotification(`¡Ha registrado la trivia "${data.name}"!`)
            }
        } catch (error) {
            if (error.response.data.errors) {
                return error.response.data.errors;
            }
        }
    }, []);

    return (
        <BaseForm
            save={save}
            validate={validate}
            formName='Crear trivia'
        >
            <InputContainer label='Nombre'>
                <TextInput
                    name="name"
                    placeholder="Nombre"
                    fullWidth
                />
            </InputContainer>
            <InputContainer label='Acceso'>
                <SelectInput
                    name="is_free"
                    options={ACCESS_TYPES}
                />
            </InputContainer>
            <SelectCategoryInput />
            <SelectPlansInput />
        </BaseForm>
    )
}

export default TriviaCreate
