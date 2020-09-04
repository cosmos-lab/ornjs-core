<section>

    <header class="text-large font-bold">Intro to {{BRAND.title}}</header>
    <p class="pt-3">
        {{BRAND.title}} is an object oriented way to achive data driven dynamic HTML with the power of ECMAScript.<br/>
    </p>

    <header class="text-large font-bold mt-4">Basic Example (Item List)</header>
    <orn-component identifier="MyItemList" orn-src="`${PATH_UI}demo/item-list/MyItemList.js`"></orn-component>

    <p class="font-italic mt-3 mb-2">template.html</p>
    <pre class="code text-shadow-dark">
&lt;div&gt;
    &lt;div orn-repeat="data.list as i:item"&gt;
        &lt;div class="d-flex mt-3"&gt;
            &lt;input type="text" orn-value="item.value" orn-model="item.value" orn-placeholder="`Enter List Item ${i+1}`" class="input p-2 pl-3 pr-3" /&gt;
            &lt;a orn-onclick="RemoveItem(i)" class="float-right p-2 pr-2 text-large"&gt;&#10006;&lt;/a&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;a class="button bg-button p-1 pl-3 pr-3 d-inline-block mt-3" orn-onclick="AddItem()"&gt;
    &lt;span&gt;Add Item&lt;/span&gt;
&lt;/a&gt;</pre>

    <p class="font-italic mt-3 mb-2">MyItemList.js</p>
    <pre class="code text-shadow-dark">
class MyItemList {

    template = `${PATH_UI}demo/item-list/template.html`

    data = {
        list: []
    }

    constructor(container, shared) {
        this.container = container;
        this.shared = shared;
    }

    async Init() {
        this.Template();
    }

    async Template() {
        await Orn(this.container, this, this.template);
    }

    AddItem() {
        this.data.list.push({});
        this.Template();
    }

    RemoveItem(i) {
        this.data.list.splice(i, 1);
        this.Template();
    }

}</pre>

    <p class="font-italic mt-3">Benefits of {{BRAND.title}}</p>
    <ul class="mt-3">
        <li>UI can be served from any server (Apache, Nodejs).</li>
        <li>Super easy to maintain with cleaner code.</li>
        <li>Bring beauty of new ECMAScript to your UI logics.</li>
        <li>Achieve finest Object Oriented approach in UI logics.</li>
        <li>Seprate HTML template for UI. Seprate JS and HTML for easy to maintain code.</li>
        <li>Write reusable UI component with beautiful code.</li>
    </ul>
</section>
