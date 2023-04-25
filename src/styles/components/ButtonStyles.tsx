export const ButtonStyles = {
  baseStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px',
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
      px: [2, 3],
      py: 4,
    },
    sm: {
      fontSize: ['xs', 'sm'],
      px: [2, 3, 4, 5],
      py: 5,
    },
    md: {
      fontSize: ['sm', 'md'],
      px: [6, 7],
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
      borderRadius: '25px',
      color: 'white',
      bg: 'transparent',
      fontWeight: 'light',
      _hover: {
        color: 'white',
        fontWeight: 'light',
        bg: 'brand.blue',
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
};
