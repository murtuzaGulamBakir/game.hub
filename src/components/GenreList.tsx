import useData from "../hooks/useData";
import useGenre, { Genre } from "../hooks/useGenre";
import {
    HStack,
    List,
    ListItem,
    Image,
    Text,
    Spinner,
    Button,
    Heading,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
    const { data, isLoading, error } = useGenre();

    if (error) return null;
    if (isLoading) return <Spinner />;
    // const { data } = useData<Genre>("genres");
    /* not using generic hook directly ,
       bcz component should not be aware of url endpoint 'genre'
       it should not be aware of anything about making http request   */

    return (
        <>
            <Heading fontSize="2xl" marginBottom={3}>
                Genres
            </Heading>
            <List>
                {data.map((genre) => (
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack>
                            <Image
                                boxSize="32px"
                                borderRadius="8px"
                                src={getCroppedImageUrl(genre.image_background)}
                                objectFit="cover"
                            ></Image>
                            <Button
                                onClick={() => onSelectGenre(genre)}
                                fontSize="lg"
                                variant="link"
                                fontWeight={
                                    genre.id === selectedGenre?.id
                                        ? "bold"
                                        : "normal"
                                }
                                whiteSpace="normal"
                                textAlign="left"
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;
