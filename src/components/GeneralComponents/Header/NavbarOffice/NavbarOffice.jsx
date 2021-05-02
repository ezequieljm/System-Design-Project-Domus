import React from 'react';

const NavbarOffice = ({extendFn}) => {
  return (
    <div className="navbar-office">
      <div className="icono">Icono</div>
      <h3>Domus 2.0</h3>
      <div id="oficina-virtual">Oficina virtual</div>
      <button>Ayuda</button>
      <button onClick={extendFn}>Salir</button>
      <div id="user-logotype">Jorgelina</div>
    </div>
  );
};

export default NavbarOffice;