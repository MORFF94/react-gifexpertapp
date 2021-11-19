import React, {useState} from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
import './index.css'
const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    return (
        <>
        <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories } />
            <hr/>

            {/*<button onClick={() => handleAdd('hunter') }>Agregar</button>*/}
            <ul>
                { categories.map( category => (
                    <GifGrid key={ category } category={ category }/>
                )) }
            </ul>
        </>
    )
}

export default GifExpertApp