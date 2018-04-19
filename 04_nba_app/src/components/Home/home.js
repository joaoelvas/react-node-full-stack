import React from 'react';

import NewsSlider from '../Widgets/NewsSlider/slider'
import NewsList from '../Widgets/NewsList/news_list';
import VideosList from '../Widgets/VideosList/videos_list';

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
            <VideosList
                type="card"
                title={true}
                loadmore={true}
                start={0}
                amount={3}
            />
        </div>
    )
}

export default Home;