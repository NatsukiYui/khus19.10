import s from './Banner.module.css'

export function Banner() {
    return (
        <main className='my120'>
            <div className={`${s.banner} container`}>
                <h1>Заказать букет</h1>
                <p>Бесплатная доставка свежих цветов на дом! Наш цветочный!</p>
                <a href="#" className={s.btn}>Каталог</a>
            </div>
        </main>
    )
}