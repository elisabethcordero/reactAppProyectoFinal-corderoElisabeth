const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'Celulares',
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
        stock: 25,
        description: 'Descripcion de Iphone 12'
    },
    {
        id: '2',
        name: 'Samsung S21',
        price: 800,
        category: 'Celulares',
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
        stock: 11,
        description: 'Descripcion de Samsung S21'
    },
    {
        id: '3',
        name: 'Ipad 8va generacion',
        price: 1200,
        category: 'Tablets',
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
        stock: 25,
        description: 'Ipad 8va generacion'
    },
    {
        id: '4',
        name: 'Samsung Tab 8"',
        price: 3200,
        category: 'Tablets',
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
        stock: 18,
        description: 'Super tablet samsung'
    }
];


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
            setTimeout(() => { 
                resolve (products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category.toLowerCase() === category?.toLowerCase()));
        }, 500);
    }); 
}