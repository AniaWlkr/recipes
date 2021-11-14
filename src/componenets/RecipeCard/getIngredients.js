const getIngredients = recipe => {
  const ingrArr = [];
  const measureArr = [];
  const dataArr = [];

  Object.entries(recipe).forEach(([key, value]) => {
    if (key.includes('strIngredient') && value) ingrArr.push(value);
    if (key.includes('strMeasure') && value) measureArr.push(value);
  });

  for (let i = 0; i < ingrArr.length; i++) {
    dataArr.push({ id: i, ingredient: ingrArr[i], measure: measureArr[i] });
  }

  return dataArr;
};

export default getIngredients;
