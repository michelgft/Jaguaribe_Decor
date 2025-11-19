import{p as n,c as i}from"./carrinho-CMS4Jhu8.js";document.addEventListener("DOMContentLoaded",function(){s(),l()});function s(){const a=new URLSearchParams(window.location.search),o=parseInt(a.get("id"));if(o){const e=n.find(t=>t.id===o);if(e){document.title=`${e.nome} - Jaguaribe Decor`;const t=document.querySelector(".detalhe-produto");t&&(t.innerHTML=`
                    <div class="detalhe-img1">
                        <img src="${e.imagem}" alt="${e.nome}" class="w-full h-96 object-cover rounded-lg shadow-md">
                    </div>
                    <div class="detalhe-desc space-y-4">
                        <h2 class="text-3xl font-bold text-gray-800">${e.nome}</h2>
                        <div class="flex items-center gap-4">
                            <span class="text-2xl font-bold text-green-600">R$ ${e.preco.toFixed(2)}</span>
                            <span class="text-lg text-gray-500 line-through">R$ ${e.precoOriginal.toFixed(2)}</span>
                        </div>
                        <div class="avaliacao text-yellow-400 text-lg">
                            ${r(e.avaliacao)}
                            <span class="text-gray-600 text-sm ml-2">(${e.avaliacao})</span>
                        </div>
                        <p class="text-gray-700 leading-relaxed">${e.descricao}</p>
                        <button class="btn-adicionar-carrinho bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold" data-id="${e.id}">
                            🛒 Adicionar ao Carrinho
                        </button>
                    </div>
                `),c(e)}else document.querySelector(".detalhe-produto").innerHTML=`
                <div class="col-span-2 text-center py-16">
                    <h2 class="text-2xl font-bold text-gray-600 mb-4">Produto não encontrado</h2>
                    <a href="index.html" class="text-green-600 hover:text-green-700">Voltar para a página inicial</a>
                </div>
            `}}function c(a){const o=n.filter(t=>t.categoria===a.categoria&&t.id!==a.id).slice(0,4),e=document.querySelector(".detalhe-mais");e&&o.length>0?e.innerHTML=o.map(t=>`
            <div class="text-center group cursor-pointer" onclick="window.location.href='detalhe.html?id=${t.id}'">
                <img src="${t.imagem}" alt="${t.nome}" class="w-full h-48 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform">
                <h3 class="font-semibold text-gray-800 group-hover:text-green-600 transition-colors">${t.nome}</h3>
                <p class="text-green-600 font-bold mt-1">R$ ${t.preco.toFixed(2)}</p>
                <div class="avaliacao text-yellow-400 text-sm mt-1">
                    ${r(t.avaliacao)}
                </div>
            </div>
        `).join(""):e&&(e.innerHTML='<p class="col-span-4 text-center text-gray-500">Nenhum produto relacionado encontrado</p>')}function l(){document.addEventListener("click",function(a){if(a.target.classList.contains("btn-adicionar-carrinho")){const o=parseInt(a.target.dataset.id);i.adicionarItem(o)}})}function r(a){const o=Math.floor(a),e=a%1!==0,t=5-Math.ceil(a);return"★".repeat(o)+(e?"½":"")+"☆".repeat(t)}
