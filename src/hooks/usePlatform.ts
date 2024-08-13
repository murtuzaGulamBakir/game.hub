import useData from "./useData";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

const endPoint = "platforms/lists/parents";

const usePlatform = () => useData<Platform>(endPoint);

export default usePlatform;
