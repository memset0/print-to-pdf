import './Header.less';

export default function Header(props) {
  let sections = [];

  sections.push(`
    <p class="mem-web2pdf-header-address-bar">
      <img src="${props.websiteLogo}" alt="website logo" class="mem-web2pdf-header-website-logo"/> 
      <a href="${props.link}" class="mem-web2pdf-header-link"> 
        ${props.link}
      </a>
    </p>
  `);

  sections.push(`
    <p class="mem-web2pdf-header-title">
      ${props.title}
    </p>
  `);

  let meta = [];
  if (props.author !== null) {
    meta.push(`<strong><a href="${props.authorLink}">${props.author}</a></strong>`);
  }
  if (props.updateTime !== null) {
    meta.push(`${props.updateTime}`);
  }
  sections.push(`
    <p class="mem-web2pdf-header-meta">
      ${meta.join('・')}
    </p>
  `);

  const html = sections.map((section) => '<div class="mem-web2pdf-header-section">' + section + '</div>').join('');

  const $el = document.createElement('div');
  $el.classList.add('mem-web2pdf-header');
  $el.innerHTML = html;
  return $el;
}
