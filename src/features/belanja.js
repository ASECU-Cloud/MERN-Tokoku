import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    { id: 1, type: "snack", name: "Makaroni", price: 3000 },
    { id: 6, type: "snack", name: "Bang Beng", price: 3000 },
    { id: 2, type: "beverage", name: "Good Day", price: 4500 },
    { id: 7, type: "beverage", name: "Teh Kotak", price: 4500 },
    { id: 3, type: "bumbu", name: "Bawang Merah 1 kg", price: 15000 },
    { id: 8, type: "bumbu", name: "Bawang putih 1 kg", price: 15000 },
    { id: 5, type: "toys", name: "Kereta Kayu", price: 16000 },
    { id: 10, type: "toys", name: "Mobil", price: 16000 },
    { id: 4, type: "tools", name: "Obeng", price: 49000 },
    { id: 9, type: "tools", name: "Gergaji", price: 49000 },
  ],
  cart: [],
};

const belanjaSlice = createSlice({
  name: "belanja",
  initialState,
  reducers: {
    alterKategori: (state, action) => {
      if (action.payload.data === initialState.data) {
        const res = initialState.data.filter(
          (res) => res.type === action.payload.type.toLowerCase()
        );
        state.data = res;
      } else if (
        action.payload.data.find(
          (data) => data.type === action.payload.type.toLowerCase()
        )
      ) {
        const res = action.payload.data.filter(
          (res) => res.type !== action.payload.type.toLowerCase()
        );
        if (res.length === 0) {
          state.data = initialState.data;
        } else {
          state.data = [...res];
        }
      } else {
        const res = initialState.data.filter(
          (res) => res.type === action.payload.type.toLowerCase()
        );
        state.data = [...state.data, ...res];
      }
    },
    addToCart: (state, action) => {
      // filter input user dengan initial state dan di copy agar bisa di ubah
      let res = initialState.data
        .filter((res) => res.id === action.payload.id)
        .map((items) => {
          return { ...items };
        })[0];
      res.total = 1;
      console.log(res);
      // membuat item bisa di alter dengan mengcopy object dari payload
      let data = action.payload.cart.map((item) => {
        return { ...item };
      });

      if (data.some((data) => data.id === res.id)) {
        alert("Data sudah ada");
      } else {
        state.cart = [...state.cart, res];
      }

      // check process
      // if (data.length === 0) {
      //   res[0].total = 1;
      //   console.log(...res);
      //   state.cart = [...state.cart, ...res];
      // } else {
      //   res[0].total = data[0].total;
      //   res[0].total++;
      //   console.log(...res);
      //   state.cart = [...res];
      // }
    },
    remToCart: (state, action) => {
      let source = action.payload.data;
      const target = action.payload.data.findIndex(
        (res) => res.id === action.payload.id
      );

      source = source.map((items) => {
        return { ...items };
      });

      console.log(source);
      if (target !== -1) {
        source.splice(target, 1);
        state.cart = [...source];
      }
    },
  },
});

export const { alterKategori, addToCart, remToCart } = belanjaSlice.actions;

export default belanjaSlice.reducer;
