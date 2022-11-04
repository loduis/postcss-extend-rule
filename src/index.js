const { name } = require('../package.json');

// functional selector match
const functionalSelectorMatch = /(^|[^\w-])(%[_a-zA-Z]+[_a-zA-Z0-9-]*)([^\w-]|$)/i;

function getExtendingRules(selector, root, postcss) {
  const rules = [];
  root.walkRules(rule => {
    const ruleHasSelector = rule.selectors.some(ruleSelector => {
      return ruleSelector === selector;
    });
    if (ruleHasSelector) {
      rules.push(...rule.clone().nodes);
    }
  });

  return rules;
}

function plugin(opts = {}) {
  return {
    postcssPlugin: name,
    Once(root, { postcss }) {
      root.walkAtRules('extend', (rule) => {
        const selectors = rule.params.toString().replace(/\s/g, ' ').split(' ');
        const root = rule.root();
        const parent = rule.parent;
        for (const selector of selectors) {
          const rules = getExtendingRules(selector, root)
          if (rules.length) {
            parent.append(...rules);
          }
        }
        rule.remove();
      });
      root.walkRules(functionalSelectorMatch, functionalRule => {
        functionalRule.remove();
      });
    }
  };
}

module.exports = plugin;

module.exports.postcss = true;
