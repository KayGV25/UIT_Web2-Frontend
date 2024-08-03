import { useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

export default function RecipePage(){
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    if(loading) return <Loading />

    return(
        <>
            
        </>
    )
}