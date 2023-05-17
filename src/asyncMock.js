import { useFirebase } from "./hooks/useFirebase";

const products = [
    {
        id: 1,
        name: 'Curso de Desarrollo Web',
        price: 30000,
        category: 1,
        img: 'https://i.ibb.co/zRqLZ2w/cursosweb-1.webp',
        stock: 10000,
        description: 'Descripcion del curso'
    },
    {id: 2, name: 'Curso de JavaScript', price: 50000, category: 1, img: 'https://i.ibb.co/q53qg04/favicon.webp', stock: 10000, description: 'Descripcion del curso'},
    {id: 3, name: 'Curso de Python', price: 40000, category: 1, img: 'https://i.ibb.co/BZqJ6zG/python-curso-gratis.webp', stock: 10000, description: 'Descripcion del curso'},
    {id: 4, name: 'Curso de C++', price: 35000, category: 1, img: 'https://i.ibb.co/qdwmQmJ/maxresdefault.webp', stock: 10000, description: 'Descripcion del curso'},
    {id: 5, name: 'Curso Finanzas personales', price: 100000, category: 2, img: 'https://i.ibb.co/ZRr71hB/4c6fa20f-831e-476d-b493-65032b7eb07f.webp', stock: 10000, description: 'Descripcion del curso'},
    {id: 6, name: 'Curso Fotografía', price: 12000, category: 3, img: 'https://i.ibb.co/YPbJ5Xg/800-imagen.webp', stock: 10000, description: 'Descripcion del curso'},
]

const categories = [
    { id: 1, name: 'programacion' },
    { id: 2, name: 'economia' },
    { id: 3, name: 'visuales' },
];


export const getCategories = () => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve (categories)
        },500)
    })
}

export const getCategoriesById = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            console.log(id);
            resolve (categories.find((category) => category.id === +id))
        },500)
    })
}

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve (products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        const product = useFirebase('id', { id: productId }, 'items', true);
    })
}

export const getProductsByCategory = (category) => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve (products.filter((prod) => prod.category === +category));
        },500)
    })
}

export const getProductByName = (name) => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve (products.find((prod) => prod.name === name));
        },500)
    })
}