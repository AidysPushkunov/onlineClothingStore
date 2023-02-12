import styleShowProduct from './ShowProduct.module.css';

const ShowProduct = () => {
    return (
        <div className={styleShowProduct.main}>
            <div className={styleShowProduct.image}>
                <img src="https://cdn.urbanvibes.com/upload/mdm/media_content/resize/a09/500_500_4afa/61408270299.jpg" alt="main-image"/>
            </div>
            <div className={styleShowProduct.text}>
                <div className={styleShowProduct.brand}>
                    Sarakai
                    <div className={styleShowProduct.line}></div>
                </div>
                <div className={styleShowProduct.title}>КОФТА LOUNGE TONAL LOGO СВОБОДНОГО КРОЯ ИЗ ТОНКОГО ТКАНЬЯ</div>
                <div className={styleShowProduct.description}>
                    Это изделие содержит переходный хлопок, позволяющий фермерам перейти на органическое земледелие в течение трех лет. Хлопок выращивается без применения химических удобрений, пестицидов и генетически модифицированных семян
                </div>
            </div>
        </div>
    )
}

export default ShowProduct;