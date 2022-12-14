import Menu from '@approbado/lib/layouts/Menu';
import MenuItems from './MenuItems';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@approbado/lib/layouts/AppBar';
import Notification from '@approbado/lib/components/Notification'
import Sidebar from '@approbado/lib/layouts/Sidebar';

const CustomSidebar = props => <Sidebar {...props} size={200} />;

const CustomMenu = props => (
    <Menu {...props}>
        <MenuItems />
    </Menu>
)

const styles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1,
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default,
        position: 'relative',
        minWidth: 'fit-content',
        width: '100%',
        color: theme.palette.getContrastText(
            theme.palette.background.default
        ),
    },
    appFrame: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        [theme.breakpoints.up('xs')]: {
            marginTop: theme.spacing(6),
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: theme.spacing(7),
        },
    },
    contentWithSidebar: {
        display: 'flex',
        flexGrow: 1,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        flexBasis: 0,
        padding: props => (!props.disablePaddingContent)
            ? '0 1rem !important'
            : 'unset',
        marginTop: '3em',
        paddingTop: '8px',
        paddingLeft: 0
    },
}));

const DefaultLayout = ({ children, ...rest }) => {
    const classes = styles(rest)

    return (
        <>
            <div className={classes.root}>
                <AppBar />
                <main className={classes.contentWithSidebar}>
                    <CustomSidebar>
                        <CustomMenu />
                    </CustomSidebar>
                    <div id="main-content" className={classes.content}>
                        {children}
                    </div>
                </main>
            </div>

            <Notification />
        </>
    )
};

DefaultLayout.defaultProps = {
    disablePaddingContent: false
}

export default DefaultLayout
