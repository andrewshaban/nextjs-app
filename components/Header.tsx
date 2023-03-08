'use client';

import HeaderLink from './HeaderLink';

type Props = {};

function Header({}: Props) {
  return (
    <header>
      <div>Logo</div>
      <div>
        <HeaderLink />
      </div>
    </header>
  );
}

export default Header;
