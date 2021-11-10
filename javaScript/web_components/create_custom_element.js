// https://developers.google.com/web/fundamentals/web-components/customelements#extendhtml

// Rules on creating custom elements

//     The name of a custom element must contain a dash (-). So <x-tags>, <my-element>, 
//     and <my-awesome-app> are all valid names, while <tabs> and <foo_bar> are not.
//     This requirement is so the HTML parser can distinguish custom elements from regular elements.
//     It also ensures forward compatibility when new tags are added to HTML.
//     You can't register the same tag more than once. Attempting to do so will throw a DOMException.
//     Once you've told the browser about a new tag, that's it. No take backs.
//     Custom elements cannot be self-closing because HTML only allows a few elements to be self-closing.
//     Always write a closing tag (<app-drawer></app-drawer>).



// class AppDrawer extends HTMLElement {...}
// window.customElements.define('app-drawer', AppDrawer);

// Or use an anonymous class if you don't want a named constructor in current scope.
// window.customElements.define('app-drawer', class extends HTMLElement {...});

class AppDrawer extends HTMLElement {

    // A getter/setter for an open property.
    get open() {
        return this.hasAttribute('open');
    }

    set open(val) {
        // Reflect the value of the open property as an HTML attribute.
        if (val) {
            this.setAttribute('open', '');
        } else {
            this.removeAttribute('open');
        }
        this.toggleDrawer();
    }

    // A getter/setter for a disabled property.
    get disabled() {
        return this.hasAttribute('disabled');
    }

    set disabled(val) {
        // Reflect the value of the disabled property as an HTML attribute.
        if (val) {
            this.setAttribute('disabled', '');
        } else {
            this.removeAttribute('disabled');
        }
    }

    // Can define constructor arguments if you wish.
    constructor() {
        // If you define a constructor, always call super() first!
        // This is specific to CE and required by the spec.
        super();

        // Setup a click listener on <app-drawer> itself.
        this.addEventListener('click', e => {
            // Don't toggle the drawer if it's disabled.
            if (this.disabled) {
                return;
            }
            this.toggleDrawer();
        });
    }

    toggleDrawer() {
        console.log("tooot");
    }
}

customElements.define('app-drawer', AppDrawer);