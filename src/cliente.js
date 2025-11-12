import { salvarDadosCliente, obterDadosCliente } from './store.js';

// REQUISITO: Tratamento de Eventos
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formCliente');
    const dadosSalvos = document.getElementById('dadosSalvos');
    
    // Carregar dados salvos
    const dados = obterDadosCliente();
    if (dados.nome) {
        preencherFormulario(dados);
    }
    
    // REQUISITO: Tratamento de Eventos - Submit do formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const dadosCliente = {
            nome: formData.get('nome'),
            email: formData.get('email'),
            telefone: formData.get('telefone'),
            endereco: {
                cep: formData.get('cep'),
                endereco: formData.get('endereco'),
                numero: formData.get('numero'),
                complemento: formData.get('complemento'),
                cidade: formData.get('cidade'),
                estado: formData.get('estado')
            },
            dataAtualizacao: new Date().toISOString()
        };
        
        // REQUISITO: LocalStorage
        salvarDadosCliente(dadosCliente);
        
        // Feedback visual
        dadosSalvos.style.display = 'block';
        setTimeout(() => {
            dadosSalvos.style.display = 'none';
        }, 3000);
        
        form.reset();
    });
    
    // Auto-preencher endereço via CEP (exemplo)
    document.getElementById('cep').addEventListener('blur', function() {
        const cep = this.value.replace(/\D/g, '');
        if (cep.length === 8) {
            // Simulação de busca de CEP
            console.log('Buscando CEP:', cep);
        }
    });
});

function preencherFormulario(dados) {
    document.getElementById('nome').value = dados.nome || '';
    document.getElementById('email').value = dados.email || '';
    document.getElementById('telefone').value = dados.telefone || '';
    
    if (dados.endereco) {
        document.getElementById('cep').value = dados.endereco.cep || '';
        document.getElementById('endereco').value = dados.endereco.endereco || '';
        document.getElementById('numero').value = dados.endereco.numero || '';
        document.getElementById('complemento').value = dados.endereco.complemento || '';
        document.getElementById('cidade').value = dados.endereco.cidade || '';
        document.getElementById('estado').value = dados.endereco.estado || '';
    }
}