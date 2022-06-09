import React from 'react';
import NavBar from 'components/NavBar';
import Banner from 'components/Common/Banner';

const Index = () => {
  return (
    <header className="top-0 sticky z-50 bg-primary-dark">
      <Banner>Si sos <strong>profesor</strong> de Coderhouse o <strong>colaborador</strong> del programa LevelUp de Teco accedé al descuento del ⌛20% OFF por Tiempo Limitado 💜</Banner>
      <NavBar/>
    </header>
  )
}

export default Index