import React from 'react';
import Secretary from './components/Secretary/Secretary';
import GeneralManager from './components/GeneralManager/GeneralManager';
import Cashier from './components/Cashier/Cashier';
import HouseAgent from './components/HouseAgent/HouseAgent';
import MainPage from './MainPage/MainPage';
import BossOfManage from './components/BossOfManage/BossOfManage';
/* 
import Marketing from './components/Marketing/Marketig';
import SiteAdministrator from './components/SiteAdministrator/SiteAdministrator';
import BossOfCommerce from './components/BossOfCommerce/BossOfCommerce'; 
*/

let viewsArr = [
  {
    nameView: 'MainPage',
    user: 'default',
    active: true
  },
  {
    nameView: 'Secretary',
    user: 'jorgelina',
    active: false,
  },
  {
    nameView: 'Cashier',
    user: 'liliana',
    active: false,
  },
  {
    nameView: 'GeneralManager',
    user: 'felipeRuiz',
    active: false,
  },
  {
    nameView: 'BossOfManage',
    user: 'micaela',
    active: false,
  },
  {
    nameView: 'Marketing',
    user: 'nameUser',
    active: false,
  },
  {
    nameView: 'HouseAgent',
    user: 'nedBigby',
    active: false,
  },
  {
    nameView: 'SiteAdministrator',
    user: 'nameUser',
    active: false,
  },
  {
    nameView: 'BossOfCommerce',
    user: 'nameUser',
    active: false,
  }
];

const App = () => {
  const [currentView, setView] = React.useState(viewsArr);
  const activeView = view => view.active;
  const indexActiveView = currentView.findIndex(activeView);

  const redirect = user => setView(
    [
      ...currentView, 
      currentView[indexActiveView].active = false, 
      currentView[currentView.findIndex(v => v.user === user)].active = true
    ]
  );

  const exitVirtualOffice = () => setView(
    [
      ...currentView, 
      currentView[indexActiveView].active = false, 
      currentView[currentView.findIndex(v => v.user === 'default')].active = true
    ]
  );

  const renderView = userLoged =>
    (userLoged === 'default')
      ? <MainPage goToVirtualOffice={redirect} />
      : (userLoged === 'jorgelina') 
        ? <Secretary exit={exitVirtualOffice}/>
        : (userLoged === 'felipeRuiz')
          ? <GeneralManager fnExit={exitVirtualOffice}/>
          : (userLoged === 'micaela')
            ? <BossOfManage fnExit={exitVirtualOffice}/>
            : (userLoged === 'liliana')
              ? <Cashier fnExit={exitVirtualOffice}/>
              : (userLoged === 'nedBigby')
                ? <HouseAgent fnExit={exitVirtualOffice} />
                : <h1>Not found 404</h1>
  ;

  return (
    <>
      {renderView(currentView[indexActiveView].user)}
    </>
  )
}

export default App;