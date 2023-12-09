"use client"
import { AddSquare } from 'iconsax-react';
import "./ContaCard.css";
import "./ContaCreate.css";
import { League_Spartan } from 'next/font/google';
import { useState } from 'react';

const league_Spartan = League_Spartan(
    {
        weight: '400',
        subsets: ['latin'],

    }
)

const ContaCardAdd = () => {
    const [showCreate, setShowCreate] = useState(false);
    const [defaultValue, setDefaultValue] = useState("Digite o Nome da Conta");
    const [firstColor, setFirstColor] = useState("grey");
    const [firstClick, setFirstClick] = useState(0);
    
    
    return (

        <>
        <div className="BorderCard"  onClick={() => setShowCreate(true)}>
            <div className="BorderCard_Center">
                <div className="Fonte">Nova Conta</div>
                <AddSquare className="AddSquare" size="32" color="#3C5060" />
            </div>

        </div>
        {showCreate ?
            <div className="Background">
            <div className="Conta_Create">
                <div className="Conta_Create_Color"></div>
                <div className="Conta_Create_Content">

                    <input className="Conta_Create_Input" type="text" name="Nome_Da_Conta" value={defaultValue} style={{color: firstColor}} onClick={() => {setDefaultValue(""), setFirstColor("black")}}></input>
                    <div className="dots">
                        <div>
                            <span className="dot" style={{ margin: '10px', width: '24px', height: '24px', backgroundColor: '#D12460' }}></span>
                            <span className="dot" style={{ margin: '10px', width: '24px', height: '24px', backgroundColor: '#D422E1' }}></span>
                            <span className="dot" style={{ margin: '10px', width: '24px', height: '24px', backgroundColor: '#E12C00' }}></span>
                            <span className="dot" style={{ margin: '10px', width: '24px', height: '24px', backgroundColor: '#F76C4C' }}></span>
                            <span className="dot" style={{ margin: '10px', width: '24px', height: '24px', backgroundColor: '#F47100' }}></span>
                            <span className="dot" style={{ margin: '10px', width: '24px', height: '24px', backgroundColor: '#EBE900' }}></span>
                        </div>
                        <div>
                            <span className="dot" style={{ margin: '10px', width: '24px', height: '24px', backgroundColor: '#B1F128' }}></span>
                            <span className="dot" style={{ margin: '10px', width: '24px', height: '24px', backgroundColor: '#8DBE24' }}></span>
                            <span className="dot" style={{ margin: '10px', width: '24px', height: '24px', backgroundColor: '#11D17E' }}></span>
                            <span className="dot" style={{ margin: '10px', width: '24px', height: '24px', backgroundColor: '#004EEB' }}></span>
                            <span className="dot" style={{ margin: '10px', width: '24px', height: '24px', backgroundColor: '#006CC3' }}></span>
                            <span className="dot" style={{ margin: '10px', width: '24px', height: '24px', backgroundColor: '#0E0E76' }}></span>
                        </div>
                    </div>
                    <div className="Conta_Create_Buttons">
                        <div className="Conta_Create_Button1" onClick={() => {setShowCreate(false), setDefaultValue("Digite o Nome da Conta"), setFirstColor("grey")}}>Cancelar</div>
                        <div className="Conta_Create_Button2">Adicionar</div>
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

