import Link from 'next/link';
import React from 'react';

export default function ResponsiveNavLink({ href, children }) {
  return (
    <li>
      <Link href={href} className="px-4 py-2 text-sm hover:bg-gray-200 text-gray-700 hover:text-black block">
        {children}
      </Link>
    </li>
  );
}
