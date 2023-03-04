import { useState, useEffect } from 'react';
import { getMacros, getNeededCalories } from '../utils/fetchData';

export default function useMacros(formData) {
  const [maxCalories, setMaxCalories] = useState(0);
  const [macros, setMacros] = useState([]);

  useEffect(() => {
    async function receiveMaxCalories() {
      const userMaxCalories = await getNeededCalories(formData);
      if (userMaxCalories[1]) setMaxCalories(Math.floor(userMaxCalories[1]));
    }
    async function receiveMacros() {
      const idealUserMacros = await getMacros(formData);
      if (maxCalories && idealUserMacros) {
        idealUserMacros.calories = maxCalories;
        setMacros(idealUserMacros);
      }
    }
    if (Object.keys(formData).length) {
      receiveMaxCalories();
      receiveMacros();
    }
  }, [formData, maxCalories]);

  return macros;
}
