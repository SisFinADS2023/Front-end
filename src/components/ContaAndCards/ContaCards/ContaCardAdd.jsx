"use client"
import { AddSquare } from 'iconsax-react';
import "./ContaCard.css";
import "./ContaCreate.css";
import { League_Spartan } from 'next/font/google';
import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useRouter } from 'next/navigation';

const league_Spartan = League_Spartan(
    {
        weight: '400',
        subsets: ['latin'],
    }
)

const ContaCardAdd = ({ accounts, setAccounts }) => {
    const [showCreate, setShowCreate] = useState(false);
    const [defaultValue, setDefaultValue] = useState("Digite o Nome da Conta");
    const [name, setName] = useState('Minha conta');
    const [balance, setBalance] = useState('0');
    const [color, setColor] = useState('#CCCCCC');
    const router = useRouter();
    let decoded = '';

    const handleCreate = async () => {
        if(localStorage.getItem('actk') != null){
            const tokensJson = JSON.parse(localStorage.getItem('actk'));
            const token = tokensJson.access_token;
            
            decoded = jwtDecode(token);
        }
        const createAccount = {
            userId: decoded.userId,
            name: name,
            balance: balance,
            color: color
        }
    
        console.log(createAccount)

        const response = await fetch('https://coinc-backend.onrender.com/bank-accounts',
            {
                cache: 'no-store',
                method: 'POST',
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(createAccount)
            }
        )
    
        if(response.ok){
            const result = await response.json()
            console.log(result)
            
            if(result?.status === 200){
                setAccounts([...accounts, createAccount])
                setShowCreate(false)
                location.reload();
            }
        }
    }
    
    return (

        <>
        <div className="BorderCard shadow-md"  onClick={() => setShowCreate(true)}>
            <div className="BorderCard_Center">
                <div className="Fonte opacity-30">Nova Conta</div>
                <AddSquare className="AddSquare opacity-30" size="32" color="#3C5060" />
            </div>

        </div>
        {showCreate ?
            <div className="Background">
            <div className="Conta_Create">
                <div className="Conta_Create_Color" style={{backgroundColor: color}} ></div>
                <div className="Conta_Create_Content">

                    <input className="Conta_Create_Input" type="text" name="Nome_Da_Conta" placeholder='Digite o nome da conta' style={{color: color}} onClick={() => {setDefaultValue("")}} onChange={e => setName(e.target.value)} ></input>
                    <div className="dots">
                        <div>
                            <span className="dot" style={{ margin: '10px', width: '24px', height: '24px', backgroundColor: '#D12460' }} onClick={() => {setColor("#D12460")}}></span>
                            <span className="dot" style={{ margin: '10px', width: '24px', height: '24px', backgroundColor: '#D422E1' }} onClick={() => {setColor("#D422E1")}}></span>
                            <span className="dot" style={{ margin: '10px', width: '24px', height: '24px', backgroundColor: '#E12C00' }} onClick={() => {setColor("#E12C00")}}></span>
                            <span className="dot" style={{ margin: '10px', width: '24px', height: '24px', backgroundColor: '#F76C4C' }} onClick={() => {setColor("#F76C4C")}}></span>
                            <span className="dot" style={{ margin: '10px', width: '24px', height: '24px', backgroundColor: '#F47100' }} onClick={() => {setColor("#F47100")}}></span>
                            <span className="dot" style={{ margin: '10px', width: '24px', height: '24px', backgroundColor: '#EBE900' }} onClick={() => {setColor("#EBE900")}}></span>
                        </div>
                        <div>
                            <span className="dot" style={{ margin: '10px', width: '24px', height: '24px', backgroundColor: '#B1F128' }} onClick={() => {setColor("#B1F128")}}></span>
                            <span className="dot" style={{ margin: '10px', width: '24px', height: '24px', backgroundColor: '#8DBE24' }} onClick={() => {setColor("#8DBE24")}}></span>
                            <span className="dot" style={{ margin: '10px', width: '24px', height: '24px', backgroundColor: '#11D17E' }} onClick={() => {setColor("#11D17E")}}></span>
                            <span className="dot" style={{ margin: '10px', width: '24px', height: '24px', backgroundColor: '#004EEB' }} onClick={() => {setColor("#004EEB")}}></span>
                            <span className="dot" style={{ margin: '10px', width: '24px', height: '24px', backgroundColor: '#006CC3' }} onClick={() => {setColor("#006CC3")}}></span>
                            <span className="dot" style={{ margin: '10px', width: '24px', height: '24px', backgroundColor: '#0E0E76' }} onClick={() => {setColor("#0E0E76")}}></span>
                        </div>
                    </div>
                    <div className="Conta_Create_Buttons">
                        <div className="Conta_Create_Button1" onClick={() => {setShowCreate(false), setDefaultValue("Digite o Nome da Conta"), setColor("grey")}}>Cancelar</div>
                        <div className="Conta_Create_Button2" onClick={() => {handleCreate()}}>Adicionar</div>
                    </div>
                </div>
            </div>
        </div>
        :
        <></>
        }
        </>

    )
}

export default ContaCardAdd

