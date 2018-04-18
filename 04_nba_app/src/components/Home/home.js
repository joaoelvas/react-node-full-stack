import React from 'react';

import NewsSlider from '../Widgets/NewsSlider/slider'
import NewsList from '../Widgets/NewsList/news_list';

const Home = () => {
    return (
        <div>
            <NewsSlider
                type="featured"
                start={0}
                end={3}
                settings={{
                    dots: false
                }}
            />
            <NewsList
                type="card"
                loadmore={true}
                start={3}
                amount={3}
            />
        </div>
    )
}

export default Home;