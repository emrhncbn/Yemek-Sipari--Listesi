import React, { useState } from "react"



const OrderList = () => {
  const [query, setQuery] = useState("")
  const [recipes, setRecipes] = useState([])

  const API_ID = '93b0b82f'
  const API_KEY = 'f81f3ccdc02079bf11edd4c35492a709	'

  const fetchRecipes = async () => {
    try {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`)
      const data = await response.json()
      setRecipes(data.hits)
    } catch (error) {
      console.error('Error fetching recipes:', error)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    fetchRecipes()
  }

  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div className="container">
      <h1>Recipe App</h1>
      <form onSubmit={handleSearch}>
        <input type="text" value={query} placeholder="Tarifler burada..." onChange={handleInputChange} />
        <button type="submit">Ara</button>
      </form>
      <RecipeList recipes={recipes} />
    </div>
  )
}

const RecipeList = ({ recipes }) => {
  return (
    <ul className="recipe-list">
      {recipes.map(recipe => (
        <li key={recipe.recipe.uri} className="recipe-item">
          <h3>{recipe.recipe.label}</h3>
          <img src={recipe.recipe.image} alt={recipe.recipe.label} />
          <ul>
            {recipe.recipe.ingredientLines.map((ingredient) => (
              <li key={crypto.randomUUID()} style={{marginBottom: "5px", fontSize: "12px"}}>{ingredient}</li>
            ))}
         </ul>
        </li>
      ))}
    </ul>
  )
}

export default OrderList