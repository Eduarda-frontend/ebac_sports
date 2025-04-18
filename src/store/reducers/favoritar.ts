import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritarState = {
  itens: Produto[]
}

const initialState: FavoritarState = {
  itens: []
}

const favoritarSlice = createSlice({
  name: 'favoritar',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.itens.find((p) => p.id === produto.id)) {
        state.itens = state.itens.filter((p) => p.id !== produto.id)
        console.log(state.itens)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritarSlice.actions
export default favoritarSlice.reducer
