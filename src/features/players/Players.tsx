import React, { useEffect } from 'react';
import { fetchPlayers, selectPlayers } from '../../slices/playersSlice';
import { Flex, Spinner } from '@chakra-ui/react';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

export function Players() {
  const { players, status } = useAppSelector(selectPlayers);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPlayers());
  }, [dispatch]);

  return (
    <div>
      <Flex align="center" justify="center" wrap="wrap" className="">
        {status === 'loading' ? (
          <Spinner thickness="6px" emptyColor="gray.200" mt={30} size="xl" color="blue" />
        ) :
          (
            players?.length ? (
              players.map(player => (
                <Link to={`/player/${player.id}`} key={player.id}>
                  <Card {...player}></Card>
                </Link>
              ))
            ) : (
              <p>Our players are resting, please come back later 🙃</p>
            )
          )
        }
      </Flex>
    </div>
  );
}
