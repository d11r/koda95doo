import Link from 'next/link';

const NavItems = () => (
  <>
    <li>
      <Link href="/">
        <a>Početna</a>
      </Link>
    </li>
    <li>
      <Link href="/">
        <a>O nama</a>
      </Link>
    </li>
    <li>
      <Link href="/">
        <a>Partneri</a>
      </Link>
    </li>
  </>
);

export { NavItems };
