import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPlayers, selectPlayers } from './playersSlice';
import { Flex, Spinner } from '@chakra-ui/react';
import Card from '../Card/Card';

export function Players() {
  const { players, status } = useSelector(selectPlayers);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchPlayers()), [dispatch]);

  return (
    <div>
      <Flex align="center" justify="center" wrap="wrap" className="">
        {status === 'loading' ? (
          <Spinner thickness="6px" emptyColor="gray.200" mt={30} size="xl" color="blue" />
        ) :
          (
            players?.length && players.map(player => (
              <Card player={player} key={player.id}></Card>
            ))
          )
        }
      </Flex>
    </div>
  );
}
