module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
       'module-resolver',
       {
         root: ['./'],
         alias: {
           '@pages': './app/pages',
           '@components': './app/components',
           '@modules':'./app/modules',
           '@route':'./app/route',
           '@assets':'./app/assets',
           '@styles':'./app/styles',
         }
       }
    ]
  ]
};
