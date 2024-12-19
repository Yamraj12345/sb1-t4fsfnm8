import { Route } from '../types/routes';

export const utilityRoutes: Route[] = [
  {
    path: '/utility/password-generator',
    title: 'Password Generator',
    description: 'Generate secure random passwords',
  },
  {
    path: '/utility/hash-generator',
    title: 'Hash Generator',
    description: 'Generate MD5, SHA-1, and other hash values',
  },
  {
    path: '/utility/base64',
    title: 'Base64 Encoder/Decoder',
    description: 'Encode and decode Base64 strings',
  },
  {
    path: '/utility/unit-converter',
    title: 'Unit Converter',
    description: 'Convert between different units of measurement',
  },
  {
    path: '/utility/color-converter',
    title: 'Color Converter',
    description: 'Convert between color formats (HEX, RGB, HSL)',
  },
  {
    path: '/utility/uuid-generator',
    title: 'UUID Generator',
    description: 'Generate random UUIDs/GUIDs',
  },
];