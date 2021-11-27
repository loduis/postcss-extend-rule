const { name } = require("../package.json");

function getDeclarationsForSelector(selector, css) {
  const decls = [];
  css.walkRules(rule => {
    let ruleHasSelector = rule.selectors.some(ruleSelector => {
      return ruleSelector === selector;
    });
    
    if (ruleHasSelector) {
      rule.walkDecls(decl => {
        decls.push(decl);
      });
    }
  });
  
  return decls;
}

function plugin(opts = {}) {
  return {
    postcssPlugin: name,
    Once(root) {
      root.walkAtRules("apply", (rule) => {
        // find all @applies classes...
        let classes = rule.params.toString().replace(/\s/g, " ").split(" ");
        classes.forEach(selector => {
          
          // get all array of Declarations for @apply selector
          const decls = getDeclarationsForSelector(`.${selector}`, rule.root());
          decls.forEach(decl => {
            rule.parent.append({
              prop: decl.prop,
              value: decl.value
            });
          });
        });
        
        // remove all @apply rule
        rule.remove();
      });
    }
  };
}

module.exports = plugin;

module.exports.postcss = true;