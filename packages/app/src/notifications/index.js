import * as React from 'react'
// Components
import { useMediaQuery } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Banner from './Banner'
import useFetch from '@approbado/lib/hooks/useFetch'
import NotificationCard from './NotificationCard'
import Spinner from '@approbado/lib/components/Spinner'
import {
    useNotificationDispatch,
    useNotificationState
} from '@approbado/lib/hooks/useNotifications'
import ErrorMessage from '@approbado/lib/components/ErrorMessage'

const generateNullData = results => Array.from({ length: results }).map(_ => null)

const results = 5

const Index = () => {
    const [perPage, setPerPage] = React.useState(results)
    const isXSmall = useMediaQuery(theme =>
        theme.breakpoints.down('sm'))
    const {
        loading,
        error,
        data,
        hasMore
    } = useFetch('/notifications', {
        perPage: perPage,
        page: 1
    })
    const { items, total } = useNotificationState()
    const { set } = useNotificationDispatch();

    const observer = React.useRef()
    const lastItemRef = React.useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                set(prevItems => {
                    return [...prevItems, ...generateNullData(results)]
                })
                setPerPage(prevPerPage => prevPerPage + results)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    React.useEffect(() => {
        if (data.length) {
            set(data)
        }

        if (data.length == 0 && !loading) {
            set([])
        }
    }, [data, loading])

    React.useEffect(() => {
        set(generateNullData(results))
    }, [])

    return (
        <Box display="flex" p={isXSmall ? '0' : '2rem'}>
            <Box
                display="flex"
                flexDirection='column'
                width='100%'
            >
                {total ? items.map((item, index) => {
                    if (items.length === index + 1) {
                        return (
                            <NotificationCard
                                data={item}
                                index={index}
                                rootRef={lastItemRef}
                            />
                        );
                    } else {
                        return <NotificationCard index={index} data={item} />
                    }
                }) : (
                    <ErrorMessage>
                        No tiene notificaciones disponibles.
                    </ErrorMessage>
                )}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    padding: '2rem 0'
                }}>
                    {(loading) && <Spinner />}

                    {(error) && <ErrorMessage />}
                </Box>
            </Box>
            {(!isXSmall) && <Banner />}
        </Box>
    )
}

export default Index
