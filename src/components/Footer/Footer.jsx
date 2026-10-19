import s from './Footer.module.css'

export function Footer() {
    return (
        <footer>
            <div className={`${s.foot} container`}>
                <div className={`${s.l} logo`}>Цветочный</div>
                <nav>
                    <div className={s.col}>
                        <h4><a href="#">Главная</a></h4>
                        <a href="#">Заказы</a>
                        <a href="#">Избранное</a>
                        <a href="#">Корзина</a>
                    </div>
                    <div className={s.col}>
                        <h4>Покупателям</h4>
                        <a href="#">Где мой заказ</a>
                        <a href="#">Частые вопросы</a>
                        <a href="#">Бонусная программа</a>
                    </div>
                    <div className={s.col}>
                        <h4>Документы</h4>
                        <a href="#">Политика конфиденциальности</a>
                        <a href="#">Лицензия продавца</a>
                    </div>
                </nav>
                <div className={s.mes}>
                    <a href="#">VK</a>
                    <a href="#">OK</a>
                    <a href="#">RU</a>
                </div>
            </div>
        </footer>
    )
}