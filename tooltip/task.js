const a = Array.from(document.getElementsByClassName('has-tooltip'));
const tooltip = document.createElement('div');
tooltip.classList.add('tooltip', 'tooltip_active');
tooltip.textContent = 'xxx'

a.forEach(element => {
    element.onclick = () => {
        const {top, bottom, left, right} = element.getBoundingClientRect();        
        tooltip.setAttribute('data-position', 'bottom')
        if (tooltip.getAttribute('data-position') == 'bottom') {
            tooltip.setAttribute('style', `top: ${(bottom)}px; left: ${(left)}px`)
        } else if (tooltip.getAttribute('data-position') == 'top'){
            tooltip.setAttribute('style', `bottom: ${(window.innerHeight - top)}px; left: ${(left)}px`)
        } else if (tooltip.getAttribute('data-position') == 'left') {
            tooltip.setAttribute('style', `top: ${(top)}px; right: ${(window.innerWidth - left)}px`)
        } else if (tooltip.getAttribute('data-position') == 'right') {
            tooltip.setAttribute('style', `top: ${(top)}px; left: ${(right)}px`)
        }        
        tooltip.textContent = element.title;
        element.appendChild(tooltip);        
        return false;
    } 
});