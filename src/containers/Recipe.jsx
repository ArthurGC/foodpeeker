/* eslint-disable  implicit-arrow-linebreak */
/* eslint-disable object-curly-newline */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchRecipe } from '../actions';
import RecipeCard from '../components/RecipeCard';

function Recipe() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info, meassurements, ingredients, loading, error } = useSelector((state) => state.recipe);

  useEffect(() => {
    dispatch(fetchRecipe(id));
  }, [dispatch]);

  const renderRecipe = () => {
    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error...</h1>;

    return (
      <RecipeCard
        title={info.strMeal}
        img={info.strMealThumb}
        description={info.strInstructions}
        category={info.strCategory}
        area={info.strArea}
        ingredients={ingredients}
        meassurements={meassurements}
        source={info.strSource}
      />
    );
  };

  return <div>{renderRecipe()}</div>;
}

export default Recipe;
