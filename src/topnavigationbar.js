import React, { useMemo } from 'react';
import { TopNavigation } from '@cloudscape-design/components';
import logo from './s3+g.png'
const TopNavigationBar = ({ user, handleUserProfileAction }) => {
    const utilities = useMemo(() => {
        const menu = [];

        if (user) {
            menu.push({ type: 'button', text: 'Organizations', href: '/organizations', external: false });
            menu.push({
                type: 'menu-dropdown',
                text: user.username.split('_')[1],
                description: user.username.split('_')[1],
                iconName: 'user-profile',
                onItemClick: handleUserProfileAction,
                items: [{ id: 'signout', text: 'Sign out' }],
            });
        }

        return menu;
    }, [user]);

    return <TopNavigation identity={{
        href: '#',
        title: 'Operational Planning',
        logo: {
            src: logo,
            alt: "Service"
        }
    }} utilities={utilities} />;
};

export default TopNavigationBar;
