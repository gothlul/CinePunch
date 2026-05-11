import type { HTMLAttributeAnchorTarget } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type IconDefinition } from '@fortawesome/fontawesome-svg-core';

type NavigationItem = {
  icon: IconDefinition
  children: string
  href: string
  target?: HTMLAttributeAnchorTarget | undefined 
};

function NavItem({
  icon,
  children,
  href,
  target = "_self"
}: NavigationItem,) {

  return (
    <li className='text-xs'>
        <a href={href} className="flex gap-x-[0.8vw]" target={target}>
          <span className="icon"><FontAwesomeIcon icon={icon} /></span>
          <span className='uppercase'>{children}</span>
        </a>
    </li>
  )
}

export default NavItem
