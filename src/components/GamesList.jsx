import React from 'react';
import InfiniteScroll from "react-infinite-scroller";
import {useDispatch} from "react-redux";

import {useHistory} from "../store/history/history-selector";
import GamesListItem from "./GamesListItem";
import {fetchGames} from "../store/history/history-actions";

import {WrapperGamesList} from "./styles";

const GamesList = () => {
	const dispatch = useDispatch();
	const {games, hasMore} = useHistory()
	return (
		<WrapperGamesList>
			<InfiniteScroll
				loadMore={() => {
					dispatch(fetchGames())
				}}
				hasMore={hasMore}
			>
				{games.map(game => <GamesListItem key={game.id} {...game}/>)}
			</InfiniteScroll>
		</WrapperGamesList>
	);
};

export default GamesList;
