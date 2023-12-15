"use client"
import { AddSquare } from 'iconsax-react';
import "./CartaoCard.css";
import "./CartaoCreate.css";
import { League_Spartan } from 'next/font/google';
import { useState } from 'react';

const league_Spartan = League_Spartan(
    {
        weight: '400',
        subsets: ['latin'],

    }
)

const CartaoCardAdd = () => {
    const [showCreate, setShowCreate] = useState(false);
    const [defaultValue1, setDefaultValue1] = useState("Nome do cartão");
    const [defaultValue2, setDefaultValue2] = useState("XXXX XXXX XXXX XXXX");
    const [defaultValue3, setDefaultValue3] = useState("XXXX.XX");
    const [showDebEdit, setShowDebEdit] = useState('D');
    
    
    return (

        <>
        <div className="BorderCard2"  onClick={() => setShowCreate(true)}>
            <div className="BorderCard_Center2">
                <div className="Fonte2 opacity-40">Novo cartão</div>
                <AddSquare className="AddSquare2 opacity-40" size="32" color="#3C5060" />
            </div>

        </div>
        {showCreate ?
            <div className="Background2">
            <div className="Cartao_Create">
                <div className="Cartao_Create_Color"></div>
                <div className="Cartao_Create_Content">

                    <div style={{marginTop: '4px', marginRight:'-15px'}}>Nome: </div>
                    <input className="Cartao_Create_Input" type="text" name="Nome_Do_Cartao" placeholder={defaultValue1} style={{color: 'black', width: '75%'}} onClick={() => {setDefaultValue1("")}}></input>

                    <div style={{marginTop: '4px', marginRight:'-15px'}}>Número: </div>
                    <input className="Cartao_Create_Input" type="text" name="Num_Do_Cartao" placeholder={defaultValue2} style={{color: 'black', width: '70%'}} onClick={() => {setDefaultValue2("")}}></input>

                    <div style={{marginTop: '4px', marginRight:'-15px'}}>Limite: R$ </div>
                    <input className="Cartao_Create_Input" type="text" name="Limite_Do_Cartao" placeholder={defaultValue3} style={{color: 'black', width: '68%'}} onClick={() => {setDefaultValue3("")}}></input>
                    
                    <span className="dot3" style={{ margin: '-5px', marginTop: '10px', width: '35px', height: '35px', backgroundColor: '#E6E6EB', }}
                                 onClick={() => {if(showDebEdit=='C'){setShowDebEdit('D')} else {setShowDebEdit('C')}}}>
                                    <div style={{ textAlign: 'center', fontSize: '25px', marginTop: '-3px', marginLeft: '-1px' }}>{showDebEdit}</div>
                                </span>
                    
                    <div className="Cartao_Create_Buttons">
                        <div className="Cartao_Create_Button1" onClick={() => {setShowCreate(false), setShowDebEdit('D'), setDefaultValue1("Nome do cartão"), setDefaultValue2("XXXX XXXX XXXX XXXX"), setDefaultValue3("XXXX.XX")}}>Cancelar</div>
                        <div className="Cartao_Create_Button2">Adicionar</div>
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

export default CartaoCardAdd

