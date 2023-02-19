import styleNews from './News.module.css';
import Article from "../Article/Article";

const News = () => {
    return (
        <div className={styleNews.articles}>
            <Article />
        </div>
    )
}

export default News;