// 配置
require.config({
    baseUrl: './libs/',
    paths: {
        'jquery': 'jquery',
        'underscore': 'underscore',
        'backbone': 'backbone',
        'text':'text',
        'swiper': 'swiper',
        'home': '/home/js/home',
        'sscs': '/sscs/js/sscs',
        'cart': '/cart/js/cart',
        'mine': '/mine/js/mine',
        'dataHelper': 'DataHelper'
    }
});


// 引入主模块
    
    requirejs(['jquery', 'underscore', 'backbone'], function($, _, Backbone){
  //使用Backbone实现路由
    var Workspace = Backbone.Router.extend({

  routes: {
    '':'homeFunc',
    'home':'homeFunc',    
    'sscs':'sscsFunc',  
    'cart':'cartFunc',
    'mine':'mineFunc'
  },
  homeFunc : function(){
        requirejs(['home'],function(Home) {
                Home.init();
                Home.loadData();
                Home.bindEvent();
        });
  },
  sscsFunc : function(){
     requirejs(['sscs'],function(Sscs) {
                Sscs.init();
        });
  },
  cartFunc : function(){
     requirejs(['cart'],function(Cart) {
                Cart.init();
        });
  },  
  mineFunc : function(){
     requirejs(['mine'],function(Mine) {
               Mine.init();
        });
    }

});
  new Workspace();
  Backbone.history.start();

});

     
// requirejs(['jquery', 'underscore', 'backbone'], function ($, _, Backbone) {
                
//     //使用Backbone实现路由
//     var Router = Backbone.Router.extend({
//         routes: {
//             '': 'homeFunc',
//             'home': 'homeFunc',
//             'sscs': 'sscsFunc',
//             'cart': 'cartFunc',
//             'mine': 'mineFunc'
//         },
//         homeFunc: function () {
//            requirejs(['home'], function(Home) {
//                 Home.init();
//                 Home.loadData();
//            });
//         },
//         sscsFunc: function () {

//              requirejs(['sscs'], function(Sscs) {
//                 Sscs.init();
//                 Sscs.loadData();
//            })
//         },
//         cartFunc: function () {
           
//          requirejs(['cart'], function(Cart){
//                 Cart.init();
//                 Cart.loadData;
//            })
//         },
//         mineFunc: function () {

//             requirejs(['mine'], function(Mine){
//                 Mine.init();
//                 Mine.loadData;
//            })
//         }
//     });
//     new Router();
//     Backbone.history.start();

//  });
