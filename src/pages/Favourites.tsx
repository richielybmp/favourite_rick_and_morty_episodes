import React, { useContext } from 'react'
import { Store } from '../Store'
import { toggleFavouriteEpisode } from '../Actions'
import { IEpisodesProps } from '../interfaces'

const EpisodeList = React.lazy(() => import('../components/EpisodesList'))


function Favourites(): JSX.Element {
    const { state, dispatch } = useContext(Store)

    const local_fav = localStorage.getItem('local_fav_ep')
    console.log(JSON.parse(local_fav));

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
