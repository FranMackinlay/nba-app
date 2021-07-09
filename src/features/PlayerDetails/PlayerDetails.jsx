import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlayer, selectPlayer } from '../players/playerSlice';

const PlayerDetails = ({match: {params}}) => {

  const {player, status } = useSelector(selectPlayer);
  console.log(`player, status`, player, status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlayer(params.id));
  }, [dispatch, params])

  return (
    <div>

    </div>
  );
}

export default PlayerDetails;
