import React from 'react';
import Image from 'next/image';
import Card from '@/components/Card';
import { fetchRecipes } from '@/library/api-call';
import Slider from '@/components/Slider';

export default async function HomePage() {
  const recipes = await fetchRecipes();
  const featureRecipes = recipes.slice(0, 4);
  const mostLikeRecipes = recipes.slice(4, 8);
  const TopRatingRecipes = recipes.slice(4, 8);
  const sliderImage = recipes.slice(12, 20)
  return (
    <div className='w-full'>
      {/* Banner Section */}
      <section className='grid grid-cols-2 mt-5 p-4 gap-4'>
        <div>
          <h1 className=' text-5xl fon-bold text-teal-600'> Recipe Webite </h1>
          <p className='my-4 text-2xl'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui alias, iusto a nobis eaque tempore magnam quia officiis ducimus, cupiditate blanditiis molestias, ad dicta nisi odit incidunt! Itaque, voluptate neque?</p>
        </div>
        <Slider data={sliderImage} />
      </section>

      <div className='container mx-auto mt-10 p-4'>
        {/* Feature Section */}
        <section>
          <h2 className=' font-bold text-3xl my-5'>Feature Recipes</h2>
          <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
              featureRecipes.map((recipe) => (
                <Card key={recipe.id} name={recipe.name} image={recipe.image} prepTimeMinutes={recipe.prepTimeMinutes} cookTimeMinutes={recipe.cookTimeMinutes} />
              ))
            }
          </div>
        </section>

        {/* Most Liked Section */}
        <section>
          <h2 className=' font-bold text-3xl my-5'>Most Liked Recipes</h2>
          <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
              mostLikeRecipes.map((recipe) => (
                <Card key={recipe.id} name={recipe.name} image={recipe.image} prepTimeMinutes={recipe.prepTimeMinutes} cookTimeMinutes={recipe.cookTimeMinutes} />
              ))
            }
          </div>
        </section>

        {/* Top Rating Section */}
        <section>
          <h2 className=' font-bold text-3xl my-5'>Top Rating Recipes</h2>
          <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {
              TopRatingRecipes.map((recipe) => (
                <Card key={recipe.id} name={recipe.name} image={recipe.image} prepTimeMinutes={recipe.prepTimeMinutes} cookTimeMinutes={recipe.cookTimeMinutes} />
              ))
            }
          </div>
        </section>
      </div>

    </div>
  );
}
