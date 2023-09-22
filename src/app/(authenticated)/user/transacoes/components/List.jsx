import { Menu } from 'iconsax-react'
import './Transactions.css'

const loadTransactions = async () => {
  const response = await fetch('https://run.mocky.io/v3/144a3ecc-8c05-4beb-8d61-14fc0901ec19', { cache: 'no-cache' })
  const body = await response.json()
  
  if (response.status !== 200) throw Error(body.message)

  return body
}

const List = async () => {
  const transactions = await loadTransactions()

  const formatCurrency = (value) => Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value / 100)

  const categories = [
    {
      id: '1c7b9c46-11b5-4726-9db5-5d32ba7ea280',
      name: 'Alimentação',
      color: '#0d99ff',
    },
    {
      id: '33a849b9-9f9f-42dd-86a2-c72d48883f50',
      name: 'Essenciais',
      color: '#ff24bd',
    },
    {
      id: 'd6a6d9be-aa71-4cf1-b9e4-2c5ec3e5010e',
      name: 'Despesas',
      color: '#ffcd29',
    },
    {
      id: 'edad3b37-de53-4f3b-b061-5dd2231bcc06',
      name: 'Despesas Automotivas',
      color: '#006CC3',
    },
    {
      id: '3ec4453a-8173-4335-9bc5-7a24abcfcfa5',
      name: 'Despesas Primordiais',
      color: '#D12460',
    },
  ]

  const handleCategory = (categoryId) => categories.filter(category => category.id === categoryId)[0]

  return (
    <div className="mt-8">
      <div className="flex justify-between">
        <h2 className="text-3xl text-slate-700">Recentes</h2>

        <Menu size="36" className='text-slate-700' />
      </div>

      <div className="max-h-[78vh] overflow-y-scroll no-scrollbar pr-4 pb-2 my-2">
        {
          transactions.map((transaction) => {
            const category = handleCategory(transaction.category)

            return (<div key={transaction.id_transaction}
              className={`flex shadow-lg mt-12 px-9 pb-2 pt-4 bg-white rounded-md cursor-pointer border-r-[70px] border-solid`}
              style={{ borderRightColor: category?.color }}
            >
              <div className='flex-1'>
                <div className='flex justify-between mb-4'>
                  <div>
                    <p className='text-xl font-semibold text-slate-700'>{transaction.name}</p>
                    <p className='text-base font-medium text-slate-500'>
                      {category?.name}
                    </p>
                  </div>

                  <div className='text-end'>
                    <p className='text-xl font-semibold text-slate-700'>{
                      formatCurrency(transaction.value)
                    }</p>
                    <p className='text-base font-medium text-slate-500'>12/09/2023</p>
                  </div>
                </div>

                <span className='mt-2 block rounded-lg border border-slate-700'></span>
              </div>
            </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default List