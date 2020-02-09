import React, { useEffect, useContext } from 'react'
import { Store } from '../Store';
import { IEpisodesProps } from '../interfaces';
import { fetchDataAction, toggleFavouriteEpisode } from '../Actions';

const EpisodeList = React.lazy(() => import('../components/EpisodesList'))

function Home() {

    const { state, dispatch } = useContext(Store)
    useEffect(() => {
        state.episodes.length === 0 && fetchDataAction(dispatch)
    })

    const props: IEpisodesProps = {
        episodes: state.episodes,
        store: { state, dispatch },
        toggleFavouriteEpisode,
        favourites: state.favourites
    }

    return (
        <>
            <React.Suspense fallback={<div>loading...</div>}>
                <section className="episode-layout">
                    <EpisodeList {...props} />
                </section>
            </React.Suspense>
        </>
    )
}

export default Home
