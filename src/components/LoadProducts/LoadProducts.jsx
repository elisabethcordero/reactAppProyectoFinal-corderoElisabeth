import React from 'react'
import { getProducts } from '../../asyncMock'
import { addDoc, collection, writeBatch } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const LoadProducts = () => {
    const products = getProducts();

    const createProducts = async (products) => {
        try {
            const batch = writeBatch(db)
            const productsRef = collection(db, 'products')

            products.map(async prod => {
                await addDoc(productsRef, prod)
            });

            await batch.commit()
        } catch (error) {
            console.error(error)
        } finally {
        }
    }
    createProducts(products);

  return (
    <div>LoadProducts</div>
  )
}

export default LoadProducts