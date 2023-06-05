export const ButtonStyles = {
  baseStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0px',
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
        background: 'gray',
      },
    },
    'brand-menu': {
      color: 'white',
      bg: '#5F5F5F',
      borderRadius: '0px',
      _hover: {
        color: 'brand.blue',
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
      },
      defaultProps: {
        size: 'sm',
        variant: 'brand-transparent',
      },
    },
  },
};
