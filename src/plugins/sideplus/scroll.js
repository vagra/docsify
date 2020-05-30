import { scrollSidebarIntoView, scrollEvent } from '../../core/event/scroll';

export function highlight() {
  const dom = Docsify.dom;
  scrollEvent.plugin = true;

  dom.off('scroll', () => highlightParent());
  dom.on('scroll', () => highlightParent());
}

function highlightParent() {
  if (!scrollEvent.enable) {
    return;
  }

  const dom = Docsify.dom;

  const sidebar = dom.getNode('.sidebar');
  let active = dom.find(sidebar, 'li.active');
  let parents = dom.findAll(sidebar, 'li.parent');

  parents.forEach(node => node.classList.remove('parent'));
  active = findParents(active);

  scrollSidebarIntoView(active);
}

function findParents(active) {
  if (!active) {
    return active;
  }

  let top = active;
  let node = active.parentNode;

  while (node) {
    if (node.classList.contains('app-sub-sidebar')) {
      node = node.parentNode;
      continue;
    } else if (node.classList.contains('has-children')) {
      node.classList.add('parent');
      if (node.classList.contains('collapse')) {
        top = node;
      }
      node = node.parentNode;
      continue;
    } else {
      return top;
    }
  }
}
