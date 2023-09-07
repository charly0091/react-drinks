import { useState , useEffect , useContext} from 'react';
import { propTypes } from 'prop-types';
import { filterDrinksService , getRecipeService } from '../services/drinks.service';

const DrinksContext = createContext();

const DrinksProvider = ({children}) => {
    const [drinks, setDrinks] = useState([]);
    const [modal, setModal] = useState(false);
    const {drinkId, setDrinkId} = useState(null);
    const [recipe, setRecipe] = useState({});
    const [loading, setLoading] = useState(false);

    function handleModalClick() {
        setModal(!modal);
    }

    function handleDrinkIdClick(id) {
        setDrinkId(id);
    }

    async function getRecipe() {
        if(!drinkId) return;
        try{
            setLoading(true);
            const recipeData = await getRecipeService(drinkId);
            setRecipe(recipeData);
        }
        catch(error){
            console.log(error);
        }
        finally{
            setLoading(false);
        }
    }

    async function getDrinks(data) {
        try {
            setLoading(true);
            const drinksData = await filterDrinksService(data.name , data.category);
            setDrinks(drinksData);
        } catch (error) {
            console.log(error);
        }
        finally{
            setLoading(false);
        }
    }


    useEffect(() => {
        getRecipe();
    }, [drinkId])

    const contextValues = {
        drinks,
        modal,
        recipe,
        loading,
        handleModalClick,
        handleDrinkIdClick,
        getDrinks
    }

    return (
        <DrinksContext.Provider value={{contextValues}}>
            {children}
        </DrinksContext.Provider>
    )
}

DrinksProvider.propTypes = {
    children: propTypes.node.isRequired
}

export { DrinksProvider , DrinksContext};