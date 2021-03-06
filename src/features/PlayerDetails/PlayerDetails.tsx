import React, { useEffect } from 'react';
import { fetchPlayer, selectPlayer } from '../../slices/playerSlice';
import { Box, Button, Center, Flex, Image, Spinner } from '@chakra-ui/react';
import { PLAYER_IMG_URL } from '../../constants/api.constants';
import { chakra } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const PlayerDetails = ({ match: { params } }: { match: { params: { id: string } } }) => {
  const { player, status } = useAppSelector(selectPlayer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPlayer(params.id));
  }, [dispatch, params]);

  return (
    <div>
      {<Box>
        <Box position="absolute" top={{ base: -20, md: -10 }} left={2}>
            <Link to="/">
              <Button colorScheme="teal" variant="solid"> Go back</Button>
            </Link>
          </Box>
        <Center w={{ base: '96%', md: '50%' }} m={{ base: '100px auto', md: '50px auto' }} py="30px" px={{ base: '10px', md: '50px' }} bg='lightblue' borderRadius='10px' color='white'>
          <Box w="100%">
            {status === 'loading' ? (
              <Box textAlign="center">
                <Spinner thickness='6px' emptyColor='gray.200' m={30} size='xl' color='blue' />
              </Box>
            ) : player.id ? (
              <Box className='player-details'>
                <Box maxW="50%" m="0 auto">
                  <Image m="10px auto" borderRadius="lg" src={`${PLAYER_IMG_URL}/${player.last_name}/${player.first_name}`} fallbackSrc="https://res.cloudinary.com/ducmbpfde/image/upload/v1625836216/nba_logo_npw9re.png" alt="player_image_not_found_😢" />
                </Box>
                <chakra.h1 fontSize='2em' textAlign='center' my='.5em' className='fm-my-2'>
                  {player.first_name} {player.last_name}
                </chakra.h1>
                <Flex flexDirection='column' fontSize='1.5em'>
                  <Box style={{ display: 'flex', justifyContent: 'space-between' }} w="100%">
                    <Box>Position:</Box>
                    <Box>{player.position}</Box>
                  </Box>
                  <Box style={{ display: 'flex', justifyContent: 'space-between' }} w="100%">
                    <Box>Height feet:</Box>
                    <Box>{player.height_feet === null ? 'N/A' : player.height_feet}</Box>
                  </Box>
                  <Box style={{ display: 'flex', justifyContent: 'space-between' }} w="100%">
                    <Box>Height inches:</Box>
                    <Box>{player.height_inches === null ? 'N/A' : player.height_inches}</Box>
                  </Box>
                  <Box style={{ display: 'flex', justifyContent: 'space-between' }} w="100%">
                    <Box>
                      Weight pounds:
                    </Box>
                    <Box>
                      {player.weight_pounds === null ? 'N/A' : player.weight_pounds}
                    </Box>
                  </Box>
                </Flex>
                <Flex flexDirection='column' fontSize='1.5em'>
                  <Box style={{ display: 'flex', justifyContent: 'space-between' }} w="100%">
                    <Box>Full name:</Box>
                    <Box>{player.team.full_name}</Box>
                  </Box>
                  <Box style={{ display: 'flex', justifyContent: 'space-between' }} w="100%">
                    <Box>Division:</Box>
                    <Box>{player.team.division}</Box>
                  </Box>
                  <Box style={{ display: 'flex', justifyContent: 'space-between' }} w="100%">
                    <Box>Conference:</Box>
                    <Box>{player.team.conference}</Box>
                  </Box>
                  <Box style={{ display: 'flex', justifyContent: 'space-between' }} w="100%">
                    <Box>
                      City:
                    </Box>
                    <Box>
                      {player.team.city}
                    </Box>
                  </Box>
                </Flex>
              </Box>
            ) : (
              <Box textAlign="center">This player is resting, please come back later 🙃</Box>
            )}
          </Box>
          </Center>
        </Box>
      }
    </div>
  );
};

export default PlayerDetails;
