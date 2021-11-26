// import postcss from "postcss";
import { name } from "../package.json";

const plugin = (opts = {}) => {
  return {
    postcssPlugin: name,
    
    Once(root) {
      // Plugin code
      let appliedClasses = new Set();
      let applies = new Set();
      
      root.walkRules(function(rule) {
        for (let node of rule.nodes) {
          if (node.type === "atrule") {
            appliedClasses.add(node.parent.selector);
            let g = node.params.split(" ");
            g.forEach(cls => {
              applies.add(cls);
            });
          }
        }
      });
      
      // find class  css that using @apply
      let applyClassesCss = new Map;
      root.walkDecls(function(decls) {
        let selector = decls.parent.selector;
        if (applies.has(selector.slice(1))) {
          applyClassesCss.set(decls.prop, decls.value);
        }
      });
      
      // remove @apply custom attribute  add class css that applied.
      root.walkRules(function(rule) {
        let e = appliedClasses.has(rule.selector);
        if (e) {
          for (const applyCss of applyClassesCss) {
            rule.append({ prop: applyCss[0], value: applyCss[1] });
          }
          
          for (let n of rule.nodes) {
            if (n.name === "apply") {
              n.remove();
            }
          }
        }
      });
    }
  };
};


// function run(css) {
//   let output = postcss([plugin()]).process(css);
//   console.log(output.toString());
// }

// run(`
//   .app{background: red}
//   .title{
//     @apply app
//   }
// `);

module.exports = plugin;