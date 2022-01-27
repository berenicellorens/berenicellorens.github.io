
export function anchor(link, text, title, target, className) {
  const tag = document.createElement('a');
  const url = link ? link : '#';
  const content = text ? text : '';
  tag.className = className ? className : 'subtitle';
  tag.href = url;
  tag.rel = 'nofollow';
  tag.target = target ? target : '_top';
  tag.innerHTML = content;
  tag.title = title ? title : url;
  return tag;
};

export function img(src, width, title, alt, targetUrl) {
  const tag = document.createElement('img');
  const div = document.createElement('div');
  const anc = targetUrl ? anchor(targetUrl, '', '_blank') : anchor(src);
  tag.src = src;
  if (width) {
    tag.setAttribute('width', width + 'px');
    div.style.width = width + 'px';
  }
  tag.title = title ? title : src;
  tag.alt = alt ? alt : src;

  div.style.overflow = 'hidden';
  anc.appendChild(tag);
  div.appendChild(anc);
  return div;
}

export function append_to_div(array, tgt, icon = 0) {
  const target = document.createElement('nav');
  array.forEach( (e, i) => {
    if (icon==0) {
      const sep = document.createElement('span');
      sep.innerHTML = i<array.length-1 ? ' &middot; ' : '';
      sep.className = 'sepchar';
      target.appendChild(anchor(e['url'], e['name'], e['title'], tgt));
      target.appendChild(sep);
    } else {
      target.appendChild(img(e['img'], icon, e['title'], e['name'], e['url']));
    }
  });
  return target;
};
