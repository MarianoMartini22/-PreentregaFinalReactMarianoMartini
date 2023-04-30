const products = [
    {
        id: '1',
        name: 'Curso de desarrollo Web',
        price: 30000,
        category: 'curso',
        img: 'https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1566492620/content-items/003/212/919/2-original.png?1566492620',
        stock: 10000,
        description: 'Descripcion del curso'
    },
    {id:'2', name: 'Curso de Javascript', price: 50000, category: 'curso', img: 'https://www.gesformacion.edu.es/img/course/247/curso-javascript.jpg', stock: 10000, description: 'Descripcion del curso'},
    {id:'3', name: 'Curso de Phyton', price: 40000, category: 'curso', img: 'https://www.somoslibres.org/images/2021/12/1/python-curso-gratis.jpg', stock: 10000, description: 'Descripcion del curso'},
    {id:'4', name: 'Curso de C++', price: 35000, category: 'curso', img: 'https://i.ytimg.com/vi/dJzLmjSJc2c/maxresdefault.jpg', stock: 10000, description: 'Descripcion del curso'},
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve (products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products.find (prod => prod.id === productId))
        }, 500)
    })
}