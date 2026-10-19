import s from './Subscribe.module.css'

export function Subscribe() {
    return (
        <div className={`${s.subscribe} my120`}>
            <div className={`${s.text} container`}>
                <h3>Будь в курсе новинок</h3>
                <div className={s.sub}>
                    <label>Подпишитесь на рассылку, чтобы первым узнавать о поступлениях, акциях и эксклюзивных предложениях.</label>
                    <input type="email" placeholder='Email' />
                    <div className={s.agree}>
                        <input type="checkbox" name="" id="agree" />
                        <label htmlFor="agree"></label>
                        <p>Даю согласие на обработку персональных данных</p>
                    </div>
                    <input type="submit" value="Подписаться" />
                </div>
            </div>
        </div>
    )
}