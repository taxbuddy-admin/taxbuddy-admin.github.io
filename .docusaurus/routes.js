import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '0b6'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '97f'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'e5a'),
            routes: [
              {
                path: '/calculators/epf-calculator',
                component: ComponentCreator('/calculators/epf-calculator', '201'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/calculators/epf-calculator-v1',
                component: ComponentCreator('/calculators/epf-calculator-v1', '2df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/calculators/form-12bb-calculator',
                component: ComponentCreator('/calculators/form-12bb-calculator', '8b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/calculators/nps-calculator',
                component: ComponentCreator('/calculators/nps-calculator', '6ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/calculators/nps-calculator-v1',
                component: ComponentCreator('/calculators/nps-calculator-v1', '8da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/calculators/old-vs-new-regime',
                component: ComponentCreator('/calculators/old-vs-new-regime', '752'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/calculators/pension-calculator',
                component: ComponentCreator('/calculators/pension-calculator', 'f66'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'fc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
