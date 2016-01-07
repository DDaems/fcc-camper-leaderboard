## TODO:  
- [Boostrap-loader](https://github.com/shakacode/bootstrap-loader) - preferable configured with BS4  
 - [React-Hot-Bootstrap](https://github.com/shakacode/bootstrap-loader/blob/master/examples/css-modules/webpack.dev.config.js) - example  
- Linting  
- Testing  
  

- Build process  
 - Inlining images  
 - Inlining fonts  
 
**Optional:**  
- jQuery  
- Materialize.css  
- [sass-recource-loader](https://github.com/shakacode/sass-resources-loader) - @import your SASS resources into every required SASS module.  

### Need additional research  
- How to use chrome devtools to edit styles? As you useally would do.  
- How do i add `<link rel="stylesheet">` links to the document directly?  
- How do i allow *.sass syntax files...  

``` javascript  
var style = require("style/useable!css!./styles.css");
style.use(); // style.ref();
style.unuse(); //style.unref();

// => add a <link rel="stylesheet"> to file.css to document

```

[css-loader](https://github.com/webpack/css-loader)  
[style-loader](https://github.com/webpack/style-loader)  
[sass-loader](https://github.com/jtangelder/sass-loader)  
  
`loader: 'style!css!sass:sourceMaps'` enables sourcemaps. atm i do not see how this would benefit us.  
