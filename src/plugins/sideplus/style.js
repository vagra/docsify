export function style() {
  const code = `
  .app-sub-sidebar li:before {
    content: '';
    padding: 0;
  }
  .app-sub-sidebar li > span:after {
    content: '\\00A0';
    font-size: 12px;
    line-height: 1em;
    padding: 0 12px 0 0;
    float: left;
  }
  .app-sub-sidebar li.has-children > span:after {
    -webkit-writing-mode: vertical-lr;
        -ms-writing-mode: tb-lr;
            writing-mode: vertical-lr;
    content: '\\276F';
    font-size: 12px;
    line-height: 1em;
    padding: 12px 3px 0 0;
    float: left;
  }
  .app-sub-sidebar li.has-children.collapse > span:after {
    -webkit-writing-mode: horizontal-tb;
        -ms-writing-mode: lr-tb;
            writing-mode: horizontal-tb;
    content: '\\276F';
    font-size: 12px;
    line-height: 1em;
    padding: 9px 7px 0 2px;
    float: left;
  }
  .sidebar li.collapse.parent > a {
    border-right: 2px solid;
    color: var(--theme-color, #42b983);
    font-weight: 600;
  }`;

  Docsify.dom.style(code);
}
