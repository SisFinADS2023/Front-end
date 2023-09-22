import React from 'react'

import Header from "@/components/Header"
import List from './components/List'

const Transacoes = async () => {

  return (<>
    <Header title="Transações" avatar="https://avatars.githubusercontent.com/u/102611166?s=70&v=4" />

    <div className='bg-white mt-6 px-8 ml-28 mr-8'>
      <List />
    </div>
  </>
  )
}

export default Transacoes