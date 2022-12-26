import React from 'react'
import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {
    const [categories, setcategories] = useState(["Rick And Morty"])
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setcategories([newCategory]);
    }
    const clear = () => {
        setcategories([])
    }
    return (
        <>
            {/*Titulo*/}
            <h1>GifExpertApp</h1>ssasd

            {/*Inuput*/}
            <AddCategory onNewCategory={onAddCategory} />

            {/* Gif List */}
            {categories.map((category) =>
            (
                <GifGrid key={category} category={category} />
            )
            )}
            <button onClick={clear}> clear</button>
        </>
    )
}
