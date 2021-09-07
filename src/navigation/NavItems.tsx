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
        <a>Način rada</a>
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
