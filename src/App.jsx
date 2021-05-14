import React from 'react';
import Secretary from './components/Secretary/Secretary';
import GeneralManager from './components/GeneralManager/GeneralManager';
import Cashier from './components/Cashier/Cashier';
import HouseAgent from './components/HouseAgent/HouseAgent';
import MainPage from './MainPage/MainPage';
import BossOfManage from './components/BossOfManage/BossOfManage';
import Marketing from './components/Marketing/Marketing';
import SiteAdministrator from './components/SiteAdministrator/SiteAdministrator';
import BossOfCommerce from './components/BossOfCommerce/BossOfCommerce'; 

let viewsArr = [
  {
    nameView: 'MainPage',
    user: 'default',
    active: true
  },
  {
    nameView: 'Secretary',
    user: 'jennifer',
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
    user: 'cookie',
    active: false,
  },
  {
    nameView: 'HouseAgent',
    user: 'nedBigby',
    active: false,
  },
  {
    nameView: 'SiteAdministrator',
    user: 'foxMulder',
    active: false,
  },
  {
    nameView: 'BossOfCommerce',
    user: 'jorgelina',
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
      : (userLoged === 'jennifer') 
        ? <Secretary exit={exitVirtualOffice}/>
        : (userLoged === 'felipeRuiz')
          ? <GeneralManager fnExit={exitVirtualOffice}/>
          : (userLoged === 'micaela')
            ? <BossOfManage fnExit={exitVirtualOffice}/>
            : (userLoged === 'liliana')
              ? <Cashier fnExit={exitVirtualOffice}/>
              : (userLoged === 'nedBigby')
                ? <HouseAgent fnExit={exitVirtualOffice} />
                : (userLoged === 'cookie')
                  ? <Marketing fnExit={exitVirtualOffice}/>
                  : (userLoged === 'foxMulder')
                    ? <SiteAdministrator fnExit={exitVirtualOffice}/>
                    : (userLoged === 'jorgelina')
                      ? <BossOfCommerce fnExit={exitVirtualOffice}/>
                      : <h1>404 not Found</h1>

  ;

  return (
    <>
      {renderView(currentView[indexActiveView].user)}
    </>
  )
}

export default App;
