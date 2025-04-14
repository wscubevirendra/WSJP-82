import Card from '@/components/Card'
import { fetchRecipes } from '@/library/api-call'
import React from 'react'

export default async function RecipesPage() {
    const recipes = await fetchRecipes()
    return (
        <div className='container grid grid-cols-4 gap-5 mx-auto p-4'>
            {
                recipes.map((recipe) => {
                    return (
                        <Card key={recipe.id} id={recipe.id} name={recipe.name} image={recipe.image} prepTimeMinutes={recipe.prepTimeMinutes} cookTimeMinutes={recipe.cookTimeMinutes} />
                    )
                })
            }
        </div>
    )
}
