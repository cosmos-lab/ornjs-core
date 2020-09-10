About OrientedJS

https://orientedjs.com/

OrientedJS is an object oriented approach to achive data driven dynamic HTML with the power of ECMAScript.
A radical approach to plan HTML based UI...

#Put HTML template in a seprate *.html file and encapsulate all UI logics/data/event handlers inside an ECMAScript class in a standard *.js javascript file.

#Serve UI resources over HTTP via any webserver (Node.js, Apache or nginx).

#Gives you more control over your UI architecture to design it in your own ways, because most of the application is driven by your ECMAScript classes. ORN is just to create a dynamic HTML into a container from scope data ('this' or any javascript object) & HTML template (inline or external *.html file).

Few examples of Orn function usuage

//Load via external template
await Orn('#my-div',{key:value},'template.html');
await Orn(my_dom_object,{key:value},'template.html');
await Orn(my_dom_object,this,'template.html');

//orn-module or inline template
Orn('#my-div',{key:value});
Orn(my_dom_object,this;

For more template and JS Class examples please visit https://orientedjs.com/

_______________________________________________________________________________________

Benefit of OrientedJS

<ul>
  
<li>UI can be served from any server (Apache, Nodejs).</li>

<li>Super easy to maintain with cleaner code.</li>

<li>Bring beauty of new ECMAScript to your UI logics.</li>

<li>Achieve finest Object Oriented approach in UI logics.</li>

<li>Seprate HTML template for UI. Seprate JS and HTML for easy to maintain code.</li>

<li>Write reusable UI component with beautiful code.</li>

</ul>


