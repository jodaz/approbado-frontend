import * as React from 'react';
import { makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import LocalOfferIcon from '@material-ui/icons/LocalOfferOutlined';
import cardStyles from '@approbado/lib/styles/cardStyles'
import OptionsCardMenu from '@approbado/lib/components/OptionsCardMenu';
import { Link } from 'react-router-dom';
import DeleteButton from '@approbado/lib/components/DeleteButton'

const useStyles = makeStyles(theme => ({
    tag: {
        display: 'flex',
        backgroundColor: theme.palette.info.main,
        height: '2em',
        borderRadius: '6px',
        width: '8em',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.palette.secondary.light,
        marginTop: '1em'
    },
    tagIcon: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 0.8em'
    },
}));

const OptionsMenu = props => (
    <OptionsCardMenu>
        <DeleteButton
            basePath='trivias'
            confirmColor='warning'
            confirmTitle='Eliminar trivia'
            confirmContent={'¿Está seguro que desea eliminar esta trivia?'}
            label={'Eliminar'}
            {...props}
        />
    </OptionsCardMenu>
);

const TriviaCard = ({ data, id }) => {
    const classes = { ...cardStyles(), ...useStyles() };

    return (
        <Card className={classes.root}>
            <CardHeader
                action={<OptionsMenu record={data} />}
                title={
                    <Link to={`trivias/${data.id}/show`} className={classes.link}>
                        {data.name}
                    </Link>
                }
                className={classes.cardHeader}
            />
            <CardContent className={classes.cardContent}>
                <div className={classes.innerContent}>
                    <Typography variant="span" component="span">
                        {data.subthemesCount} subtemas
                    </Typography>
                    <Divider className={classes.divider} />
                    <Typography variant="span" component="span">
                        {data.filesCount} archivos
                    </Typography>
                </div>
                <Box component='div' className={classes.tag}>
                    <LocalOfferIcon fontSize="small" />
                    <Typography variant="span" component="span" style={{ paddingLeft: '5px' }}>
                        Intermedio
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

TriviaCard.propTypes = {
    data: PropTypes.object,
    id: PropTypes.number
}

export default TriviaCard
