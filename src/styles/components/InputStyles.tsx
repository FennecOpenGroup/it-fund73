import { inputAnatomy as parts } from '@chakra-ui/anatomy';

export const InputStyles = {
  parts: parts.keys,
  baseStyle: {
    field: {
      borderRadius: '1px',
    },
  },
  sizes: {
    sm: {
      fontSize: 'sm',
    },
    xs: {
      fontSize: 'xs',
    },
  },
  variants: {
    'brand-support': {
      field: {
        borderRadius: '5px',
        border: '1px',
        borderColor: '#CACACA',
        fontSize: 'sm',
        color: 'white',
        bg: 'transparent',
        _focus: {
          boxShadow: 'inner',
        },
      },
    },
    'brand-file': {
      field: {
        borderRadius: '0px',
        border: '0px',
        borderColor: 'white',
        fontSize: 'sm',
        color: 'black',
        bg: 'transparent',
      },
    },
  },
  defaultProps: { size: 'sm' },
};
