import React from 'react';
import './MainNav.scss';

type MainNavProps = {
    children?: React.ReactNode,
    tabs?: boolean,
    pills?: boolean,
    aligment?: string,
    vertical?: boolean,
}


const MainNav = ({children, tabs, pills, aligment, vertical}:MainNavProps) => {
    const className = [
        'nav',
        tabs ? 'tabs' : pills ? 'pills' : '',
        aligment ? aligment : '',
        vertical ? 'vertical' : 'horizontal'
    ].join(' ').trim();

    return(
        <ul className={className}>
            {children}
        </ul>
    )
}

export default MainNav;