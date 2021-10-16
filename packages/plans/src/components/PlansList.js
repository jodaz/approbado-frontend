import * as React from 'react'
import {
    Box,
    Typography,
    makeStyles,
    createMuiTheme,
    ThemeProvider,
    Button,
    Card,
    CardContent
} from '@material-ui/core'
import { theme } from '@approbado/core';
import Dialog from './Dialog'

const cardStyles = {
    borderRadius: '12px !important',
    boxShadow: "4px 4px 90px 0px #00000014",
    height: '18rem',
    padding: '3rem 1rem',
    margin: '2rem',
    width: '15rem',
    background: '#fff'
};

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row'
        }
    },
    whiteCard: cardStyles,
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'center',
        height: '100%'
    },
    planName: {
        fontSize: '20px',
        weight: '700',
        textAlign: 'center',
        lineHeight: '26.6px'
    },
    planPrice: {
        fontSize: '40px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '53px',
        letterSpacing: '0em',
        textAlign: 'center',
        color: theme.palette.secondary.main
    },
    planSubtitle: {
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "300",
        lineHeight: "26px",
        letterSpacing: "0em",
        textAlign: "center"
    },
    darkCard: {
        ...cardStyles,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.background.default
    },
    additionalInfo: {
        fontSize: '12px',
        fontWeight: '300'
    }
}))

const plans = [
    {
        title: 'Free',
        price: '0.00',
        subtitle: 'Freemium para siempre',
        additionalInfo: 'No necesitas tarjeta de crédito'
    },
    {
        title: 'Premium',
        price: '8.00',
        subtitle: 'Accede a lo mejor',
        additionalInfo: 'Periodo de reembolso de 30 días'
    }
]

const PlansList = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box className={classes.root} component='div'>
            {plans.map((plan, i) => (
                <Card className={(i % 2 === 0) ? classes.whiteCard : classes.darkCard}>
                    <CardContent className={classes.content}>
                        <Typography
                            variant="subtitle1"
                            className={classes.planName}
                        >
                            {plan.title}
                        </Typography>
                        <Typography variant="h4" className={classes.planPrice}>$ {plan.price}</Typography>
                        <Typography variant="subtitle1" className={classes.planSubtitle}>
                            {plan.subtitle}
                        </Typography>
                        <Button onClick={handleClickOpen}>
                            Comenzar
                        </Button>
                        <Typography variant="subtitle2" className={classes.additionalInfo}>
                            {plan.additionalInfo}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
            <Dialog open={open} handleClose={handleClose} classes={classes} />
        </Box>
    )
}

const PlansListWithTheme = props => (
    <ThemeProvider theme={createMuiTheme(theme)}>
        <PlansList {...props} />
    </ThemeProvider>
);

export default PlansListWithTheme;
