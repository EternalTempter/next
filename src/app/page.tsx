'use client'
import TeaItem from '@/components/TeaItem';
import { FC, useState } from 'react';

export type TypeTea = {
    id: number
    name: string
    imageSrc: string
    description: string
    rating: number
}

const HomePage:FC = () => {
    const [teaBase, setTeaBase] = useState<TypeTea[]>([
        {id: 1, name: 'Молочный улун', description: 'Это не просто чай, это ебаная Богемская Рапсодия среди видов чая. Один раз попробовав вкус не забудешь никогда', rating: 9, imageSrc: 'https://www.torrefacto.ru/upload/uf/bce/ps48cqez9lqxi1ruwbd4iallypedvke6.jpg'},
        {id: 2, name: 'Бай му дань', description: 'Популярный белый чай, произрастающий близ города Фудин китайской провинции Фуцзянь. Этот белый чай из нового урожая обладает освежающим травянистым вкусом с легкими оттенками фруктов и кураги. Бай Му Дань дает светлый золотистый настой с легким травянистым ароматом.', rating: 8, imageSrc: 'https://static.tildacdn.com/stor3832-3337-4236-a563-646231663861/44003192.png'},
        {id: 3, name: 'Мао Фен', description: 'Разновидность красного (черного) чая из провинции Юньнань. «Мао Фэн», что в переводе означает «Ворсистые Пики», известен своим сладким, мягким, медовым вкусом, который играет на фоне традиционных крепких, древесных оттенков. Отличный повседневный чай, который сделает вечер особенным, добавит медового тепла и кострового уюта.', rating: 8, imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdh-jlUrijeKocV_P9MCSt2RUdXoRVs8gMEg&s'},
        {id: 4, name: 'Матча', description: 'Японский порошковый зелёный чай. Традиционно используется в классической японской чайной церемонии. В наше время маття также широко используется как пищевая добавка к различным японским десертам вагаси, мороженому с зелёным чаем, а также к лапше соба. Также используется в парфюмерии и косметических средствах.', rating: 7, imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUBmYNqLL4-9PDnklzijn2sQ0hv-lEuXO5Lw&s'},
        {id: 5, name: 'Анчан', description: 'Травяной чай без кофеина, напиток, приготовленный из отвара или настоя цветочных лепестков или целого цветка растения клитории тройчатой (Clitoria ternatea). Клитория тройчатая также известна как мотыльковый горошек, голубой горошек, кордофанский горох, цветы синего чая или азиатские голубиные крылья', rating: 8, imageSrc: 'https://frangipani-dv.ru/wp-content/uploads/2019/03/8cA4rJGHUpI-1000x733.jpg'},
        {id: 6, name: 'Принцесса, прости господи, Нури', description: 'Это ахуенный чай если вы хотите заработать себе следующий букет болезней: пневмония, психосоциальное рассройство, геморрой, гепатит и другое. Пить советую только если собираетесь прощаться с жизнью', rating: 1, imageSrc: 'https://aqua-work.ru/dl_images/large/1c-good-00000022830-photo.jpg'},
        {id: 7, name: 'Майский пидорас', description: 'Буквально после первого глотка этой отравы для клещей вы почувствуете учащенное сердцебиение, давление, тошноту и перегрузку. Любите новые ощущения? Берите!', rating: -4, imageSrc: 'https://domtradicii.ru/wp-content/uploads/2019/01/84114129-212860107-600x600.jpeg'},
        {id: 8, name: 'Каждый день', description: 'Несмотря на то, что чай называется каждый день, если вы его выпьете, то ваши дни будут сочтены до одного. Мгновенная смерть наступает через 10 минут после попадания в организм. Заваривайте его только если хотите феерично покончить жизнь', rating: -6, imageSrc: 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/211/810/367/562/520/0/100036494978b0.jpg'},
    ]);
    return (
        <div className='w-full flex items-center flex-col'>      
            <h1 className='w-1/2 text-center mt-8 text-white'>Чай - это как объятие. Только в чашке. Когда на улице ненастье, и неохота выходить, то чашка чая — просто счастье… и это счастье можно пить ...</h1>
            <h1 className='w-1/2 text-center mt-16 text-white'>Choose your fighter</h1>
            <div className='w-full p-16 flex flex-wrap justify-evenly'>
                {teaBase.map(tea => 
                    <TeaItem
                        key={tea.id}
                        id={tea.id}
                        name={tea.name}
                        imageSrc={tea.imageSrc}
                        description={tea.description}
                        rating={tea.rating}
                    />
                )}
            </div>
        </div>
    );
};

export default HomePage;