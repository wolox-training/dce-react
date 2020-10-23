module.exports = {
  extends: ['wolox-react'],
  settings: {
    'react': {
      'version': 'detect'
    },
    'import/resolver': {
      'babel-module': {
        alias: {
          '~components': './src/app/components',
          '~screens': './src/app/screens',
          '~hooks': './src/app/hooks',
          '~assets': './src/app/assets',
          '~config': './src/config',
          '~utils': './src/utils',
          '~constants': './src/constants'
        },
        extensions: ['.js','.jsx'],
        root: ['./src']
      }
    }
  }
};
