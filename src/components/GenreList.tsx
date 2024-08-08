import useData from "../hooks/useData";
import useGenre, { Genre } from "../hooks/useGenre";
import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
    const { data, isLoading, error } = useGenre();

    if (error) return null;
    if (isLoading) return <Spinner />;
    // const { data } = useData<Genre>("genres");
    /* not using generic hook directly ,
       bcz component should not be aware of url endpoint 'genre'
       it should not be aware of anything about making http request   */

    return (
        <List>
            {data.map((genre) => (
                <ListItem key={genre.id} paddingY="5px">
                    <HStack>
                        <Image
                            boxSize="32px"
                            borderRadius="8px"
                            src={getCroppedImageUrl(genre.image_background)}
                        ></Image>
                        <Text fontSize="lg">{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
