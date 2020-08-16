module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ios.ts',
            '.android.ts',
            '.ts',
            '.ios.tsx',
            '.android.tsx',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            resources: ['./resources'],
            screens: ['./src/screens'],
            components: ['./src/components'],
            navigation: ['./src/navigation'],
            actions: ['./src/redux/actions'],
            reducers: ['./src/redux/reducers'],
            stores: ['./src/redux/stores'],
            theme: ['./src/theme'],
            constansts: ['./src/global/constansts'],
            types: ['./src/global/types'],
            utils: ['./src/global/utils'],
          },
        },
      ],
    ],
  };
};
