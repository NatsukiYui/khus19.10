import s from './Header.module.css'

export function Header() {
    return (
        <header>
            <div className={`${s.head} container`}>
                <div className="logo">Цветочный</div>
                <nav>
                    <a href="#">Главная</a>
                    <a href="#">Каталог</a>
                    <a href="#">Корзина</a>
                </nav>
            </div>
        </header>
    )
}