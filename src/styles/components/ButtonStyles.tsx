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
      color: 'white',
      padding: '0px',
      bg: 'transparent',
      fontWeight: 'light',
      _hover: {
        color: 'brand.blue',
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
