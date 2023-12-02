'use client'

import {useState, useEffect} from 'react'
import ContaCard from '../ContaCards/ContaCard'
import ContaCardAdd from '../ContaCards/ContaCardAdd'

const ListBankAccounts = () => {
    const [accounts, setAccounts] = useState([])
    // const [isModalSignUpOpen, setIsModalSignUpOpen] = useState(false)

    //This is where the GET endpoint should be.
    useEffect(() => {
        const getAccounts = async () => {
            const response = await fetch('http://localhost:3001/bank-accounts/user/1234567890', {cache: 'no-store'})
            const data = await response.json()
            setAccounts(data.bankAccounts)
        }
        getAccounts()
    }, [])

    return (
        <>
            {
            accounts.map((account) => {
                return (
                    <ContaCard key={account._id} data={account} />
                )
            })
            }
            <ContaCardAdd accounts={accounts} setAccounts={setAccounts}/>
        </>
    )
}

export default ListBankAccounts