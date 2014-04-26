Ext.data.JsonP.global({"tagname":"class","name":"global","alternateClassNames":[],"members":[{"name":"","tagname":"property","owner":"global","id":"property-","meta":{}},{"name":"constructor","tagname":"property","owner":"global","id":"property-constructor","meta":{}},{"name":"","tagname":"method","owner":"global","id":"method-","meta":{}},{"name":"alias","tagname":"method","owner":"global","id":"method-alias","meta":{}},{"name":"alias_method","tagname":"method","owner":"global","id":"method-alias_method","meta":{}},{"name":"method_missing","tagname":"method","owner":"global","id":"method-method_missing","meta":{}},{"name":"reflect","tagname":"method","owner":"global","id":"static-method-reflect","meta":{"static":true}}],"aliases":{},"files":[{"filename":"","href":""}],"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><div class='doc-contents'><p>Global variables and functions.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/ll_MessageEvent.html#global-property-' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-property-' class='name expandable'></a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-constructor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/ll_Lookup.html#global-property-constructor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-property-constructor' class='name expandable'>constructor</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/ll_Object.html#global-method-' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-' class='name expandable'></a>( <span class='pre'>method, obj, params</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>@method_missing\n\nAutomatically called whenever a non existing method is called\nin an object. ...</div><div class='long'><p>@method_missing</p>\n\n<p>Automatically called whenever a non existing method is called\nin an object. Provides boilerplate getter and setters.</p>\n\n<h3>Example</h3>\n\n<pre><code> function N(){\n    this.a = 2;\n }\n\n n = new N()\n n.set_a(3)\n n.get_a()\n //=&gt; 3\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>method</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">string</a><div class='sub-desc'><p>Method name</p>\n</div></li><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Scope of the method call</p>\n</div></li><li><span class='pre'>params</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>List of params of the method call</p>\n</div></li></ul></div></div></div><div id='method-alias' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/ll_Object.html#global-method-alias' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-alias' class='name expandable'>alias</a>( <span class='pre'>alias_name, original_method</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a reference to an original method. ...</div><div class='long'><p>Creates a reference to an original method. Changing\nthe original one behavior, the alias is also changing.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>alias_name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">string</a><div class='sub-desc'><p>Name of the new method.</p>\n</div></li><li><span class='pre'>original_method</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">string</a><div class='sub-desc'><p>Name of the original method.</p>\n</div></li></ul></div></div></div><div id='method-alias_method' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/ll_Module.html#global-method-alias_method' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-alias_method' class='name expandable'>alias_method</a>( <span class='pre'>new_name, old_name</span> ) : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a copy of the old name function with the new name. ...</div><div class='long'><p>Creates a copy of the old name function with the new name.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>new_name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">string</a> | <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'>\n</div></li><li><span class='pre'>old_name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">string</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span><div class='sub-desc'><p>returns a reference to the newly created function.</p>\n</div></li></ul></div></div></div><div id='method-method_missing' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/ll_Kernel.html#global-method-method_missing' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-method-method_missing' class='name expandable'>method_missing</a>( <span class='pre'>error, method, params</span> ) : [type]<span class=\"signature\"></span></div><div class='description'><div class='short'>Dinamically called when a no existent function is invoked ...</div><div class='long'><p>Dinamically called when a no existent function is invoked</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>error</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>[The error that triggers method_missing call.]</p>\n</div></li><li><span class='pre'>method</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>[Name of the method that was invoked]</p>\n</div></li><li><span class='pre'>params</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>List of params in the invokation.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>[type]</span><div class='sub-desc'><p>[description]</p>\n\n<p><strong>NOTE:</strong></p>\n\n<p> Class_<Name>() function calls generates a class with the\n scaffolding.</Name></p>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-reflect' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='global'>global</span><br/><a href='source/ll_Function.html#global-static-method-reflect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/global-static-method-reflect' class='name expandable'>reflect</a>( <span class='pre'>original_method</span> )<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Creates a bang method version of the referred one. ...</div><div class='long'><p>Creates a bang method version of the referred one.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>original_method</span> : (<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> | <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>[])...<div class='sub-desc'><p>Name of the original method.</p>\n\n<p>If original method is an Array of Strings then performs reflection\nover every mentioned method.</p>\n\n<h3>Example</h3>\n\n<pre><code> // Create <a href=\"#!/api/Array-method-mapS-B\" rel=\"Array-method-mapS-B\" class=\"docClass\">Array.map$B</a> based on <a href=\"#!/api/Array-method-map\" rel=\"Array-method-map\" class=\"docClass\">Array.map</a>\n <a href=\"#!/api/Array-static-method-reflect\" rel=\"Array-static-method-reflect\" class=\"docClass\">Array.reflect</a>(\"map\")\n\n // Create <a href=\"#!/api/Array-method-mapS-B\" rel=\"Array-method-mapS-B\" class=\"docClass\">Array.map$B</a> and <a href=\"#!/api/Array-method-collectS-B\" rel=\"Array-method-collectS-B\" class=\"docClass\">Array.collect$B</a>\n <a href=\"#!/api/Array-static-method-reflect\" rel=\"Array-static-method-reflect\" class=\"docClass\">Array.reflect</a>(\"map\", \"collect\")\n\n // Create <a href=\"#!/api/Array-method-mapS-B\" rel=\"Array-method-mapS-B\" class=\"docClass\">Array.map$B</a> and <a href=\"#!/api/Array-method-collectS-B\" rel=\"Array-method-collectS-B\" class=\"docClass\">Array.collect$B</a>\n var method_list = [\"map\", \"collect\"]\n <a href=\"#!/api/Array-static-method-reflect\" rel=\"Array-static-method-reflect\" class=\"docClass\">Array.reflect</a>(method_list)\n</code></pre>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});