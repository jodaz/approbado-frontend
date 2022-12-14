import * as React from 'react'
import LazyLoader from '@approbado/lib/components/LazyLoader'
import { useTriviaState } from '@approbado/lib/hooks/useTriviaSelect'
import { history } from '@approbado/lib/providers'

const PlayTriviaGame = React.lazy(() => import('./Play'))
const ResumeTriviaGame = React.lazy(() => import('./Resume'))
const FinishedTriviaGame = React.lazy(() => import('./Finished'))
const OutOfTime = React.lazy(() => import('./OutOfTime'))
const WaitingUsers = React.lazy(() => import('./WaitingUsers'))
const WinAward = React.lazy(() => import('./WinAward'))

export default function() {
    const { selected, configs: { view } } = useTriviaState();

    React.useEffect(() => {
        if (!selected) {
            history.push('/trivias');
        }
    }, [selected])

    return (
        <LazyLoader>
            {(view == 'playing')
                ? <PlayTriviaGame />
                : (view == 'resume') ?
                    <ResumeTriviaGame />
                : (view == 'timeout') ?
                    <OutOfTime />
                : (view == 'waiting') ?
                    <WaitingUsers />
                : (view == 'winning') ?
                    <WinAward />
                : <FinishedTriviaGame />}
        </LazyLoader>
    )
}
