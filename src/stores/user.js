export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    users: [
      {
        name: 'Wolksvagen Finance',
        kvk: '74747651',
        email: 'test@mail.com',
        phone: '380636548262',
        country: 'Netherlands',
        start_date: '09.09.2023',
        end_date: '29.10.2023',
        signal: 1,
        status: 2,
        status_step: 1,
        risck: {
          value: 95,
          type: 1,
        },
        client_id: 'zpGqyGzf0duUIU16AJgD',
  
      },
      {
        name: 'IT Tech Inc.',
        kvk: '674567651',
        email: 'test@mail.com',
        phone: '380636548262',
        country: 'Netherlands',
        start_date: '15.07.2023',
        end_date: '',
        signal: 2,
        status: 3,
        risck: {
          value: 25,
          type: 2,
        },
        client_id: 'zpGqyGzf0duUIU16AJgD',
  
      },
      {
        name: 'New Meaning of Agri, BV',
        kvk: '8576651',
        email: 'test@mail.com',
        phone: '380636548262',
        country: 'Netherlands',
        start_date: '23.07.2023',
        end_date: '15.11.2023',
        signal: 2,
        status: 2,
        status_step: 2,
        risck: {
          value: 0,
          type: 1,
        },
        client_id: 'zpGqyGzf0duUIU16AJgD',
  
      },
      {
        name: 'LEFT-Corner research',
        kvk: '5673651',
        email: 'test@mail.com',
        phone: '380636548262',
        country: 'Netherlands',
        start_date: '09.09.2023',
        end_date: '',
        signal: 1,
        status: 1,
        risck: {
          value: 35,
          type: 2,
        },
        client_id: 'zpGqyGzf0duUIU16AJgD',
  
      },
      {
        name: 'Persha Privatna JS',
        kvk: '15364651',
        email: 'test@mail.com',
        phone: '380636548262',
        country: 'Netherlands',
        start_date: '09.09.2023',
        end_date: '',
        signal: 3,
        status: 1,
        risck: {
          value: 55,
          type: 1,
        },
        client_id: 'Nod0pkyy60TBu4SKONhG',
  
      },
      {
        name: 'MLade Giche, BV',
        kvk: '15645651',
        email: 'test@mail.com',
        phone: '380636548262',
        country: 'Netherlands',
        start_date: '09.09.2023',
        end_date: '',
        signal: 1,
        status: 2,
        status_step: 3,
        risck: {
          value: 0,
          type: 1,
        },
        client_id: 'Nod0pkyy60TBu4SKONhG',
  
      },
      {
        name: 'Nove Prace, BV',
        kvk: '9867581651',
        email: 'test@mail.com',
        phone: '380636548262',
        country: 'Netherlands',
        start_date: '09.09.2023',
        end_date: '',
        signal: 1,
        status: 2,
        status_step: 1,
        risck: {
          value: 45,
          type: 2,
        },
        client_id: 'Nod0pkyy60TBu4SKONhG',
  
      },
      {
        name: 'Linguard Velos',
        kvk: '076561651',
        email: 'test@mail.com',
        phone: '380636548262',
        country: 'Netherlands',
        start_date: '09.09.2023',
        end_date: '',
        signal: 2,
        status: 3,
        risck: {
          value: 0,
          type: 1,
        },
        client_id: '9nNXxH9SURbG5G1yeS2C',
  
      },
      {
        name: 'Milch & Butter, PE',
        kvk: '15364651',
        email: 'test@mail.com',
        phone: '380636548262',
        country: 'Netherlands',
        start_date: '09.09.2023',
        end_date: '',
        signal: 1,
        status: 3,
        risck: {
          value: 55,
          type: 1,
        },
        client_id: '9nNXxH9SURbG5G1yeS2C',
  
      },
      {
        name: 'Sunshin Unlimited',
        kvk: '15645651',
        email: 'test@mail.com',
        phone: '380636548262',
        country: 'Netherlands',
        start_date: '09.09.2023',
        end_date: '',
        signal: 1,
        status: 1,
        risck: {
          value: 0,
          type: 1,
        },
        client_id: '9nNXxH9SURbG5G1yeS2C',
  
      },
      {
        name: 'Beigin trade company',
        kvk: '9867581651',
        email: 'test@mail.com',
        phone: '380636548262',
        country: 'Netherlands',
        start_date: '09.09.2023',
        end_date: '',
        signal: 1,
        status: 2,
        status_step: 1,
        risck: {
          value: 45,
          type: 2,
        },
        client_id: '9nNXxH9SURbG5G1yeS2C',
  
      },
    ],
  }),
  getters: {
    // clients (state) {
    //   return state.clients
    // },
  },
  actions: {


    /**
     * Attempt to login a user
     */
  },
})