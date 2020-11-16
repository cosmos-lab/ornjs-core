## Orn JS

https://ornjs.com/

OrnJS is an object orn approach to achieve data driven dynamic HTML with the power of ECMAScript.
A radical approach to plan HTML based UI...


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


