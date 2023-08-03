import React, { useMemo } from 'react';
import { SideNavigation } from '@cloudscape-design/components';

const SideNavigationBar = ({ activeHref }) => {
    const navItems = [
        {
            type: 'section',
            text: 'Organization',
            items: [
                { type: 'link', text: 'Projects', href: '/projects' },
                { type: 'link', text: 'Initiatives', href: '/initiatives' },
                { type: 'link', text: 'Themes', href: '/themes' },
                { type: 'link', text: 'Plans', href: '/plans' },
                { type: 'link', text: 'Teams', href: '/teams' }
            ]
        },
        {
            type: 'section',
            text: 'Goals',
            items: [
                { type: 'link', text: 'Input Goal', href: '/inputgoal' },
                { type: 'link', text: 'Output Goal', href: '/outputgoal' }
            ]
        }
    ];

    return <SideNavigation activeHref={activeHref} header={{ href: '/', text: 'Operational Planning' }} items={navItems} />;
};

export default SideNavigationBar;
