// import { doc, getDoc, setDoc } from 'firebase/firestore'
// import { db } from '../firebase/config'

// export const completeOrder = async (orderData) => {
//   const { order, name, surname, uid, email, table } = orderData
//   let total = 0
//   for (const city of order) {
//     total += city.price * city.quantity
//   }
//   if (orderData) {
//     const userOrder = {
//       order: { order, table, total, complete: true },
//       dataUser: {
//         name,
//         surname,
//         email,
//         uid,
//       },
//     }
//     if (uid === doc.uid) {
//       console.log('exist')
//     }
//     await setDoc(doc(db, 'users', uid), userOrder)
//   }
// }
// hasta aca gurda un doc y lo cambia y con el anterior guarda un arrya de usuarios nuevos
// if (email && uid) {
//   const orderUser = {
//     user: { name, surname, email, uid },
//     table,
//     order,
//     total,
//   }
//   const doc = await addDoc(collection(db, 'orders'), orderUser)
//   return doc
// }
// // }++++++++++++++++++

import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../firebase/config'

export const dataUser = async (orderData) => {
  const { name, surname, uid, email, order, table } = orderData

  if (orderData) {
    const dataUser = {
      name,
      surname,
      email,
      uid,
    }
    await setDoc(doc(db, 'users', uid), dataUser)
  }

  const user = doc(db, 'users', uid)
  const docSnap = await getDoc(user)
  if (docSnap.exists()) {
    let total = 0
    for (const city of order) {
      total += city.price * city.quantity
      const order = { order, table, total, complete: true }
    }

    // Add a new document with a generated id
    // const newCityRef = addDoc(collection(db, 'orders'))

    // later...
    // await addDoc(user, 'orders', order)
    await addDoc(collection(db, 'orders'), order)

    // console.log('Document data:', docSnap.data())
  } else {
    // docSnap.data() will be undefined in this case
    console.log('No such document!')
  }
}
