"use client"

import { Edit, EmptyWallet } from 'iconsax-react';
import { Eye } from 'iconsax-react';
import { EyeSlash } from 'iconsax-react';
import { Colorfilter } from 'iconsax-react';
import { Trash } from 'iconsax-react';
import "./CartaoCard.css";
import "./CartaoEdit.css";
import { League_Spartan } from 'next/font/google';
import { useState } from 'react';
import { useEffect } from 'react';



const league_Spartan = League_Spartan(
    {
        weight: '400',
        subsets: ['latin'],

    }
)



const CartaoCard = ({ title, hidden, deb, num }) => {

    const [showValue, setShowValue] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showDebEdit, setShowDebEdit] = useState(deb);



    return (
        <>
            <div className="Cartao_Card">
                <div className="flexx2">
                    <div className="Cartao_Card_Content">
                        <span className="dot2" style={{ marginTop: '20px', marginLeft: '20px', width: '35px', height: '35px', backgroundColor: '#E6E6EB', }}>
                            <div style={{ textAlign: 'center', fontSize: '25px', marginTop: '-3px', marginLeft: '-1px' }}>{deb}</div>


                        </span>
                        <div className="Cartao_Card_Content_Tittle">
                            <div className="Fonte2">{title}</div>
                        </div>
                        <div className="EditIcon2"  >
                            <Edit color="black" onClick={() => setShowEdit(true)} />
                        </div>
                        <div className="Cartao_Card_Content_Values">
                            {showValue ?
                                <>
                                    <Eye size="32" color="black" className="Pointer2" onClick={() => setShowValue(false)} />
                                    <div style={{ width: '20px' }} />
                                    <div className="Fonte22">{hidden}</div>
                                </>
                                :
                                <>
                                    <EyeSlash size="32" color="black" className="Pointer2" onClick={() => setShowValue(true)} />
                                    <div style={{ width: '20px' }} />
                                    <div className="Fonte22">---------</div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>



            {showEdit ?
                <>
                    <div className="Background2"></div>
                    <div className="Cartao_Edit">
                        <div className="Cartao_Edit_Content">

                            <input className="Cartao_Edit_Input" type="text" name="Nome_Do_Cartao" defaultValue={title} style={{ color: 'black' }}></input>
                            <div className="Cartao_Edit_Content_Icons">
                                <Trash size="24" color="black" className="Pointer2" onClick={() => setShowDelete(true)} />
                            </div>
                            <input className="Cartao_Edit_Input" type="text" name="Num_Do_Cartao" defaultValue={num} style={{ color: 'black', marginTop: '-1px', marginBottom: '-5px' }}></input>

                            <span className="dot3" style={{ marginTop: '5px', marginLeft: '5px', width: '35px', height: '35px', backgroundColor: '#E6E6EB', }}
                                onClick={() => { if (showDebEdit == 'C') { setShowDebEdit('D') } else { setShowDebEdit('C') } }}>
                                <div style={{ textAlign: 'center', fontSize: '25px', marginTop: '-3px', marginLeft: '-1px' }}>{showDebEdit}</div>
                            </span>





                            <div className="Cartao_Edit_Buttons">
                                <div className="Cartao_Edit_Button1" onClick={() => { setShowEdit(false), setShowDebEdit(deb) }}>Cancelar</div>
                                <div className="Cartao_Edit_Button2">Editar</div>
                            </div>
                        </div>
                    </div>


                    {showDelete ?
                        <>
                            <div className="Background2">
                                <div className="Cartao_Delete">
                                    <div className="Cartao_Delete_Alert">Você deseja mesmo apagar esse cartão?</div>
                                    <div className="Cartao_Delete_Buttons">
                                        <div className="Cartao_Delete_Button1" onClick={() => { setShowDelete(false) }}>Cancelar</div>
                                        <div className="Cartao_Delete_Button2">Apagar</div>
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

export default CartaoCard

