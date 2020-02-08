/**
 * Interfaces da aplicação
 */

export type Dispatch = React.Dispatch<IAction>

export interface IState {
    episodes: Array<IEpisode>,
    favourites: Array<IEpisode>
}

export interface IAction {
    type: string,
    payload: Array<IEpisode> | any
}

export interface IEpisode {
    id: number,
    name: string,
    airdate: string,
    airstamp: string,
    image: { medium: string, original: string },
    number: number,
    runtime: number,
    season: number,
    summary: string,
    url: string
}

export interface IEpisodesProps {
    episodes: IEpisode[],
    store: { state: IState, dispatch: Dispatch },
    toggleFavouriteEpisode: (state: IState, dispatch: Dispatch, episode: IEpisode) => IAction,
    favourites: Array<IEpisode>
}
