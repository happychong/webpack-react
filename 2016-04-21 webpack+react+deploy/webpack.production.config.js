/**
 * Created by v_songxiaodan on 2016/4/19.
 */
/**
 * Created by hammer on 2016/3/26.
 * 配置的打包文件
 */
var path = require('path');
var webpack = require('webpack');
var node_module_dir = path.resolve(__dirname,'node_module');

module.exports = {
    entry:{
        app:[path.resolve(__dirname,'app/main.js'),],
        react: ['babel-polyfill','react','react-dom']
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'app.js'
    },
    module:{
        loaders:[
            {
                loader:"babel-loader",   //加载babel模块
                include:[
                    path.resolve(__dirname,'app'),
                ],
                exclude:[
                    node_module_dir
                ],
                test:/\.jsx?$/,
                query:{
                    plugins:['transform-runtime'],
                    presets:['es2015','stage-0','react']
                }
            },
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('react', 'react.js')
    ]
}