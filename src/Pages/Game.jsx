import style from '../styles/Game.module.css'
import { Sidebar } from '../Components/Sidebar';
import { useEffect, useState } from 'react';

export function Game(){
    const [currentPage, setCurrentPage] = useState(0);
    const [selectValue, setSelectValue] = useState("x");
    const [selectGuilty, setSelectGuilty] = useState("x");
    const [openModal, setOpenModal] = useState(0);

    var tittle;
    var modal = 0;

    function sendDeduction(){

        if(selectValue == 0 && selectGuilty == 1){
            setOpenModal(1);

            tittle = "Parabéns!"
        }
    }

    return(
        <>
            <div className={style.container}>
                <Sidebar />
                <section className={style.gameContainer}>
                    <div className={style.cardContainer}>
                        <div id="initGame" className={currentPage === 0 ? style.initGame : style.dNone}>
                            <section>
                                <h2>RA 2</h2>
                                <h1>Detective <br />Game</h1>
                            </section>
                            <button onClick={() => setCurrentPage(currentPage + 1)}>Play</button>
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
                                        
                                        <section className={selectValue == 0 ? style.answerContainer : style.opacityNone}>
                                            <label>Quem é o culpado?</label>
                                            <select value={selectGuilty} onChange={e => setSelectGuilty(e.target.value)} className={style.selectAnswer}>
                                                <option value="x" selected>Selecione</option>
                                                <option value="0" >Eduarda</option>
                                                <option value="1" >Daniel</option>
                                            </select>
                                        </section>
                                    </section>
                                    <button onClick={sendDeduction}>Enviar dedução</button>

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

                <div onClick={() => modal++} className={openModal == 1 ? style.modalDeductionBackground : style.opacityNone}>
                    <section onClick={() => modal++} className={openModal == 1 ? style.modalDeductionContainer : style.toggleModal}>
                        <setion className={style.modalHeader}>
                            <p>{tittle}</p>
                        </setion>
                        <setion className={style.modalBody}></setion>
                        <setion className={style.modalFooter}></setion>
                    </section>
                </div>
            </div>
        </>
    );
}