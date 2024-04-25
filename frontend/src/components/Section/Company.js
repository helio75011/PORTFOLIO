import React from 'react'
import './styles/Company.css'
import Textiss from './uploads/logo-textiss.png'

const Company = () => {
  return (
    <div>
      <div className='max-w-xl mx-auto mb-16 text-center'>
        <h2 className='font-heading text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight mb-6'>
          My work at
        </h2>
        <img className='logo-textiss' src={Textiss} />
      </div>
      <div className="section-container" id='section-container'>
        <div className="block1" id="crazy-boxer">
          <div className="title" id='title'>
            <img className='logo-crazyboxer' src="https://cdn.shopify.com/s/files/1/2139/8923/files/Fichier_30_8xlogoblack.png?height=628&pad_color=fff&v=1620398921&width=1200" />
          </div>
          <div className="content" id='content'>Seamless Integration<br />Powered by state-of-the-art artificial intelligence, ensuring natural and meaningful</div>
        </div>
        {/* Other blocks */}
        <div className="block2" id="crazy-boxer">
          <div className="title" id='title'>
            <img src="https://www.frenchmarket.eu/img/m/7.jpg" />
          </div>
          <div className="content" id='content'>Seamless Integration<br />Powered by state-of-the-art artificial intelligence, ensuring natural and meaningful</div>
        </div>
        {/* Other blocks */}
        <div className="block3" id="crazy-boxer">
          <div className="title" id='title'>
            <img src="https://hypnocrazy.com/cdn/shop/files/HYPNOCRAZY-DEF_1_eba2235b-d355-45a1-b606-701e805cb7f7.png?v=1680014180&width=350" />
          </div>
          <div className="content" id='content'>Seamless Integration<br />Powered by state-of-the-art artificial intelligence, ensuring natural and meaningful</div>
        </div>
        {/* Other blocks */}
        <div className="block4" id="crazy-boxer">
          <div className="title" id='title'>
            <img src="https://www.mpadeco.com/resize/500x500/zc/3/f/0/src/sites/mpadeco/files/products/12014.png" />
          </div>
          <div className="content" id='content'>Seamless Integration<br />Powered by state-of-the-art artificial intelligence, ensuring natural and meaningful</div>
        </div>
        {/* Other blocks */}
        <div className="block5" id="crazy-boxer">
          <div className="title" id='title'>
            <img src="https://media1.frenchmarket.eu/img/m/1.jpg" />
          </div>
          <div className="content" id='content'>Seamless Integration<br />Powered by state-of-the-art artificial intelligence, ensuring natural and meaningful</div>
        </div>
        {/* Other blocks */}
      </div>
    </div>
  );
};

export default Company