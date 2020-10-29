module.exports = {
  extends: ['wolox-react'],
  settings: {
    'react': {
      'version': 'detect'
    },
    'import/resolver': {
      'babel-module': {
        alias: {
          '~assets': './src/app/assets',
          '~components': './src/app/components',
          '~config': './src/config',
          '~constants': './src/constants',
          '~contexts': './src/app/contexts',
          '~hooks': './src/app/hooks',
          '~screens': './src/app/screens',
          '~utils': './src/utils',
        },
        extensions: ['.js','.jsx'],
        root: ['./src']
      }
    }
  }
};
