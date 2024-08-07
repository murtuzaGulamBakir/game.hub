import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "84b3e33905a846a0aa2203d431dedc2e",
    },
});
