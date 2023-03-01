const ADD_POST = "ADD-POST";


let initialState = {
    productsData: [
        {
            id: 1,
            img: 'https://www.charuel.ru/upload/resize_cache/iblock/73f/445_445_1/%D0%92%D0%AB%D0%9F%D0%90%D0%94%D0%90%D0%A8%D0%9A%D0%90.jpg',
            title: 'КОФТА LOUNGE TONAL LOGO СВОБОДНОГО КРОЯ ИЗ ТОНКОГО ТКАНЬЯ',
            description: 'Это изделие содержит переходный хлопок, позволяющий фермерам перейти на органическое земледелие в течение трех лет. Хлопок выращивается без применения химических удобрений, пестицидов и генетически модифицированных семян'
        },
        {
            id: 2,
            img: 'https://www.charuel.ru/upload/resize_cache/iblock/73f/445_445_1/%D0%92%D0%AB%D0%9F%D0%90%D0%94%D0%90%D0%A8%D0%9A%D0%90.jpg',
            title: 'КОФТА LOUNGE TONAL LOGO СВОБОДНОГО КРОЯ ИЗ ТОНКОГО ТКАНЬЯ',
            description: 'Это изделие содержит переходный хлопок, позволяющий фермерам перейти на органическое земледелие в течение трех лет. Хлопок выращивается без применения химических удобрений, пестицидов и генетически модифицированных семян'
        },
        {
            id: 3,
            img: 'https://www.charuel.ru/upload/resize_cache/iblock/73f/445_445_1/%D0%92%D0%AB%D0%9F%D0%90%D0%94%D0%90%D0%A8%D0%9A%D0%90.jpg',
            title: 'КОФТА LOUNGE TONAL LOGO СВОБОДНОГО КРОЯ ИЗ ТОНКОГО ТКАНЬЯ',
            description: 'Это изделие содержит переходный хлопок, позволяющий фермерам перейти на органическое земледелие в течение трех лет. Хлопок выращивается без применения химических удобрений, пестицидов и генетически модифицированных семян'
        },
        {
            id: 4,
            img: 'https://www.charuel.ru/upload/resize_cache/iblock/73f/445_445_1/%D0%92%D0%AB%D0%9F%D0%90%D0%94%D0%90%D0%A8%D0%9A%D0%90.jpg',
            title: 'КОФТА LOUNGE TONAL LOGO СВОБОДНОГО КРОЯ ИЗ ТОНКОГО ТКАНЬЯ',
            description: 'Это изделие содержит переходный хлопок, позволяющий фермерам перейти на органическое земледелие в течение трех лет. Хлопок выращивается без применения химических удобрений, пестицидов и генетически модифицированных семян'
        },
    ],
};


const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    // debugger
    return {
        type: ADD_POST
    }
}


export default productsReducer;



