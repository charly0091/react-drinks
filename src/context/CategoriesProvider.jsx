import { useState , useEffect , createContext } from 'react';
import propTypes from 'prop-types';
import { getCategoriesService } from '../services/categories.service';

const CategoriesContext = createContext();

const CategoriesProvider = ({children}) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories();
    }, [])

    const getCategories = async () => {
        try {
            const categoriesData = await getCategoriesService();
            setCategories(data);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <CategoriesContext.Provider value={{categories}}>
            {children}
        </CategoriesContext.Provider>
    )
}

CategoriesProvider.propTypes = {
    children: propTypes.node.isRequired
}

export { CategoriesProvider };

export default CategoriesContext;