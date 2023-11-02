import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams();
  
  useEffect(() => {
    setLoading(true)

    const docRef = doc(db, 'products', itemId)

    getDoc(docRef, )
    .then(response => {
        const data = response.data()
        const productAdapted = { ...data, id: response.id }
        setProduct(productAdapted)
    })
    .catch(error => {
      console.log(error)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [itemId])


  return (
    <div className='ItemDetailContainer'>
        {
          product && <ItemDetail {...product}/>
        }
    </div>
  )
}

export default ItemDetailContainer;