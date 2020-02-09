import React, { useContext, useEffect } from 'react'
import { Store } from '../Store'
import { toggleFavouriteEpisode } from '../Actions'
import { IEpisodesProps } from '../interfaces'

const EpisodeList = React.lazy(() => import('../components/EpisodesList'))

function Favourites(): JSX.Element {
    const { state, dispatch } = useContext(Store)

    useEffect(() => {
        const local_fav = localStorage.getItem('local_fav_ep')
        if (local_fav)
            dispatch({ payload: (JSON.parse(local_fav)), type: 'ADD_FAV' });
    }, [])

    const props: IEpisodesProps = {
        episodes: state.favourites,
        store: { state, dispatch },
        toggleFavouriteEpisode: toggleFavouriteEpisode,
        favourites: state.favourites
    }

    return (
        <React.Suspense fallback={<div>loading ...</div>}>
            <div className="episode-layout">
                <EpisodeList {...props} />
            </div>
        </React.Suspense>
    )
}

export default Favourites
