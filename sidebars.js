/** @type {import('@docusaurus/types').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Calculators',
      items: [
        'calculators/pension-calculator',
        'calculators/nps-calculator',
        'calculators/nps-calculator-v1',
        'calculators/epf-calculator',
        'calculators/epf-calculator-v1',
        'calculators/form-12bb-calculator',
        'calculators/old-vs-new-regime',
      ],
    },
  ],
};

module.exports = sidebars;