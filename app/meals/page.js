import Link from "next/link"
import { Suspense } from "react";
import classes from './page.module.css';
import MealsGrid from "../components/meals/meals-grid";
import { getMeals } from "../lib/meals";

async function Meals(){
    const meals = await getMeals();
    return <MealsGrid meals={meals}></MealsGrid>
}

export default  function MealsPage(){

   

    console.log('Allburgers page')
    return(
        <>
        <header className={classes.header}>
            <h1>Delicious Dishes, created {' '}
                <span className={classes.highlight}>by you</span>
            </h1>
            <p>Choose your favorite recipe and cook it yourself.</p>
            <p className={classes.cta}>
                <Link href="/meals/share">
                    Share Your Favorite Recipe
                </Link>
            </p>
        </header>
        <main className={classes.main}>
        
        <Suspense fallback={ <p className={classes.loading}>Fetching meals ... </p>}>
            <Meals></Meals>
        </Suspense>
      

 
            <h1>All burgers site</h1>
            <p><Link href="/meals/burger/[burger]?burguer=1">beefburguer</Link></p>
            <p><Link href="/meals/burger/[burger]?burguer=2">Cheese</Link></p>
            <h1>All Meals site</h1>
            <p><Link href="/meals/[mealsSlug]?mealsSlug=1">kebabb</Link></p>
            <p><Link href="/meals/[mealsSlug]?mealsSlug=2">pølse</Link></p>
        </main>
        </>
    )
}