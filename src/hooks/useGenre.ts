import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenre = () => useData<Genre>("/genres"); // hiding endpoint details in hook

export default useGenre;

// generic response implemented in useData() hook

// interface FetchGenreResponse {
//     count: number;
//     results: Genre[];
// }

// useGenre implementation when generic hook useData was not implemented

// const useGenre = () => {
//     const [genres, setGenres] = useState<Genre[]>([]);
//     const [error, setError] = useState("");
//     const [isLoading, setLoading] = useState(false);

//     useEffect(() => {
//         const controller = new AbortController();
//         setLoading(true);
//         apiClient
//             .get<FetchGenreResponse>("/genres", { signal: controller.signal })
//             .then((res) => {
//                 setGenres(res.data.results);
//                 setLoading(false);
//             })
//             .catch((err) => {
//                 if (err instanceof CanceledError) return;
//                 setError(err.message);
//                 setLoading(false);
//             });
//         return () => controller.abort();
//     }, []);

//     return { genres, error, isLoading };
// };
