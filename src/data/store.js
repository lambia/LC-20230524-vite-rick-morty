import { reactive } from "vue";

export const store = reactive({
    apiUrl: "https://rickandmortyapi.com/api/character",
    loading: true,
    nomiPersonaggi: ["Tutti", "Rick", "Morty"],
    personaggi: [],
    /* Il singolo Personaggio nell'array sarà un oggetto con proprietà:
        id: Number,
        status: String,
        species:String,
        type: String,
        gender: String,
        origin: {
            name: String,
            url: urlString
        },
        location: {
            name: String,
            url: urlString
        },
        image: urlString,
        episode: [
            urlString
        ],
        url: urlString,
        created: "2017-11-04T18:50:21.651Z"
    */
});
