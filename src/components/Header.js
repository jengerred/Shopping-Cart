import React from 'react';

function Header(props) {
  return (
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Shopping Cart Demo</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin"> SignIn</a>
      </div>
    </header>
  );
}
export default Header;