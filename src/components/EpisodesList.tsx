import React from 'react';
import { IEpisode } from '../interfaces';

function EpisodesList(props: any, ) {

    const { episodes, toggleFavouriteEpisode, favourites, store } = props;

    const { state, dispatch } = store;
    return (
        <>
            {episodes.length > 0 ?
                (<>
                    {
                        episodes.map((episode: IEpisode) => {
                            return (
                                <section key={episode.id} className="episode-box">
                                    <a target="_blank" rel="noopener noreferrer" href={episode.url}>
                                        <img src={episode.image.medium} alt={`Rick and Morty episode ${episode.name}`} />
                                    </a>
                                    <div>{episode.name}</div>
                                    <section style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div>
                                            Season: {episode.season} Number: {episode.number}
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => toggleFavouriteEpisode(state, dispatch, episode)}>
                                            {favourites.find(fav => fav.id === episode.id) ? "I don't like it" : "Love it"}
                                        </button>
                                    </section>
                                </section>
                            )
                        })
                    }
                </>)
                :
                (<div className="empty-episode-list">Selecione seus episódios favoritos</div>)
            }
        </>)
}

export default EpisodesList
