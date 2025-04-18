import { useEffect, useState } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'

import { Provider } from 'react-redux'
import { store } from './store'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const [produtos, setProdutos] = useState<Produto[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => setProdutos(res))
  }, [])

  function adicionarAoCarrinho() {
    console.log('teste')
  }
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos
          produtos={produtos}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      </div>
    </Provider>
  )
}

export default App
