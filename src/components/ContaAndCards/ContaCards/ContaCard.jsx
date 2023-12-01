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



const ContaCard = ({ title, color, hidden }) => {

    const [showValue, setShowValue] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showColor, setShowColor] = useState(false);
    const [firstColor, setFirstColor] = useState("grey");
    const [editColor, setEditColor] = useState(color)
    

    return (
        <>
            <div className="Conta_Card">
                <div className="flexx">
                    <div className="Conta_Card_Color" style={{ backgroundColor: color }}></div>
                    <div className="Conta_Card_Content">
                        <div className="Conta_Card_Content_Tittle">
                            <div className="Fonte">{title}</div>
                        </div>
                        <div className="EditIcon"  >
                            <Edit color="#697689" onClick={() => setShowEdit(true)} />
                        </div>
                        <div className="Conta_Card_Content_Values">
                            {showValue ?
                                <>
                                    <Eye size="32" color="#697689" className="Pointer" onClick={() => setShowValue(false)} />
                                    <div style={{ width: '20px' }} />
                                    <div className="Fonte2">{hidden}</div>
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



            {showEdit ?
                <>
                    <div className="Background">
                        <div className="Conta_Edit">
                            <div className="Conta_Edit_Color" style={{ backgroundColor: editColor }}></div>
                            <div className="Conta_Edit_Content">

                                <input className="Conta_Edit_Input" type="text" name="Nome_Da_Conta" defaultValue={title} style={{ color: firstColor }} onClick={() => setFirstColor("black")}></input>
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
                                <div style={{ width:'100%', height: '45px'}}></div></>
                                }
                                <div className="Conta_Edit_Buttons">
                                    <div className="Conta_Edit_Button1" onClick={() => { setShowEdit(false), setFirstColor("grey"), setShowColor(false), setEditColor(color)}}>Cancelar</div>
                                    <div className="Conta_Edit_Button2">Editar</div>
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
                                    <div className="Conta_Delete_Button1" onClick={() => { setShowDelete(false)}}>Cancelar</div>
                                    <div className="Conta_Delete_Button2">Apagar</div>
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

