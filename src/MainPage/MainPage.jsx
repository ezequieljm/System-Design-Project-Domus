import React from 'react';
import LogotypeCompany from './LogotypeCompany/LogotypeCompany';
import PicturesOfHouse from './PicturesOfHouse/PicturesOfHouse';
import LoginUser from './LoginUser/LoginUser';
import './mainPage.css';

const MainPage = ({reDirect}) => {
  const [picturesActive, setImagenes] = React.useState(true);
  const desplegarForm = () => setImagenes(false);

  return (
    <div className="main-content">
      <LogotypeCompany eventIngresar={desplegarForm} />
      {picturesActive ? <PicturesOfHouse /> : <LoginUser goToVirtualOffice={reDirect} />}
    </div>
  )
} 
export default MainPage;