import React from 'react';
import './Articles.css';
import Ebeniste from './uploads/ebeniste.jpg';
import Dev from './uploads/dev.jpg';
import Fullstack from './uploads/fullstack.jpg';
import Poinso from './uploads/poinso.jpg';
import Webforce from './uploads/webforce.jpg';
import MDSchool from './uploads/mds.png'

const Articles = () => {
  return (
    <div className="articlesContainer">
      <div className="articlesHeader">
        <h2>Parcours Scolaire et Formations</h2>
        <p>Explorez des Ressources Expertes pour Cultiver l'Équilibre et la Santé Mentale</p>
      </div>
      
      <div className="articlesContent">
        <div className="discoverBlock">
          <h3><b>Découvrez</b></h3>
          <p>Découvrez une riche sélection d'articles et de conseils élaborés par des professionnels de la santé mentale, conçus pour vous guider dans votre voyage vers le bien-être mental. De la gestion du stress à l'amélioration de l'estime de soi, notre plateforme offre un soutien précieux.</p>
        </div>

        <div className="articlesList">
          {/* Repeat this block for each article */}
          <div className="articleItem">
            <img src={Ebeniste} alt="Article thumbnail" className="articleImage" />
            {/* <div className='articleTag-parent'>
              <span className="articleTag">Isolement social</span>
            </div> */}
            <h4 className="articleTitle">10 Stratégies Simples pour Gérer l'Anxiété au Quotidien</h4>
            <p className="articleAuthor">Merlie-Claire Gustav</p>
            <div className='logo-article'>
              <img src={Poinso} className='logo-img' />
              <p className="articleDate">2 avril 2024</p>
            </div>
          </div>
          <div className="articleItem">
            <img src={Dev} alt="Article thumbnail" className="articleImage" />
            {/* <div className='articleTag-parent'>
              <span className="articleTag">Isolement social</span>
            </div> */}
            <h4 className="articleTitle">10 Stratégies Simples pour Gérer l'Anxiété au Quotidien</h4>
            <p className="articleAuthor">Merlie-Claire Gustav</p>
            <div className='logo-article'>
              <img src={Webforce} className='logo-img' />
              <p className="articleDate">2 avril 2024</p>
            </div>
          </div>
          <div className="articleItem">
            <img src={Fullstack} alt="Article thumbnail" className="articleImage" />
            {/* <div className='articleTag-parent'>
              <span className="articleTag">Isolement social</span>
            </div> */}
            <h4 className="articleTitle">10 Stratégies Simples pour Gérer l'Anxiété au Quotidien</h4>
            <p className="articleAuthor">Merlie-Claire Gustav</p>
            <div className='logo-article'>
              <img src={MDSchool} className='logo-img' />
              <p className="articleDate">2 avril 2024</p>
            </div>
          </div>
          {/* ...other articles */}
        </div>
      </div>

      {/* <div className="navigationButtons">
        <button className="prevButton">←</button>
        <button className="nextButton">→</button>
      </div> */}
    </div>
  );
};

export default Articles;
