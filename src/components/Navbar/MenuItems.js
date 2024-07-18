export const MenuItems = [
    {
        title: 'Home',
        url: '../Home',
        cName: 'nav-links'
    },
    {
        title: 'About',
        url: '../About',
        cName: 'nav-links',
        subMenu: [
            {
                title: 'About Us',
                url: '../About',
                cName: 'sub-nav-links'
            },
            {
                title: 'Course',
                url: '../About/Course',
                cName: 'sub-nav-links'
            }
        ]
    },
    {
        title: 'Contact Us',
        url: '../Contact_Us',
        cName: 'nav-links'
    }
];
