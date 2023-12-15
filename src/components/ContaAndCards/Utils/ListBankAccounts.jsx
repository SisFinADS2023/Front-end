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
            const response = await fetch('https://cm6skfzcne.execute-api.us-east-1.amazonaws.com/dev/bank-accounts/user/1234567890', {cache: 'no-store', mode: 'no-cors'})
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