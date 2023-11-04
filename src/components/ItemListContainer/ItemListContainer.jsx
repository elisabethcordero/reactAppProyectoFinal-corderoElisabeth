import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true)
        
        const collectionRef = categoryId?.length > 0
        ? query(collection(db, 'products'), where('category', '==', `${categoryId[0].toUpperCase()}${categoryId.slice(1).toLowerCase()}`))
        : collection(db, 'products')

        getDocs(collectionRef)
        .then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data}
            })
            setProducts(productsAdapted)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [categoryId])

    return (
        <div>
            {
                loading
                ? <>Loading...</>
                :<>
                    <h1>{greeting}</h1>
                    {products?.length > 0 
                    
                    ?<ItemList products={products}/>
                    :<>No existen productos en esta categoria</>
                    }
                </>
            }
        </div>
    )
}

export default ItemListContainer;