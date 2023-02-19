import React from 'react';
import styleArticle from './Article.module.css';

const Article = () => {
    return (
        <div className={styleArticle.article}>
            <h1 className={styleArticle.title}>Title</h1>
            <div className={styleArticle.text}>Text...</div>
            <div className={styleArticle.info}>
                <div className={styleArticle.data}>
                    <div className={styleArticle.date}>17 февраля</div>
                    <div className={styleArticle.like}>Like</div>
                    <div className={styleArticle.dislike}>Dislike</div>
                </div>
            </div>
            <div className={styleArticle.comments}>Comments</div>
        </div>
    );
};

export default Article;