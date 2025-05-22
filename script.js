document.addEventListener('DOMContentLoaded', async function() {
    const components = document.querySelectorAll('[data-component]');
    
    for (const component of components) {
        const componentName = component.getAttribute('data-component');
        const response = await fetch(`./components/_${componentName}.html`);
        const title = component.getAttribute('title');

        if (response.ok) {
            const html = await response.text();
            const populatedHtml = html.replace(/\[\[ title \]\]/g, title)
		//	console.log(component)
			const parent = component.parentElement
			component.innerHTML = populatedHtml
            parent.appendChild(component)

		//	console.log(component)
		//	console.log(parent)
		//	console.log(parent)	

        } else {
            console.error(`Failed to load component: ${componentName}`);
        }
    }
});