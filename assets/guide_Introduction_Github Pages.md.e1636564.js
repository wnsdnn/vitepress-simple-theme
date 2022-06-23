import{_ as s,c as e,o as n,a as l}from"./app.40b1420f.js";const _=JSON.parse('{"title":"Github Pages","description":"vitepress-simple-theme Github Pages Auto Deploy","frontmatter":{"title":"Github Pages","description":"vitepress-simple-theme Github Pages Auto Deploy"},"headers":[],"relativePath":"guide/Introduction/Github Pages.md","lastUpdated":1656006948000}'),a={name:"guide/Introduction/Github Pages.md"},o=l(`<ol><li><code>.github/workflows/main.yml</code></li><li>main.yml</li></ol><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">name: Build and Deploy</span></span>
<span class="line"><span style="color:#A6ACCD;">on: [push]</span></span>
<span class="line"><span style="color:#A6ACCD;">jobs:</span></span>
<span class="line"><span style="color:#A6ACCD;">    build-and-deploy:</span></span>
<span class="line"><span style="color:#A6ACCD;">        runs-on: ubuntu-latest</span></span>
<span class="line"><span style="color:#A6ACCD;">        steps:</span></span>
<span class="line"><span style="color:#A6ACCD;">            - name: Checkout</span></span>
<span class="line"><span style="color:#A6ACCD;">              uses: actions/checkout@main</span></span>
<span class="line"><span style="color:#A6ACCD;">            - run: node -v</span></span>
<span class="line"><span style="color:#A6ACCD;">            - name: Vuepress deploy</span></span>
<span class="line"><span style="color:#A6ACCD;">              uses: jenkey2011/vuepress-deploy@1.6.1</span></span>
<span class="line"><span style="color:#A6ACCD;">              env:</span></span>
<span class="line"><span style="color:#A6ACCD;">                  ACCESS_TOKEN: \${{ secrets.ACCESS_TOKEN }}</span></span>
<span class="line"><span style="color:#A6ACCD;">                  BUILD_SCRIPT: yarn &amp;&amp; yarn build</span></span>
<span class="line"><span style="color:#A6ACCD;">                  TARGET_BRANCH: gh-pages</span></span>
<span class="line"><span style="color:#A6ACCD;">                  BUILD_DIR: .vitepress/dist</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="3"><li><a href="https://github.com/settings/tokens/new" target="_blank" rel="noopener noreferrer">github developer setting</a></li><li>New personal access token <ol><li>NOTE : vitepress-simple-theme-token</li><li>Expiration : No expiration</li><li>Select scopes : workflow checked</li><li><code>Generate token</code> Button Click</li></ol></li><li><code>lightgreen backgroun</code> key copy : <code>ghp_????????????????????????????????????</code></li><li>deploy repository move <ol><li><code>Settings</code> Tab click</li><li><code>Secrets</code> Menu Click <ol><li><code>Actions</code> SubMenu Click</li></ol></li></ol></li><li><code>New repository secret</code> Button Click</li><li>New Secret <ol><li>Name : ACCESS_TOKEN</li><li>Value : <code>ghp_????????????????????????????????????</code></li></ol></li></ol>`,3),p=[o];function t(i,c,r,d,C,A){return n(),e("div",null,p)}var y=s(a,[["render",t]]);export{_ as __pageData,y as default};
