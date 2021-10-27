import axios from "axios";
import { Book } from "../models/Book";
export default function BookDetails(searchParams:Book){
    return axios
    .get("https://openlibrary.org/works/OL45883W/Fantastic_Mr._Fox",{
    params:{
        q:searchParams.query
    },
})
    .then((res)=>res.data)
};