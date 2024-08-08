import useData from "../hooks/useData";
import useGenre, { Genre } from "../hooks/useGenre";

const GenreList = () => {
    const { data } = useGenre();

    // const { data } = useData<Genre>("genres");
    /* not using generic hook directly ,
       bcz component should not be aware of url endpoint 'genre'
       it should not be aware of anything about making http request   */

    return (
        <ul>
            {data.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
            ))}
        </ul>
    );
};

export default GenreList;
