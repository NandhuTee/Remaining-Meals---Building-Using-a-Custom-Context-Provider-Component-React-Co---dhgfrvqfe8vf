'use client'
import React, { useState, createContext } from "react";

const todaysMeals = [
    { id: 1, name: 'Baked Beans', ticked: false },
    { id: 2, name: 'Baked Sweet Potatoes', ticked: false },
    { id: 3, name: 'Baked Potatoes', ticked: false },
]

export const MealContext = createContext();

const MealsProvider = ({ children }) => {
    const [meals, setMeals] = useState(todaysMeals);

    const tickMeal = (id) => {
        const updatedMeals = meals.map(meal =>
            meal.id === id ? { ...meal, ticked: !meal.ticked } : meal
        );
        setMeals(updatedMeals);
    }

    return (
        <MealContext.Provider value={{ meals, tickMeal }}>
            {children}
        </MealContext.Provider>
    )
};

export default MealsProvider;
