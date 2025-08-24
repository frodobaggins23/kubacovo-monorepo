// Component-specific logic for special cases
const COMPONENT_SPECIFICS = {
  Avatar: {
    generateContent: (variant, index) => {
      const initials = ['JD', 'AM', 'SK', 'RF'][index] || 'XX';
      return initials;
    },
    surfaceSmallContent: 'SM',
    surfaceDefaultContent: 'DF',
    sizeSmallContent: 'SM',
    sizeMediumContent: 'MD',
    sizeLargeContent: 'LG',
    disabledContent: 'DX'
  }
  // Add other component-specific logic as needed
};

module.exports = { COMPONENT_SPECIFICS };