## Orn JS

https://ornjs.com/

OrnJS is an object orn approach to achive data driven dynamic HTML with the power of ECMAScript.
A radical approach to plan HTML based UI...

- Specially designed for rapid PWA development.

- Put HTML template in a seprate *.html file and encapsulate all UI logics/data/event handlers inside an ECMAScript class in a standard *.js javascript file. 
Orn(container,scope,template) method will load html template over HTTP and render UI in 'container' with 'scope'.
'container' could be any valid selector string or a DOM object. 'scope' can be any javascript object or 'this' of any javascript class.

- Serve UI resources over HTTP via any webserver (Node.js, Apache or nginx).

- Gives you more control over your UI architecture to design it in your own ways, because most of the application is driven by your ECMAScript classes. ORN is just to create a dynamic HTML into a container from scope data ('this' or any javascript object) & HTML template (inline or external *.html file).

- Mix it with any stack of your existing project without making too much changes. e.g. Achieve data driven HTML in php, wordpress based websites or any PWA...

## Sample Template
```
<div id="my-container" orn-module="my-item-list">
    <div>
        <div orn-repeat="data.list as i:item">
            <div>
                <!-- 
                    make any html tag's attribute data driven by adding prefix 'orn-'
                    orn-value="item.value" will be render as value="Pre Filled Item 1" where i=0 and item={value: 'Pre Filled Item 1'}
                -->
                <input type="text" orn-value="item.value" orn-model="item.value" orn-placeholder="`Enter List Item ${i+1}`"/>
                <a orn-onclick="RemoveItem(i)">&#10006;</a>
            </div>

        </div>
    </div>
    <!-- 
        orn-onclick="AddItem()" is alias or orn-onclick="this.AddItem()" both syntaxes are applicable
        in this way any event type handler could be attached by 'orn-' prefix before any event attribute
        e.g. onmouseover="" to orn-onmouseover="" 
    -->
    <a orn-onclick="AddItem()">
       Add Item
    </a>
</div>
```
## A Javascript Class

```javascript
class MyItemList {

    constructor(container, shared) {

        this.container = container;

        this.data = shared.data ? shared.data : {
            list: []
        }

    }

    async Init() {
        this.Template();
    }

    async Template() {
        /*
        *This is the only place where OrnJS is getting involved
        */
        await Orn(this.container, this);
    }

    AddItem() {
        this.data.list.push({});
        this.Template();
    }

    RemoveItem(i) {
        this.data.list.splice(i, 1);
        this.Template();
    }

}

//Lets Trigger the UI by creating object of MyItemList
const myobject = new MyItemList('#my-container', {
    data: {
        list: [{
            value: 'Pre Filled Item 1'
        }, {
            value: 'Pre Filled Item 2'
        }]
    }
});

myobject.Init();

```

For more templates and JS Class examples please visit https://ornjs.com/

## Benefit of OrnJS

- Gives you more control over your UI architecture.

- UI can be served from any HTTP container (Apache, Nodejs).

- Super easy to maintain with cleaner code of mordern Javascript.

- Bring beauty of new ECMAScript to your UI logics.

- Achieve finest Object Orn approach in UI logics.

- Seprate HTML template for UI. Seprate JS and HTML for easy to maintain code.

- Write reusable UI component with beautiful code.

