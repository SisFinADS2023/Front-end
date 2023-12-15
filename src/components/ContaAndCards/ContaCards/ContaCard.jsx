"use client"

import { Edit, EmptyWallet } from 'iconsax-react';
import { Eye } from 'iconsax-react';
import { EyeSlash } from 'iconsax-react';
import { Colorfilter } from 'iconsax-react';
import { Trash } from 'iconsax-react';
import "./ContaCard.css";
import "./ContaEdit.css";
import { League_Spartan } from 'next/font/google';
import { useState } from 'react';



const league_Spartan = League_Spartan(
    {
        weight: '400',
        subsets: ['latin'],
    }
)

const ContaCard = ({ data }) => {
    
    const [showCard, setShowCard] = useState(true)
    const [showValue, setShowValue] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showColor, setShowColor] = useState(false);
    const [firstColor, setFirstColor] = useState("grey");
    const [editColor, setEditColor] = useState(data.color)

    const handleDelete = async (idAccount) => {
        const objAccount = {
            id: idAccount
        }
        console.log("#########################" + objAccount.id)
        
        const response = await fetch(`https://cm6skfzcne.execute-api.us-east-1.amazonaws.com/dev/bank-accounts/${objAccount.id}`,
        {
            cache: 'no-store',
            method: 'DELETE',
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(objAccount)
        }
        )
    
        if(response.ok){
            const result = await response.json()
            if(result?.code === 200){
                setShowCard(false)
                setShowDelete(false)
                setShowEdit(false)
            }
        }
    }

    const handleEdit = async (idAccount) => {
        const Nome_Da_Conta = document.querySelector('.Conta_Edit_Input')

        const editAccount = {
            id: idAccount,
            name: Nome_Da_Conta.value,
        }

        const response = await fetch(`https://cgtnvhork6.execute-api.us-east-1.amazonaws.com/dev/bank-accounts/${editAccount.id}`,
            {
                cache: 'no-store',
                method: 'PUT',
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(editAccount)
            }
        )

        if(response.ok){
            const result = await response.json()
            if(result?.code === 200){
                data.name = Nome_Da_Conta.value
                setShowEdit(false)
                setShowColor(false)
                setFirstColor("grey")
                setShowDelete(false)
                setShowCard(true)
            }
        }
    }

    return (
        <>
            { showCard ? (
                <div className="Conta_Card">
                    <div className="flexx">
                        <div className="Conta_Card_Color" style={{ backgroundColor: data.color }}></div>
                        <div className="Conta_Card_Content">
                            <div className="Conta_Card_Content_Tittle">
                                <div className="Fonte">{data.name}</div>
                            </div>
                            <div className="EditIcon"  >
                                <Edit color="#697689" onClick={() => setShowEdit(true)} />
                            </div>
                            <div className="Conta_Card_Content_Values">
                                {showValue ?
                                    <>
                                        <Eye size="32" color="#697689" className="Pointer" onClick={() => setShowValue(false)} />
                                        <div style={{ width: '20px' }} />
                                        <div className="Fonte2">R${data.balance}</div>
                                    </>
                                    :
                                    <>
                                        <EyeSlash size="32" color="#697689" className="Pointer" onClick={() => setShowValue(true)} />
                                        <div style={{ width: '20px' }} />
                                        <div className="Fonte2">---------</div>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}

            {showEdit ?
                <>
                    <div className="Background">
                        <div className="Conta_Edit">
                            <div className="Conta_Edit_Color" style={{ backgroundColor: editColor }}></div>
                            <div className="Conta_Edit_Content">

                                <input className="Conta_Edit_Input" type="text" name="Nome_Da_Conta" defaultValue={data.name} style={{ color: firstColor }} onClick={() => setFirstColor("black")}></input>
                                <div className="Conta_Edit_Content_Icons">
                                    {showColor ?
                                    <Colorfilter size="24" color={editColor} className="Pointer" onClick={() => setShowColor(false)}/>
                                    :
                                    <Colorfilter size="24" color={"#697689"} className="Pointer" onClick={() => setShowColor(true)}/>
                                    }
                                </div>
                                <div className="Conta_Edit_Content_Icons">
                                    <Trash size="24" color="#697689" className="Pointer"  onClick={() => setShowDelete(true)}/>
                                </div>

                                {showColor ?
                                <div className="dotsEdit">
                                    <div>
                                        <span className="dot" style={{ margin: '10px', marginRight: '35px', width: '24px', height: '24px', backgroundColor: '#D12460' }}></span>
                                        <span className="dot" style={{ margin: '10px', marginRight: '35px', width: '24px', height: '24px', backgroundColor: '#D422E1' }}></span>
                                        <span className="dot" style={{ margin: '10px', marginRight: '35px', width: '24px', height: '24px', backgroundColor: '#E12C00' }}></span>
                                        <span className="dot" style={{ margin: '10px', marginRight: '35px', width: '24px', height: '24px', backgroundColor: '#F76C4C' }}></span>
                                        <span className="dot" style={{ margin: '10px', marginRight: '35px', width: '24px', height: '24px', backgroundColor: '#F47100' }}></span>
                                        <span className="dot" style={{ margin: '10px', marginRight: '35px', width: '24px', height: '24px', backgroundColor: '#EBE900' }}></span>
                                    </div>
                                    <div>
                                        <span className="dot" style={{ margin: '10px', marginRight: '35px', width: '24px', height: '24px', backgroundColor: '#B1F128' }}></span>
                                        <span className="dot" style={{ margin: '10px', marginRight: '35px', width: '24px', height: '24px', backgroundColor: '#8DBE24' }}></span>
                                        <span className="dot" style={{ margin: '10px', marginRight: '35px', width: '24px', height: '24px', backgroundColor: '#11D17E' }}></span>
                                        <span className="dot" style={{ margin: '10px', marginRight: '35px', width: '24px', height: '24px', backgroundColor: '#004EEB' }}></span>
                                        <span className="dot" style={{ margin: '10px', marginRight: '35px', width: '24px', height: '24px', backgroundColor: '#006CC3' }}></span>
                                        <span className="dot" style={{ margin: '10px', marginRight: '35px', width: '24px', height: '24px', backgroundColor: '#0E0E76' }}></span>
                                    </div>
                                </div>                                
                                :
                                <>
                                <div style={{ width:'100%', height: '45px'}}></div>
                                </>
                                }
                                <div className="Conta_Edit_Buttons">
                                    <div className="Conta_Edit_Button1" onClick={() => {setShowEdit(false), setFirstColor("grey"), setShowColor(false), setEditColor(data.color)}}>Cancelar</div>
                                    <div className="Conta_Edit_Button2" onClick={() => handleEdit(data?._id)}>Editar</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {showDelete ?
                        <>
                        <div className="Background">
                            <div className="Conta_Delete">
                                <div className="Conta_Delete_Alert">Você deseja mesmo apagar essa conta?</div>
                                <div className="Conta_Delete_Buttons">
                                    <div className="Conta_Delete_Button1" onClick={() => setShowDelete(false)}>Cancelar</div>
                                    <div className="Conta_Delete_Button2" onClick={() => handleDelete(data?._id)}>Apagar</div>
                                </div>
                            </div>
                        </div>
                        </>
                        :
                        <>
                        </>
                    }
                </>

                :
                <></>
            }
        </>

    )
}

export default ContaCard

