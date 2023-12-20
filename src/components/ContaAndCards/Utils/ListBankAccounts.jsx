'use client'

import {useState, useEffect} from 'react'
import ContaCard from '../ContaCards/ContaCard'
import ContaCardAdd from '../ContaCards/ContaCardAdd'
import { jwtDecode } from 'jwt-decode'

const ListBankAccounts = () => {
    const [accounts, setAccounts] = useState([])
    let decoded = '';
    // const [isModalSignUpOpen, setIsModalSignUpOpen] = useState(false)

    //This is where the GET endpoint should be.
    useEffect(() => {
        const getAccounts = async () => {
            if(localStorage.getItem('actk') != null){
                const tokensJson = JSON.parse(localStorage.getItem('actk'));
                const token = tokensJson.access_token;
                
                decoded = jwtDecode(token);
            }
            const response = await fetch(`https://coinc-backend-8d1196b671ee.herokuapp.com/bank-accounts/user/${decoded.userId}`, {cache: 'no-store'})
            const data = await response.json()
            setAccounts(data.bankAccounts)
        }
        getAccounts()
    }, [])

    return (
        <>
            {
            accounts.map((account) => {
                console.log(account)
                return (
                    <ContaCard key={account.id} data={account} />
                )
            })
            }
            <ContaCardAdd accounts={accounts} setAccounts={setAccounts}/>
        </>
    )
}

export default ListBankAccounts