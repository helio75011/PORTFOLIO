import React from 'react';
import Frontend from './uploads/front.webp';
import Backend from './uploads/back.webp';
import Deploy from './uploads/deploy.webp';

const Section = () => {
  return (
    <div>
      <div className='my-6 h-1 w-full bg-opacity-20' />
        <section className='relative lg:p-22 md:py-16 bg-body overflow-hidden'>
          <img
            className='absolute bottom-0 right-0'
            src='casper-assets/features/double-line-circle.svg'
            alt=''
          />
          <img
            className='hidden md:block z-10 absolute top-0 left-0 mt-24 ml-4 lg:ml-24 xl:ml-64 animate-spinStar'
            src='casper-assets/features/blink-star.png'
            alt=''
          />
          <div className='relative container mx-auto px-4'>
            <div className='absolute bottom-0 left-0 -mb-20 w-160 h-160 bg-gradient-to-t from-purple-700 to-darkBlue-900 rounded-full filter blur-4xl' />
            <div className='absolute bottom-0 right-0 -mb-20 w-148 h-148 bg-gradient-to-t from-violet-900 to-darkBlue-900 rounded-full filter blur-4xl' />
            <div className='relative'>
              <div className='max-w-xl mx-auto mb-16 text-center'>
                <h2 className='md:text-6xl  mb-6'>
                  Construisons votre Projet Ensemble
                </h2>
                <p className='text-xl text-gray-400'>
                Boostez votre entreprise avec le développement d'un web et d'une application mobile complète : backend robuste, frontend élégant et déploiement agile
                </p>
              </div>
              <div className='flex flex-wrap -mx-4'>
                <div className='w-full lg:w-1/3 px-4 mb-8 lg:mb-0'>
                  <div className='max-w-md mx-auto h-full p-8 rounded-3xl shadow-box-violet overflow-hidden bg-blue-500 bg-opacity-10'>
                    <div className='flex mb-12 items-center'>
                      <img src={Frontend} className='flex-shrink-0 flex mr-4 items-center justify-center w-16 h-16 rounded-full' />
                      <div>
                        <h4 className='text-2xl font-medium leading-tight'>
                          <span className='block'>Du Frontend</span>
                          <span>Orienté UI/UX</span>
                        </h4>
                      </div>
                    </div>
                    <p className='text-xl text-gray-400'>
                      Développement frontend innovant et UI/UX optimisé pour une expérience utilisateur fluide.
                    </p>
                  </div>
                </div>
                <div className='w-full lg:w-1/3 px-4 mb-8 lg:mb-0'>
                  <div className='max-w-md mx-auto h-full p-8 rounded-3xl shadow-box-orange overflow-hidden bg-blue-500 bg-opacity-10'>
                    <div className='flex mb-12 items-center'>
                      <img src={Backend} className='flex-shrink-0 flex mr-4 items-center justify-center w-16 h-16 rounded-full' />
                      <div>
                        <h4 className='text-2xl font-medium leading-tight'>
                          <span className='block'>Au Backend</span>
                          <span>Avec site web sécurisé</span>
                        </h4>
                      </div>
                    </div>
                    <p className='text-xl text-gray-400'>
                      Backend robuste et sécurisé, assurant performance et protection des données.
                    </p>
                  </div>
                </div>
                <div className='w-full lg:w-1/3 px-4'>
                  <div className='max-w-md mx-auto h-full p-8 rounded-3xl shadow-box-green overflow-hidden bg-blue-500 bg-opacity-10'>
                    <div className='flex mb-12 items-center'>
                      <img src={Deploy} className='flex-shrink-0 flex mr-4 items-center justify-center w-16 h-16 rounded-full' />
                      <div>
                        <h4 className='text-2xl font-medium leading-tight'>
                          <span className='block'>Jusqu'au</span>
                          <span>Déploiement</span>
                        </h4>
                      </div>
                    </div>
                    <p className='text-xl text-gray-400'>
                      Déploiement fluide et efficace du site web, garantissant une mise en ligne rapide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='my-6 h-1 w-full bg-opacity-20' />
        </section>
    </div>
  )
}

export default Section