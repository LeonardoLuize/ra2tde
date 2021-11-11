import style from '../styles/Game.module.css'
import { Sidebar } from '../Components/Sidebar';
import { useEffect, useState } from 'react';
import { BsX } from "react-icons/bs";

export function Game(){
    const [currentPage, setCurrentPage] = useState(0);
    const [selectValue, setSelectValue] = useState("x");
    const [selectGuilty, setSelectGuilty] = useState("x");
    const [openModal, setOpenModal] = useState(0);
    const [tittle, setTittle] = useState(""); 
    const [body, setBody] = useState(""); 
    const [imgSrc, setImgSrc] = useState("")

    var modal = 0;

    function sendDeduction(){
        setOpenModal(1);

        if(selectValue == 0 && selectGuilty == 1){
            setTittle("Parabéns! Você resolveu o problema!");
            setBody("O daniel passou o gabarito! 😱")
            setImgSrc("./assets/winner.svg")
        }else{
            setTittle("Não foi dessa vez!");
            setBody("Estude mais um pouco e tente novamente. 📚")
            setImgSrc("./assets/lesson.svg")
        }
    }

    function sendAdvancedDeduction(){
        setOpenModal(2);
    }

    return(
        <>
            <div className={style.container}>
                <Sidebar />
                <section className={style.gameContainer}>
                    <div className={style.cardContainer}>
                        <div id="initGame" className={currentPage === 0 ? style.initGame : style.dNone}>
                            <div className={style.contentContainer}>
                                <section>
                                    <h2>RA 2</h2>
                                    <h1>Detective <br />Game</h1>
                                </section>
                                <button onClick={() => setCurrentPage(currentPage + 1)}>Play</button>
                            </div>
                            <img src="./assets/map.png" class={style.mainImg} />
                        </div>

                        <div id="questionContainer" className={currentPage === 1 ? style.questionContainer : style.togglePage}>
                            <section>
                                <p className={style.tittle}>
                                    A professora Rafaela passou uma prova para todos os alunos e ao conferir todas 
                                    as notas,  percebeu que ninguém tinha tirado uma nota abaixo de 10.  Agora ela 
                                    se questiona se os monitores passaram o gabarito para os alunos e se passaram, 
                                    quem foi que passou.
                                </p>
                            </section>
                            <div className={style.wrap}>
                                <section className={style.questions}>
                                    <p>Conseguiu descobrir qual monitor passou o gabarito? Se sim, quem foi?</p>
                                    <section className={style.questionsSection}>
                                        <section className={style.answerContainer}>
                                            <label>O gabarito foi passado?</label>
                                            <select value={selectValue} onChange={e => setSelectValue(e.target.value)} className={style.selectAnswer}>
                                                <option value="x" selected>Selecione</option>
                                                <option value="0" >Sim</option>
                                                <option value="1" >Não</option>
                                            </select>
                                        </section>
                                        
                                        <section className={selectValue == 0 ? style.answerContainer : style.dNoneSelect}>
                                            <label>Quem é o culpado?</label>
                                            <select value={selectGuilty} onChange={e => setSelectGuilty(e.target.value)} className={style.selectAnswer}>
                                                <option value="x" selected>Selecione</option>
                                                <option value="0" >Eduarda</option>
                                                <option value="1" >Daniel</option>
                                            </select>
                                        </section>
                                    </section>
                                    <section>
                                        <button onClick={sendDeduction}>Enviar dedução</button>
                                        <button className={style.advancedButton} onClick={sendAdvancedDeduction}>Solução</button>
                                    </section>

                                </section>
                                <section className={style.hint}>
                                    <p>Use as dicas abaixo para solucionar o problema:</p>
                                    <p>1 - Eduarda estava na PUC com um refri.</p>
                                    <p>2 - Se um monitor não estava no bloco 3 e possui o gabarito então ele passou o gabarito.</p>
                                    <p>3 - Daniel e Eduarda são monitores.</p>
                                    <p>4 - Ou Daniel estava no estacionamento ou Daniel estava com a professora no bloco 3.</p>
                                    <p>5 - Se Daniel é monitor então ele recebeu o gabarito da prova.</p>
                                    <p>6 - Se Daniel não passou o gabarito então Eduarda passou.</p>
                                    <p>7 - Daniel não foi visto com a professora.</p>
                                </section>
                            </div>
                            
                        </div>
                    </div>
                </section>

                <div onClick={() => setOpenModal(0)} className={openModal == 1 || openModal == 2 ? style.modalDeductionBackground : style.opacityNoneModal}>
                </div>
                <section className={openModal == 1 ? style.modalDeductionContainer : style.toggleModal}>
                    <setion  className={style.modalHeader}>
                        <p>{tittle}</p>
                        <BsX onClick={() => setOpenModal(0)} className={style.closeIcon} />
                    </setion>
                    <setion className={style.modalBody}>
                        <img className={style.imageModal} src={imgSrc} />
                        <p>{body}</p>
                    </setion>
                    <setion className={style.modalFooter}>
                        <button onClick={() => setOpenModal(0)} className={style.closeModal}>Fechar</button>
                    </setion>
                </section>

                <section className={openModal == 2 ? style.modalDeductionContainer : style.toggleModal}>
                    <setion  className={style.modalHeader}>
                        <p>Solução</p>
                        <BsX onClick={() => setOpenModal(0)} className={style.closeIcon} />
                    </setion>
                    <setion className={style.modalBody}>
                        <section className={style.inferences}>
                            <p>Hipóteses</p>
                            <p>1 - Daniel e Eduarda são monitores.</p>
                            <p>2 - Se Daniel é monitor então ele recebeu o gabarito da prova.</p>
                            <p>3 - Se um monitor não estava no bloco 3 e possui o gabarito então ele passou o gabarito.</p>
                            <p>4 - Ou Daniel estava no estacionamento ou Daniel estava com a professora no bloco 3.</p>
                            <p>5 - Daniel não foi visto com a professora.</p>
                        </section>
                        <hr style={{width: "100%", margin: "15px 0px"}} />
                        <section className={style.inferences}>
                            <p>Deduções</p>
                            <p>6 - Simplificação 1 | <span>Daniel é monitor</span></p>
                            <p>7 - Modus Ponens 1,2 | <span>Daniel recebeu o gabarito</span></p>
                            <p>8 - Silogismo Disjuntivo 4,5 | <span>Daniel estava no estacionamento</span></p>
                            <p>9 - Conjunção 1,8 | <span>Daniel não estava no bloco 3 e possui o gabarito</span></p>
                            <p>10 - Modus Ponens 3,9  = <span>Daniel passou o gabarito! ✅</span></p>
                        </section>
                    </setion>
                    <setion className={style.modalFooter}>
                        <button onClick={() => setOpenModal(0)} className={style.closeModal}>Fechar</button>
                    </setion>
                </section>
            </div>
        </>
    );
}