export const CLIENT_MENU_PATH = [
    { 
        title: 'Dashboard',
        path: '/dashboard',
        children: [
            { title: 'Dashboard Customization', path: '/customization', icon: 'OpenInNewIcon' },
            { title: 'Reports', path: '/reports', icon: 'AssignmentIcon' },
        ],
    },
    { 
        title: 'Program',
        path: '/program',
        children: [
            { title: 'App Builder', path: '/app-builder', icon: 'PhoneAndroidIcon' },
            { title: 'Broadcast', path: '/broadcast', icon: 'WifiTetheringIcon' },
            { title: 'Templates', path: '/templates', icon: 'ViewQuiltIcon' },
            { title: 'Workflow', path: '/workflow', icon: 'AccountTreeIcon' },
        ],
    },
    { 
        title: 'Team Management',
        path: '/team-management',
        children: [
            { title: 'Users', path: '/users', icon: 'PersonIcon' },
            { title: 'Groups', path: '/groups', icon: 'GroupIcon' },
        ],
    },
    { 
        title: 'More',
        path: '/more',
        children: [
            { title: 'Help', path: '/help', icon: 'HelpIcon' },
        ],
    },
];