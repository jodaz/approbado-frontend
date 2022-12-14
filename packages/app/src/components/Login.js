import * as React from 'react';
import {
    CardActions,
    Typography,
    Box
} from '@material-ui/core';
import axios from 'axios'
import AuthLayout from './AuthLayout'
import useStyles from '@approbado/lib/styles/formStyles'
import { theme } from '@approbado/lib/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { Link } from 'react-router-dom'
import AccountCircle from '@material-ui/icons/PersonOutlineOutlined';
import InputAdornment from '@material-ui/core/InputAdornment';
import VpnKeyIcon from '@material-ui/icons/VpnKeyOutlined';
import Button from '@approbado/lib/components/Button'
import TextInput from '@approbado/lib/components/TextInput'
import CONFIG_NAMES from '@approbado/lib/configs';

const validate = (values) => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Ingrese su nombre de usuario';
    }

    if (!values.password) {
        errors.password = 'Ingrese su contraseña';
    }

    return errors;
};

const Login = () => {
    const [loading, setLoading] = React.useState(false);
    const classes = useStyles();

    const handleSubmit = React.useCallback(values => {
        setLoading(true)
        return axios.post(`${CONFIG_NAMES.SOURCE}/auth/login`, values)
            .then(res => {
                const { token } = res.data;

                window.location.href =
                    `${CONFIG_NAMES.REDIRECT_TO}/auth?token=${token}`;

                setLoading(false);
            }).catch(err => {
                setLoading(false);

                if (err.response.data.errors) {
                    return err.response.data.errors;
                }
            });
    }, [])

    return (
        <AuthLayout
            validate={validate}
            handleSubmit={handleSubmit}
            title='Iniciar sesión'
        >
            <div className={classes.form}>
                <TextInput
                    name="email"
                    type="text"
                    fullWidth
                    placeholder='Usuario'
                    disabled={loading}
                    className={classes.input}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextInput
                    name="password"
                    // @ts-ignore
                    placeholder='Contraseña'
                    type="password"
                    disabled={loading}
                    className={classes.input}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <VpnKeyIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <Box component="div" display='flex' justifyContent="flex-end" marginTop="1rem">
                    <Link to="/reset-password" className={classes.link}> ¿Olvidaste tu contraseña? </Link>
                </Box>
                <CardActions className={classes.actions}>
                    <Button
                        variant='contained'
                        color='secondary'
                        disabled={loading}
                        type='submit'
                        unresponsive
                        fullWidth
                    >
                        {'Iniciar sesión'}
                    </Button>
                    <Box component="div" marginTop="2rem">
                        <Typography variant="subtitle1" component="p">
                            ¿Aún no tienes una cuenta?
                            {' '}
                            <Link to="/register" className={classes.link}><strong>Ingresa aquí</strong></Link>
                        </Typography>
                    </Box>
                </CardActions>
            </div>
        </AuthLayout >
    );
};

const LoginWithTheme = props => (
    <ThemeProvider theme={createMuiTheme(theme)}>
        <Login {...props} />
    </ThemeProvider>
);

export default LoginWithTheme;
