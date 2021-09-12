import Link from 'next/link';

const NavItems = () => (
  <>
    <li>
      <Link href="/">
        <a>Početna</a>
      </Link>
    </li>
    <li>
      <Link href="https://www.facebook.com/mladjenovicmatrica">
        <a target="_blank" rel="noopener noreferrer">
          FB stranica
        </a>
      </Link>
    </li>
  </>
);

export { NavItems };
