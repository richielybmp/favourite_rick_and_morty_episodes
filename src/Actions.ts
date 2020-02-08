import { IState, IEpisode, IAction } from "./interfaces";

export const fetchDataAction = async (dispatch: any) => {
    const data = await fetch("https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes");
    const dataJson = await data.json();

    return dispatch({
        type: "FETCH_DATA",
        payload: dataJson._embedded.episodes
    })
}

export const toggleFavouriteEpisode = (state: IState, dispatch: any, episode: IEpisode): IAction => {
    const episodeInFav = state.favourites.includes(episode);

    if (episodeInFav) {
        const episodes = state.favourites.filter(fav => fav.id !== episode.id)
        const dispatchObj = { type: "REMOVE_FAV", payload: episodes }

        localStorage.setItem('local_fav_ep', JSON.stringify(episodes))

        return dispatch(dispatchObj)

    }
    else {
        const episodes = [...state.favourites, episode]
        const dispatchObj = { type: "ADD_FAV", payload: episodes }

        localStorage.setItem('local_fav_ep', JSON.stringify(episodes))

        return dispatch(dispatchObj)
    }

}
