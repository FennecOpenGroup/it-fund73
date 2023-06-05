export const LinkStyles = {
  baseStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: 'brand.gray.umber',
    _focus: {
      shadow: 'none',
    },
    _hover: {
      WebkitTapHighlightColor: 'transparent',
    },
  },
  sizes: {
    xs: {
      fontSize: 'xs',
    },
    sm: {
      fontSize: 'sm',
    },
  },
  variants: {
    'brand-Link': {
      color: 'white',
    },
  },
  defaultProps: {
    size: 'sm',
  },
};
