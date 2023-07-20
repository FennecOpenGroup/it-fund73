export const ButtonStyles = {
  baseStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0px',
    transitionDuration: '0.3s',
    _focus: {
      shadow: 'none',
    },
    _hover: {
      WebkitTapHighlightColor: 'transparent',
    },
  },
  sizes: {
    xs: {
      fontSize: ['xs'],
      px: 2,
      py: 4,
    },
    sm: {
      fontSize: ['xs', 'sm'],
      py: 5,
    },
    md: {
      fontSize: ['sm', 'md'],
      py: 6,
    },
    link: {
      p: 0,
      fontSize: ['xs'],
      fontWeight: 'normal',
    },
    allIn: {
      fontSize: ['xs'],
      px: [2, 3],
      py: 4,
    },
  },
  variants: {
    'brand-reactions': {
      color: 'brand.dark',
      bg: 'transparent',
      _hover: {
        color: 'brand.blue',
      },
    },
    'brand-icon': {
      color: 'white',
      bg: 'transparent',
      fontWeight: 'light',
      _hover: {
        fontWeight: 'bold',
        color: 'brand.blue',
      },
    },
    'brand-header': {
      color: 'white',
      bg: 'transparent',
      px: 2,
      fontWeight: 'light',
      _hover: {
        background: 'brand.blue',
      },
    },
    'brand-menu': {
      color: 'white',
      bg: '#5F5F5F',
      borderRadius: '0px',
      _hover: {
        color: 'brand.blue',
      },
    },
    'brand-news': {
      color: 'brand.dark',
      bg: 'transparent',
      borderRadius: '0px',
      borderTop: '2px',
      borderBottom: '2px',
      _hover: {
        color: 'brand.blue',
      },
    },
    'brand-link': {
      color: 'brand.dark',
      borderRadius: '0px',
      fontWeight: 'normal',
      _hover: {
        color: 'brand.blue',
        textDecoration: 'underline',
      },
    },
    'brand-high': {
      color: 'white',
      bg: 'brand.dark',
      borderRadius: '0px',
      fontWeight: 'normal',
      transitionDuration: '0.3s',
      _hover: {
        color: 'white',
        bg: 'brand.blue',
        borderRadius: '5px',
      },
    },
    'brand-high-white': {
      color: 'brand.dark',
      bg: 'white',
      boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5); ',
      borderRadius: '10px',
      fontWeight: 'normal',
      transitionDuration: '0.3s',
      _hover: {
        color: 'white',
        bg: 'brand.dark',
        borderRadius: '5px',
        boxShadow: 'none',
      },
      _active: {
        color: 'white',
        bg: 'brand.dark',
        borderRadius: '5px',
        boxShadow: 'none',
      },
    },
    'brand-footer': {
      color: 'white',
      padding: '0px',
      bg: 'transparent',
      fontWeight: 'light',
      _hover: {
        border: '2px solid white',
        borderRadius: '10px',
      },
    },
    'brand-calendar': {
      color: 'brand.dark',
      bg: 'white',
      borderRadius: '0px',
      border: '2px',
      borderColor: 'brand.dark',
      _hover: {
        color: 'white',
        bg: 'brand.blue',
        borderColor: 'brand.blue',
        border: '2px',
        borderRadius: '5px',
      },
    },
    'brand-circle-border': {
      color: 'brand.dark',
      border: '2px solid #1a1a1a',
      borderRadius: '10px',
      bg: 'transparent',
      _hover: {
        color: 'brand.blue',
        border: '2px solid #7775ed',
      },
    },
    link: {
      color: 'white',
    },
    defaultProps: {
      size: 'sm',
      variant: 'brand-transparent',
    },
  },
};
