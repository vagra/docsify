export function rebuild() {
  const dom = Docsify.dom;

  const sidebar = dom.getNode('.sidebar');
  if (sidebar === null || sidebar === undefined) {
    return;
  }

  const list = dom.findAll(sidebar, '.app-sub-sidebar li');

  list.forEach(node => {
    node.prepend(document.createElement('span'));
    if (
      node.lastChild &&
      node.lastChild.classList &&
      node.lastChild.classList.contains('app-sub-sidebar')
    ) {
      node.classList.add('has-children');
    }
  });
}

export function collapse() {
  const dom = Docsify.dom;

  const sidebar = dom.getNode('.sidebar');
  if (sidebar === null || sidebar === undefined) {
    return;
  }

  dom.on(sidebar, 'click', ({ target }) => {
    if (
      target.nodeName === 'SPAN' &&
      target.nextSibling &&
      target.nextSibling.classList &&
      target.nextSibling.classList.contains('section-link')
    ) {
      dom.toggleClass(target.parentNode, 'collapse');
    }
  });
}
