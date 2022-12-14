import * as React from 'react';
import { DateInput } from 'react-admin'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@approbado/lib/icons/CloseIcon';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@approbado/lib/components/Button'
import Box from '@material-ui/core/Box';
import InputContainer from '@approbado/lib/components/InputContainer'
import { ReactComponent as DownloadIcon } from '@approbado/lib/icons/download.svg'
import { Form } from 'react-final-form'
import SelectInput from '@approbado/lib/components/SelectInput';
import download from '@approbado/lib/utils/download';

const TYPES = [
    { id: 'none', name: 'none' },
    { id: 'De pago', name: 'De pago' }
]

const useStyles = makeStyles(
    () => ({
        title: {
            display: 'flex',
            justifyContent: 'end'
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start'
        },
        padding: {
            padding: '0.5rem 1rem',
            borderRadius: '6px'
        }
    }),
    { name: 'RaDialog' }
);

const validate = (values) => {
    const errors = {};

    if (!values.to) {
        errors.to = "Seleccione una fecha.";
    }
    if (!values.from) {
        errors.from = "Seleccione una fecha.";
    }
    if (!values.payment_method) {
        errors.payment_method = "Seleccione un tipo de pago.";
    }

    return errors;
}

export default function() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = e => {
        setOpen(false);
    };

    const handleSubmit = React.useCallback(async (values) => {
        setLoading(true);
        try {
            await download(
                'memberships/payments/download',
                {values},
                'reporte-pagos-approbado.pdf'
            )
        } catch (error) {
            if (error.response.data.errors) {
                return error.response.data.errors;
            }
        }
        setLoading(false)
    }, []);

    return (
        <div>
            <Button
                icon={<DownloadIcon />}
                onClick={handleClickOpen}
                size="large"
            >
                Descargar
            </Button>
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle className={classes.title}>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        unresponsive
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent className={classes.content}>
                    <Form
                        onSubmit={handleSubmit}
                        validate={validate}
                        render={ ({ handleSubmit, submitting }) => (
                            <Box width='20rem' display='flex' justifyContent="center" flexDirection='column'>
                                <Box component="h3" textAlign="center">
                                    Reporte
                                </Box>
                                <Box component="p" marginBottom='2rem' textAlign="center">
                                    Selecciona el rango de fechas y el tipo de pago para crear el reporte.
                                </Box>
                                <InputContainer label='Tipo de pago' md='12' disabled={submitting}>
                                    <SelectInput name="payment_method" options={TYPES} />
                                </InputContainer>
                                <InputContainer label='Desde' md='12' disabled={submitting}>
                                    <DateInput source="from" fullWidth />
                                </InputContainer>
                                <InputContainer label='Hasta' md='12' disabled={submitting}>
                                    <DateInput source="to" fullWidth />
                                </InputContainer>
                                <Button
                                    disabled={submitting}
                                    onClick={event => {
                                        if (event) {
                                            event.preventDefault();
                                            handleSubmit();
                                        }
                                    }}
                                    unresponsive
                                >
                                    Descargar
                                </Button>
                            </Box>
                        )}
                    />
                </DialogContent>
            </Dialog>
        </div>
    );
}
