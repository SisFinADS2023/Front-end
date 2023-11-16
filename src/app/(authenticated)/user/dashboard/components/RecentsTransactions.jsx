import './style.css'

export default function RecentsTransactions() {

  const transacoes = [
    {
      icone: 'icone1.png',
      nome: 'Mercado',
      data: '26/10/2023',
      valor: 100.00
    },
    {
      icone: 'icone2.png',
      nome: 'Farmácia',
      data: '27/10/2023',
      valor: 75.50
    },
    {
      icone: 'icone3.png',
      nome: 'Restaurante',
      data: '28/10/2023',
      valor: 42.75
    },
    {
      icone: 'icone4.png',
      nome: 'Posto de Gasolina',
      data: '29/10/2023',
      valor: 150.00
    },
    {
      icone: 'icone5.png',
      nome: 'Cinema',
      data: '30/10/2023',
      valor: 200.50
    },
    {
      icone: 'icone6.png',
      nome: 'Salão de Beleza',
      data: '31/10/2023',
      valor: 60.25
    },
    {
      icone: 'icone7.png',
      nome: 'Supermercado',
      data: '01/11/2023',
      valor: 95.80
    },
    {
      icone: 'icone8.png',
      nome: 'Livraria',
      data: '02/11/2023',
      valor: 33.90
    },
    {
      icone: 'icone9.png',
      nome: 'Lanchonete',
      data: '03/11/2023',
      valor: 120.75
    },
    {
      icone: 'icone10.png',
      nome: 'Loja de Roupas',
      data: '04/11/2023',
      valor: 175.00
    }
  ];


  return (
    <div className={`h-[339px] w-[488px] bg-white  shadow px-8 py-5 rounded-md overflow-hidden`}>
      <div className='flex justify-between '>
        <h2 className='text-xl text-secondary-900 font-semibold'>Transações recentes</h2>
      </div>
      <div className='mt-4 flex flex-col gap-2 h-5/6 overflow-y-scroll rolagem'>
        {transacoes.map((transacao) => 
          (
          <div className='h-12 flex gap-8 justify-between items-center mr-5'>
            <div className='flex gap-8'>
              <img className='w-12 h-full rounded-lg' src="https://github.com/gvnny.png" alt="" />
              <div className='flex flex-col'>
                <h2 className='text-lg font-bold text-secondary-500'>{transacao.nome}</h2>
                <h3 className='text-secondary-300 text-sm'>{transacao.data}</h3>
              </div>
            </div>
            <span className='text-base font-bold text-green/90'>{transacao.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' } )} </span>
          </div>
          )
        )}
      </div>
    </div>
  )
}
