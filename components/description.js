import React from "react";
import Image from 'next/image'
import santaNav from '../img/santawithChristmastree.png'
import styles from '../styles/Description.module.css'

function Description () {
    return (
        <>
            <div className={styles.descriptionWrapper}>
                <div className={styles.descriptionWrapperImg}>
                <Image
                    src={santaNav}
                    alt="Picture of the author"
                    width="20px"
                    height="20px"
                />
                </div>
                <div className={styles.descriptionWrapperNav}>
                <nav>
                    <ul>
                        <li>
                        <b>Привіт 👋 коротенькі підсказки для тебе</b>  
                        </li>
                        <li>
                            - Якщо ти вперше тут,перейди на вкладку 'Інформація' вверху 👆
                        </li>
                        <li>
                            - При створені чи підключенні обовязково вводь коректну пошту ( я туди надішлю лист)
                        </li>
                        <li>
                            - Також стосовно твого Імені, вводь обовязково все коректно, щоб твої друзі знали що це ти.<br></br>
                            <span></span>До Імені в дужки можеш дописати якусь підсказку, можливо локальні вказівки на тебе ( це у випадку <br></br>
                            <span></span>якщо у вашій компанії наприклад дві людини з однаковим Іменем)
                        </li>
                        <li>
                            - І останнє, перед стартом гри я покажу хто є в грі, переконайся що вас парна кількість <br></br>
                            <span></span>щоб хтось не залишився без подаруночка 😥
                        </li>
                    </ul>
                </nav>
                </div>

            </div>
        </>
    )
}

export default Description