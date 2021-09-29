import Link from 'next/link';

const NavItems = ({ topHeader }: { topHeader?: boolean }) => (
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
    {!topHeader && (
      <li>
        <Link href="https://www.freeprivacypolicy.com/live/fa18c9b6-2d48-4e33-a922-6dee7818f449">
          <a target="_blank" rel="noopener noreferrer">
            Polisa privatnosti
          </a>
        </Link>
      </li>
    )}

    {!topHeader && (
      <li>
        <Link href="https://www.freeprivacypolicy.com/live/6ef84ffa-8497-4d08-a9b2-29c9e56d6f02">
          <a target="_blank" rel="noopener noreferrer">
            Uslovi korištenja
          </a>
        </Link>
      </li>
    )}
  </>
);

export { NavItems };
