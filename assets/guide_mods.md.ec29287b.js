import{_ as e,o as t,c as o,e as i}from"./app.e363d60a.js";const h='{"title":"Modifications to Vitepress","description":"","frontmatter":{},"headers":[{"level":2,"title":"Markdown","slug":"markdown"},{"level":2,"title":"Vite","slug":"vite"},{"level":2,"title":"Vue","slug":"vue"},{"level":2,"title":"Scripts (pre-build, post-build)","slug":"scripts-pre-build-post-build"}],"relativePath":"guide/mods.md"}',s={name:"guide/mods.md"},a=i('<h1 id="modifications-to-vitepress" tabindex="-1">Modifications to Vitepress</h1><h2 id="markdown" tabindex="-1">Markdown</h2><ol><li><p><code>&lt;script&gt;</code>, <code>&lt;style&gt;</code> are hoisted out of Markdown stream and placed into their own sections, as required for Vue SFC. Multiple sections of the same types are combined.</p></li><li><p><code>&lt;CustomComponents&gt;</code> are identified by PascalCase or hyphenated syntax.</p></li><li><p>Icons <i class="fa fa-xxx"></i> becomes <code>&lt;i class=&quot;fa fa-xxx&quot;&gt;</code>, a FontAwesome icon</p></li></ol><h2 id="vite" tabindex="-1">Vite</h2><ol><li><p>Alias <code>~/</code> is added to point to the root of the source directory. This is parent to &#39;public&#39;, &#39;components&#39;, &#39;stores&#39; and user collections of posts.</p></li><li><p>Vite plugins are added to process &quot;yaml&quot;, &quot;json&quot;, &quot;csv&quot; data files. This allow expressions like <code>import MyVar from &#39;mydata.yaml&#39;</code></p></li></ol><h2 id="vue" tabindex="-1">Vue</h2><h2 id="scripts-pre-build-post-build" tabindex="-1">Scripts (pre-build, post-build)</h2><ol><li><p>Convert Data to MD</p></li><li><p>Convert MD to Data</p></li><li><p>Process Sitemap, Feed, Related, Tags, Pagination</p></li></ol>',8),l=[a];function d(r,c,n,p,u,m){return t(),o("div",null,l)}var f=e(s,[["render",d]]);export{h as __pageData,f as default};
