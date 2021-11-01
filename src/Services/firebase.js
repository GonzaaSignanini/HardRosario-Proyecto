import * as firebase from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getDocs, collection, query, where, doc, getDoc, writeBatch, addDoc, Timestamp } from '@firebase/firestore';



const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => {
    return app
}

export const db = getFirestore(app)


export const getProducts = (key, operator, value) => {

    return new Promise((resolve, reject) => {
        const collectionQuery = key && operator && value ?  query(collection(db, 'productos'), where(key, operator, value)) : collection(db, 'productos')
        
        getDocs(collectionQuery).then((querySnapshot) => {
            const products = querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            }) 
            resolve(products)
        }).catch((error) => {
            reject(`Error obteniendo productos ${value ? 'por categoria' : ''}: ${error}` )
        })

    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve, reject) => {
        getDoc(doc(db, 'productos' , itemId)).then((querySnapshot) => {
            const product = { id: querySnapshot.id, ...querySnapshot.data()}
            resolve(product)
        }).catch((error) => {
            reject('Error obteniendo producto: ' + error)
        })
    })
}

export const createOrder = (objOrder) => {
    return new Promise((resolve, reject) => {
        objOrder = {
            ...objOrder,
            date: Timestamp.fromDate(new Date())
        }
        const batch = writeBatch(db)
        const outOfStock = []
            
        objOrder.products.forEach((prod, i) => {
            getDoc(doc(db, 'productos', prod.id)).then(DocumentSnapshot => {
                if(DocumentSnapshot.data().stock >= objOrder.products[i].quantity) {
                    batch.update(doc(db, 'productos', DocumentSnapshot.id), {
                        stock: DocumentSnapshot.data().stock - objOrder.products[i].quantity
                    })
                } else {
                    outOfStock.push({...DocumentSnapshot.data(), id: DocumentSnapshot.id})
                }
            })
        })

        if(outOfStock.length === 0) {
            addDoc(collection(db, 'orders'), objOrder).then(() => {
                batch.commit().then(() => {
                    resolve('La orden se ejecutó con éxito')
                })
            }).catch((error) => {
                reject('Error al ejecutar la orden: ' + error)
            })
    }})
}


export const getUserId = (objOrder) => {
    return new Promise((resolve, reject) => {
      getDocs(query(collection(db, "orders"), where("date", "==", objOrder.date)))
        .then((querySnapshot) => {
          let userId = querySnapshot.docs.map((doc) => {
            return doc.id;
          });
          resolve(userId);
        })
        .catch((error) => {
          reject("Error al obtener user id", error);
        });
    });
};


export const searchProducts = (searchValue, products, setProductsFilter) => {
    let productsFilter = products.filter( product => {
        return (
            product.title.toLowerCase().includes(searchValue.toLowerCase())
        )
    })
    setProductsFilter(productsFilter)
}


export const getCategories = () => {
    return new Promise((resolve, reject) => {
        getDocs(collection(db, 'categories')).then((querySnapshot) => {
            const categories = querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            }) 
            resolve(categories)
        }).catch((error) => {
            reject(`Error obteniendo categorias: ${error}`)
        })
    }) 
}