function sumUserMacros(foodList) {
  const flattenedList = foodList.flat();
  const macrosList = ['calories', 'carbohydrates', 'protein', 'fat'];

  const findMacro = (macro) =>
    flattenedList.reduce((acc, food) => {
      if (food[0].includes(macro)) return acc + food[1];
      return acc;
    }, 0);

  const totalMacros = macrosList.map((macro) => [macro, findMacro(macro)]);

  return totalMacros;
}

export default sumUserMacros;
