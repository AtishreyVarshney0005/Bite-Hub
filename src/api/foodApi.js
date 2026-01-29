export const fetchFoods = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );
  const data = await res.json();

  return data.meals.map((item) => ({
    id: item.idMeal,
    name: item.strMeal,
    price: Math.floor(Math.random() * 200) + 100, // random price
    image: item.strMealThumb,
    category: item.strCategory,
  }));
};
