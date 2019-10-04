import React from 'react';

import { 
    OpenInNew,
    Assignment,
    PhoneAndroid,
    WifiTethering,
    ViewQuilt,
    AccountTree,
    Person,
    Keyboard,
    PeopleOutline,
    Group,
    Help,
    Equalizer
} from '@material-ui/icons';

export const SA_MENU_PATH = [
    { 
        title: 'Dashboard',
        path: '/dashboard',
        children: [
            { title: 'Dashboard Customization', path: '/customization', icon: <OpenInNew /> },
            { title: 'Reports', path: '/reports', icon: <Assignment /> },
        ],
    },
    { 
        title: 'Program',
        path: '/program',
        children: [
            { title: 'App Builder', path: '/app-builder', icon: <PhoneAndroid /> },
            { title: 'Broadcast', path: '/broadcast', icon: <WifiTethering /> },
            { title: 'Templates', path: '/templates', icon: <ViewQuilt /> },
            { title: 'Workflow', path: '/workflow', icon: <AccountTree /> },
        ],
    },
    { 
        title: 'Team Management',
        path: '/team-management',
        children: [
            { title: 'Users', path: '/users', icon: <Person /> },
            { title: 'Groups', path: '/groups', icon: <Group /> },
        ],
    },
    { 
        title: 'More',
        path: '/more',
        children: [
            { title: 'Help', path: '/help', icon: <Help /> },
        ],
    },
];

export const CLIENT_MENU_PATH = [
    { 
        title: 'Dashboard',
        path: '/dashboard',
        icon: <Keyboard />,
        children: [
            { title: 'Dashboard Customization', path: '/customization' },
            { title: 'Reports', path: '/reports' },
        ],
    },
    { 
        title: 'Program',
        path: '/program',
        icon: <Equalizer />,
        children: [
            { title: 'App Builder', path: '/app-builder' },
            { title: 'Broadcast', path: '/broadcast' },
            { title: 'Templates', path: '/templates' },
            { title: 'Workflow', path: '/workflow' },
        ],
    },
    { 
        title: 'Team Management',
        path: '/team-management',
        icon: <PeopleOutline />,
        children: [
            { title: 'Users', path: '/users' },
            { title: 'Groups', path: '/groups' },
        ],
    },
    { 
        title: 'More',
        path: '/more',
        icon: <Help />
    },
];