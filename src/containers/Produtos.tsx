import { useSelector } from 'react-redux'

import { RootState } from '../store'

import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
  adicionarAoCarrinho: (produto: ProdutoType) => void
}

const ProdutosComponent = ({ produtos, adicionarAoCarrinho }: Props) => {
  const favoritos = useSelector((state: RootState) => state.favoritar.itens)
  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    return favoritos.some((f) => f.id === produtoId)
  }

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
            aoComprar={adicionarAoCarrinho}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
