import { addDoc, collection, doc, getDocs, query, setDoc } from 'firebase/firestore'
import { db } from '../firebase'

export const useClientStore = defineStore({
  id: 'client',
  state: () => ({
    items: [],
    isLoad: false,
    types: [
      {
        id: 1,
        name: 'Accountant',
      },
      {
        id: 2,
        name: 'Layewrs',
      },
    ],
  }),
  getters: {
    clients (state) {
      
      return state.items.map(client => {
        const { name } = state.types.find(type => type.id == client.type_id)

        client.typeName = name ||  null
        
        return client
      })
    },
    findById(state){
      return id => state.items.find(client => client.id == id)

      //return state.items.find(client => client.id === id)
    },
  },
  actions: {
    async getAll(){
      const q = query(collection(db, 'clients'))
      const querySnap =  await getDocs(q)

      querySnap.forEach(doc => {
        console.log(this.items)
        this.items.push({
          id: doc.id,
          ...doc.data(),
        })
      })
      this.isLoad = true
    },
    async add(client){
      const docRef = await addDoc(collection(db, "clients"), client)

      this.items.unshift({
        ...client,
        id: docRef.id,
      })
    },
    async update(client){
      console.log(client)

      const docRef = doc(db, "clients", client.id)

      await setDoc(docRef, client)

      const index =  this.items.findIndex(item => item.id === client.id)

      this.items[index] = client
    },


    /**
     * Attempt to login a user
     */
  },
})