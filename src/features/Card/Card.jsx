import React from 'react';
import { Box, Flex, Image, Spinner } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { PLAYER_IMG_URL } from '../../constants/api.constants';
import styles from './Card.module.css';


const Card = ({player}) => {
  return (
    <Link to={`/player/${player.id}`} key={player.id}>
      <Box className={styles.playerCard} m={{ base: "5px 0", md: "5px" }} maxW={{ base: "", md: "345px" }} flex={{ base: "1 1 auto", md: "" }} textAlign="center" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Box p="6">
          <Image m="10px auto" borderRadius="lg" src={`${PLAYER_IMG_URL}/${player.last_name}/${player.first_name}`} fallbackSrc="https://res.cloudinary.com/ducmbpfde/image/upload/v1625836216/nba_logo_npw9re.png" alt="player_image_not_found_😢" />
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            {player.first_name} {player.last_name}
          </Box>
          <Box>
            <Box as="span" color="gray.600" fontSize="sm" ml={2}>
              Position: {player.position}
            </Box>
          </Box>
          <Box>
            <Box as="span" color="gray.600" fontSize="sm" ml={2}>
              Team: {player.team.full_name}
            </Box>
          </Box>
        </Box>
      </Box>
    </Link>
  );
}

export default Card;
