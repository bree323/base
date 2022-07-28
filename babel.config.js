/*
 * @Date: 2022-07-28 14:11:13
 * @Description: babel 配置
 */
module.exports = {
    presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
        '@babel/preset-typescript'
    ]
}