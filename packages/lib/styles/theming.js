import { alpha } from '@material-ui/core/styles/colorManipulator';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

const breakpoints = createBreakpoints({})

const palette = {
    primary: {
        main: '#07021A',  // Negro primario
        light: '#B7B7B7', // Plomo cuaternario
        dark: '#011C2C',  // Negro
    },
    secondary: {
        main: '#FFE835',   // Amarillo segundario
        light: '#E8E8E8',
        dark: '#283436', // Gray
    },
    error: {
        main: '#E02340',  // Rojo
    },
    background: {
        default: '#FFFFFF',
        dark: '#F9F9F9',
        light: '#F5F5F5'
    },
    info: {
        main: '#2280ED', // Azul primario,
        light: '#6D6D6D', // Plomo secundario,
        dark: '#333333', // Plomo secndario
        success: '#00B94A', // Verde
        blue: '#232730'
    }
};

const theme = {
    palette: palette,
    typography: {
        fontFamily: "'SegoeUI', 'sans-serif'",
    },
    shape: {
        borderRadius: 10,
    },
    overrides: {
        MuiPickersCalendarHeader: {
            switchHeader: {
                textTransform: 'capitalize',
                padding: '0 1rem'
            },
            daysHeader: {
                textTransform: 'uppercase',
                '& > *': {
                    fontWeight: '600 !important'
                }
            },
            iconButton: {
                borderRadius: '50%'
            }
        },
        MuiPickersSlideTransition: {
            transitionContainer: {
                '& > *': {
                    fontWeight: 600
                }
            }
        },
        MuiPickersToolbar: {
            toolbar: {
                backgroundColor: '#fff',
            },
        },
        MuiPickersDay: {
            day: {
                color: '#000',
                fontWeight: '600 !important',
                borderRadius: '50%',
                '&:hover': {
                    backgroundColor: "rgba(63, 60, 251, 0.5)",
                    borderRadius: '50%'
                }
            },
            daySelected: {
                color: '#1D70D0',
                backgroundColor: "rgba(63, 60, 251, 0.3)",
                borderRadius: '50%',
                '&:hover': {
                    backgroundColor: "rgba(63, 60, 251, 0.3)",
                }
            },
            hidden: {
                opacity: 1,
                color: '#A6A6A6',
            },
            current: {
                color: '#1D70D0',
                background: "rgba(63, 60, 251, 0.1) !important",
                borderRadius: '50%'
            },
        },
        MuiPickersModal: {
            dialogAction: {
                color: '#fff',
            },
        },
        RaLayout: {
            content: {
                marginTop: '4em',
                padding: '0 1rem !important',
                display: 'flex',
                flexDirection: 'column',
                [breakpoints.up('sm')]: {
                    padding: '0 2.5rem 3rem 2.5rem !important'
                }
            },
            appFrame: {
                marginTop: '0 !important'
            }
        },
        RaTopToolbar: {
            root: {
                alignItems: 'center',
                justifyContent: 'space-between'
            },
        },
        RaButton: {
            button: {
                borderRadius: '6px',
                padding: '0.5em 1em',
                textTransform: 'none',
                fontSize: '1em',
                "&[aria-label=Create]": {
                    backgroundColor: palette.secondary.main,
                }
            }
        },
        MuiMenu: {
            paper: {
                borderRadius: '6px !important',
            }
        },
        MuiPaper: {
            elevation1: {
                boxShadow: 'none',
            },
            root: {
                border: '1px solid #e0e0e3',
                backgroundClip: 'padding-box',
            },
            rounded: {
                borderRadius: '3px !important'
            }
        },
        MuiButton: {
            root: {
                borderRadius: '6px',
                fontWeight: 600
            },
            label: {
                textTransform: 'none',
                margin: '0 0.2rem'
            },
            textPrimary: {
                backgroundColor: palette.secondary.main,
                '&:hover': {
                    backgroundColor: alpha(palette.secondary.main, 0.7)
                }
            },
            outlinedSecondary: {
                color: palette.primary.main,
                background: '#fff',
                border: `1px solid ${palette.primary.light}`,
                transition: '300ms',
                '&:hover': {
                    color: alpha(palette.primary.light, 1),
                    border: `1px solid ${alpha(palette.primary.light, 0.99)}`,
                }
            },
            containedPrimary: {
                color: palette.primary.main,
                backgroundColor: palette.secondary.main,
                boxShadow: 'none',
                transition: '300ms',
                '&:hover': {
                    backgroundColor: alpha(palette.secondary.main, 0.99)
                }
            }
        },
        MuiInputBase: {
            root: {
                border: `1px solid ${palette.primary.light}`,
                borderRadius: 6,
                backgroundColor: palette.background.default,
                padding: '0 !important',
                fontSize: 16,
                borderRadius: '5px',
                transition: "none",
                marginBottom: '0.3rem',
                boxShadow: 'none',
                '&.Mui-focused': {
                    borderRadius: 6,
                    color: `${palette.primary.main}`,
                    border: `1px solid ${palette.info.main}`,
                    boxShadow: `0px 0px 1px 1px ${alpha(palette.info.main, 0.7)}`
                }
            },
            input: {
                backgroundColor: alpha('#fff', 0.8),
                padding: '0.7rem !important',
                borderRadius: 6
            }
        },
        MuiInputLabel: {
            animated: {
                transition: 'none'
            }
        },
        MuiAppBar: {
            root: {
                boxShadow: `0px 1px 5px ${palette.primary.light} !important`,
            },
            colorSecondary: {
                color: '#808080',
                backgroundColor: '#fff',
            },
        },
        MuiLinearProgress: {
            colorPrimary: {
                backgroundColor: '#f5f5f5',
            },
            barColorPrimary: {
                backgroundColor: '#d7d7d7',
            },
        },
        MuiList: {
            root: {
                padding: '0 !important'
            }
        },
        MuiFilledInput: {
            root: {
                transition: "none !important",
                borderRadius: '5px !important',
                '&$disabled': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                }
            },
            underline: {
                '&::before': {
                    content: 'none'
                },
                '&::after': {
                    content: 'none'
                }
            }
        },
        MuiInput: {
            underline: {
                '&::before': {
                    content: 'none'
                },
                '&::after': {
                    content: 'none'
                }
            }
        },
        MuiFormHelperText: {
            contained: {
                marginLeft: '7px'
            }
        },
        RaSaveButton: {
            button: {
                backgroundColor: palette.secondary.main,
                color: palette.primary.main,
                borderRadius: '6px',
                textTransform: 'none',
                fontSize: '1em',
                padding: '0.5em 2em'
            }
        },
        RaToolbar: {
            toolbar: {
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: 'transparent',
                justifyContent: "flex-end"
            }
        },
        MuiSnackbarContent: {
            root: {
                border: 'none',
            },
        },
        RaSidebar: {
            root: {
                height: 'inherit',
                [breakpoints.down('xs')]: {
                    backgroundColor: 'transparent',
                },
            },
            fixed: {
                width: 'inherit',
                height: 'inherit'
            },
            paper: {
                backgroundColor: `${palette.primary.main} !important`
            }
        },
        PrivateTabIndicator: {
            colorPrimary: {
                backgroundColor: palette.info.main
            }
        },
        MuiFormLabel: {
            root: {
                color: palette.primary.main
            }
        },
        MuiInputAdornment: {
            root: {
                color: '#ced4da',
                marginLeft: '8px !important'
            }
        },
        MuiDialogTitle: {
            root: {
                padding: '0 !important'
            }
        },
        MuiDialogContent: {
            root: {
                display: 'flex',
                flexDirection: 'column',
                padding: '1rem 2rem !important',
                justifyContent: 'space-around',
                alignItems: 'center'
            }
        },
        MuiDialog: {
            paper: {
                borderRadius: '6px !important',
                border: 'none'
            }
        },
        MuiTypography: {
            root: {
                '&::selection': {
                    backgroundColor: palette.secondary.main,
                    color: palette.primary.main
                }
            }
        },
        MuiTooltip: {
            tooltip: {
                borderRadius: '8px',
                backgroundColor: palette.primary.dark,
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '20px'
            }
        },
        MuiCheckbox: {
            colorSecondary: {
                color: `${palette.info.main} !important`
            }
        },
        MuiGrid: {
            item: {
                width: '100%'
            }
        },
        RaAppBar: {
            toolbar: {
                [breakpoints.down('xs')]: {
                    backgroundColor: '#fff',
                    flexDirection: 'row !important'
                },
            }
        },
        MuiIconButton: {
            root: {
                padding: '0.5rem',
                borderRadius: '25%'
            }
        },
        MuiFab: {
            root: {
                backgroundColor: 'unset',
                '&:hover': {
                    backgroundColor: `${alpha(palette.secondary.main, 0.8)} !important`
                }
            }
        }
    },
    props: {
        MuiButtonBase: {
            // disable ripple for perf reasons
            disableRipple: true
        },
    }
}

export default theme;
