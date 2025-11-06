// Dados iniciais do sistema
const INITIAL_DATA = {
  vagas_orcadas: [
    { id: 1, numero_empresa: "01", empresa: "Demillus Ind. e Com.", centro_custo_contabil: "1.1.1.01", centro_custo_folha: "001", cod_secao: "100", atividade: "Manutenção Mecânica", superintendente: "Roberto Carlos", gestor_area: "Eloi", responsavel_setor: "Carlos Mendes", descricao_secao: "Setor de Manutenção Mecânica", cod_funcao: "001", descricao_funcao: "Técnico de Manutenção", total_orcado: 5, total_realizado: 4, vagas_abertas: 1 },
    { id: 2, numero_empresa: "01", empresa: "Demillus Ind. e Com.", centro_custo_contabil: "1.1.1.02", centro_custo_folha: "002", cod_secao: "101", atividade: "Manutenção Elétrica", superintendente: "Roberto Carlos", gestor_area: "Eloi", responsavel_setor: "Carlos Mendes", descricao_secao: "Setor de Manutenção Elétrica", cod_funcao: "002", descricao_funcao: "Eletricista", total_orcado: 3, total_realizado: 3, vagas_abertas: 0 },
    { id: 3, numero_empresa: "01", empresa: "Demillus Ind. e Com.", centro_custo_contabil: "1.2.1.01", centro_custo_folha: "003", cod_secao: "200", atividade: "Produção", superintendente: "Fernando Silva", gestor_area: "Maria Santos", responsavel_setor: "Marcos Antonio", descricao_secao: "Área de Produção", cod_funcao: "003", descricao_funcao: "Operador de Produção", total_orcado: 15, total_realizado: 12, vagas_abertas: 3 },
    { id: 4, numero_empresa: "01", empresa: "Demillus Ind. e Com.", centro_custo_contabil: "1.2.1.02", centro_custo_folha: "004", cod_secao: "201", atividade: "Controle de Qualidade", superintendente: "Fernando Silva", gestor_area: "Maria Santos", responsavel_setor: "Ricardo Alves", descricao_secao: "Setor de Qualidade", cod_funcao: "004", descricao_funcao: "Inspector de Qualidade", total_orcado: 4, total_realizado: 4, vagas_abertas: 0 },
    { id: 5, numero_empresa: "01", empresa: "Demillus Ind. e Com.", centro_custo_contabil: "1.3.1.01", centro_custo_folha: "005", cod_secao: "300", atividade: "Vendas", superintendente: "Patricia Rocha", gestor_area: "Carlos Oliveira", responsavel_setor: "Paulo Henrique", descricao_secao: "Departamento de Vendas", cod_funcao: "005", descricao_funcao: "Vendedor", total_orcado: 8, total_realizado: 6, vagas_abertas: 2 },
    { id: 6, numero_empresa: "01", empresa: "Demillus Ind. e Com.", centro_custo_contabil: "1.4.1.01", centro_custo_folha: "006", cod_secao: "400", atividade: "Tecnologia da Informação", superintendente: "Ana Paula", gestor_area: "Ricardo Lima", responsavel_setor: "João Silva", descricao_secao: "Departamento de TI", cod_funcao: "006", descricao_funcao: "Desenvolvedor", total_orcado: 6, total_realizado: 5, vagas_abertas: 1 }
  ],
  historico_uploads: [
    { id: 1, tipo: "funcionarios", data_upload: "2025-11-05", hora_upload: "14:30", usuario: "Administrador do Sistema", quantidade_registros: 4, status: "Sucesso" },
    { id: 2, tipo: "vagas", data_upload: "2025-11-05", hora_upload: "14:35", usuario: "Administrador do Sistema", quantidade_registros: 6, status: "Sucesso" }
  ],
  usuarios: [
    { id: 1, matricula: "0001", nome: "Administrador do Sistema", senha: "1234", perfil: "Administrador", secao: "Corporativo", area: "Corporativo", ativo: true, primeiro_acesso: true },
    { id: 2, matricula: "1001", nome: "Eloi", senha: "1234", perfil: "Gerente", secao: "Manutenção", area: "Técnica", ativo: true, primeiro_acesso: true },
    { id: 3, matricula: "1002", nome: "Maria Santos", senha: "1234", perfil: "Gerente", secao: "Produção", area: "Operacional", ativo: true, primeiro_acesso: true },
    { id: 4, matricula: "1003", nome: "Carlos Oliveira", senha: "1234", perfil: "Gerente", secao: "Vendas", area: "Comercial", ativo: true, primeiro_acesso: true },
    { id: 5, matricula: "1004", nome: "Ricardo Lima", senha: "1234", perfil: "Gerente", secao: "TI", area: "Tecnologia", ativo: true, primeiro_acesso: true }
  ],
  funcionarios_expandido: [
    { col_chapa: "100001001", chapa: "1001", nome: "Roberto Carlos da Silva", cod_secao: "100", nome_secao: "Manutenção Mecânica", chapa_sup_hierarq: "1000", nome_sup_hierarq: "Eloi", cod_c_custo_contabil: "1.1.1.01", nome_c_custo_contabil: "Manutenção", sexo: "Masculino", estado_civil: "Casado", data_nascimento: "1985-07-20", data_admissao: "2020-03-15", data_demissao: "", cod_horario: "001", horario: "08:00-17:00", cod_funcao_atual: "001", funcao_atual: "Técnico de Manutenção", cod_cbo_atual: "7241-15", salario_hora: "45.50", salario_atual: "9100.00", comissao_vendas: "0.00", producao_tarefa: "0.00", media_liquido_mes: "7200.00", periculosidade: "Sim", insalubridade: "Não", grau_instrucao: "Médio Completo", data_ultima_alteracao_secao: "2020-03-15", secao_anterior: "", motivo_mudanca_secao: "", data_ultima_alteracao_funcao: "2020-03-15", funcao_anterior: "", motivo_mudanca_funcao: "", data_ultima_alteracao_salario: "2024-01-15", salario_anterior: "8500.00", motivo_mudanca_salario: "Reajuste anual", jornada_mensal: 220, mes_data_base: "Março", tipo_recebimento: "Mensal", tipo_func: "CLT", situacao_func: "Ativo", tipo_afastamento: "", motivo_afastamento: "", dt_inicio_afast: "", dt_fim_afast: "", plano_saude: "Sim", cod_coligada: "01", nome_coligada: "Demillus Ind. e Com.", estado_coligada: "SP", orgao_classe: "CREA", cod_sindicato: "001", nome_sindicato: "Sindicato dos Metalúrgicos", pcd: "Não" },
    { col_chapa: "100001002", chapa: "1002", nome: "Fernanda Oliveira Santos", cod_secao: "200", nome_secao: "Produção", chapa_sup_hierarq: "1003", nome_sup_hierarq: "Maria Santos", cod_c_custo_contabil: "1.2.1.01", nome_c_custo_contabil: "Produção", sexo: "Feminino", estado_civil: "Solteira", data_nascimento: "1990-12-05", data_admissao: "2021-08-10", data_demissao: "", cod_horario: "002", horario: "06:00-14:00", cod_funcao_atual: "003", funcao_atual: "Operadora de Produção", cod_cbo_atual: "8201-05", salario_hora: "35.00", salario_atual: "7000.00", comissao_vendas: "0.00", producao_tarefa: "500.00", media_liquido_mes: "6800.00", periculosidade: "Não", insalubridade: "Sim", grau_instrucao: "Superior Completo", data_ultima_alteracao_secao: "2021-08-10", secao_anterior: "", motivo_mudanca_secao: "", data_ultima_alteracao_funcao: "2021-08-10", funcao_anterior: "", motivo_mudanca_funcao: "", data_ultima_alteracao_salario: "2024-01-15", salario_anterior: "6500.00", motivo_mudanca_salario: "Reajuste anual", jornada_mensal: 220, mes_data_base: "Agosto", tipo_recebimento: "Mensal", tipo_func: "CLT", situacao_func: "Ativo", tipo_afastamento: "", motivo_afastamento: "", dt_inicio_afast: "", dt_fim_afast: "", plano_saude: "Sim", cod_coligada: "01", nome_coligada: "Demillus Ind. e Com.", estado_coligada: "SP", orgao_classe: "CTPS", cod_sindicato: "002", nome_sindicato: "Sindicato dos Operários", pcd: "Não" },
    { col_chapa: "100001003", chapa: "1003", nome: "Paulo Henrique Costa", cod_secao: "300", nome_secao: "Vendas", chapa_sup_hierarq: "1004", nome_sup_hierarq: "Carlos Oliveira", cod_c_custo_contabil: "1.3.1.01", nome_c_custo_contabil: "Vendas", sexo: "Masculino", estado_civil: "Casado", data_nascimento: "1982-03-12", data_admissao: "2019-05-20", data_demissao: "", cod_horario: "001", horario: "08:00-18:00", cod_funcao_atual: "005", funcao_atual: "Vendedor", cod_cbo_atual: "3523-10", salario_hora: "50.00", salario_atual: "11000.00", comissao_vendas: "2500.00", producao_tarefa: "0.00", media_liquido_mes: "10500.00", periculosidade: "Não", insalubridade: "Não", grau_instrucao: "Superior Completo", data_ultima_alteracao_secao: "2019-05-20", secao_anterior: "", motivo_mudanca_secao: "", data_ultima_alteracao_funcao: "2023-06-01", funcao_anterior: "Trainee de Vendas", motivo_mudanca_funcao: "Promoção", data_ultima_alteracao_salario: "2023-06-01", salario_anterior: "8000.00", motivo_mudanca_salario: "Promoção", jornada_mensal: 220, mes_data_base: "Maio", tipo_recebimento: "Mensal", tipo_func: "CLT", situacao_func: "Ativo", tipo_afastamento: "", motivo_afastamento: "", dt_inicio_afast: "", dt_fim_afast: "", plano_saude: "Sim", cod_coligada: "01", nome_coligada: "Demillus Ind. e Com.", estado_coligada: "SP", orgao_classe: "CTPS", cod_sindicato: "003", nome_sindicato: "Sindicato do Comércio", pcd: "Não" },
    { col_chapa: "100001004", chapa: "1004", nome: "Ricardo Lima Silva", cod_secao: "400", nome_secao: "Tecnologia da Informação", chapa_sup_hierarq: "1005", nome_sup_hierarq: "Ricardo Lima", cod_c_custo_contabil: "1.4.1.01", nome_c_custo_contabil: "TI", sexo: "Masculino", estado_civil: "Solteiro", data_nascimento: "1995-09-18", data_admissao: "2022-01-15", data_demissao: "", cod_horario: "001", horario: "08:00-17:00", cod_funcao_atual: "006", funcao_atual: "Desenvolvedor", cod_cbo_atual: "2121-05", salario_hora: "60.00", salario_atual: "12000.00", comissao_vendas: "0.00", producao_tarefa: "0.00", media_liquido_mes: "10200.00", periculosidade: "Não", insalubridade: "Não", grau_instrucao: "Superior Completo", data_ultima_alteracao_secao: "2022-01-15", secao_anterior: "", motivo_mudanca_secao: "", data_ultima_alteracao_funcao: "2022-01-15", funcao_anterior: "", motivo_mudanca_funcao: "", data_ultima_alteracao_salario: "2024-01-15", salario_anterior: "11000.00", motivo_mudanca_salario: "Reajuste anual", jornada_mensal: 220, mes_data_base: "Janeiro", tipo_recebimento: "Mensal", tipo_func: "CLT", situacao_func: "Ativo", tipo_afastamento: "", motivo_afastamento: "", dt_inicio_afast: "", dt_fim_afast: "", plano_saude: "Sim", cod_coligada: "01", nome_coligada: "Demillus Ind. e Com.", estado_coligada: "SP", orgao_classe: "CREA", cod_sindicato: "004", nome_sindicato: "Sindicato dos Técnicos", pcd: "Não" }
  ],
  funcionarios: [
    { id: 1, matricula: "2001", nome_completo: "Roberto Carlos da Silva", cargo: "Desenvolvedor Senior", funcao: "Desenvolvimento", area: "Tecnologia", secao: "TI", centro_custo: "CC001", situacao: "Ativo", tipo_contrato: "CLT", admissao: "2020-03-15", desligamento: null, tempo_casa: "4 anos", genero: "Masculino", data_nascimento: "1985-07-20", idade: 39, escolaridade: "Superior Completo", supervisor: "João Silva", gerente: "João Silva", coordenador: "Roberto Mendes", local_trabalho: "Sede", tipo_jornada: "Presencial", turno: "Comercial", horario: "08:00-17:00", tipo_escala: "Segunda a Sexta", carga_horaria_semana: 40, email: "roberto.silva@demillus.com", telefone: "(11) 99999-0001", status: "Ativo", observacoes: "" },
    { id: 2, matricula: "2002", nome_completo: "Fernanda Oliveira Santos", cargo: "Analista de RH", funcao: "Recursos Humanos", area: "Administrativa", secao: "RH", centro_custo: "CC002", situacao: "Ativo", tipo_contrato: "CLT", admissao: "2021-08-10", desligamento: null, tempo_casa: "3 anos", genero: "Feminino", data_nascimento: "1990-12-05", idade: 34, escolaridade: "Superior Completo", supervisor: "Maria Santos", gerente: "Maria Santos", coordenador: "Ana Paula", local_trabalho: "Sede", tipo_jornada: "Híbrido", turno: "Comercial", horario: "08:00-17:00", tipo_escala: "Segunda a Sexta", carga_horaria_semana: 40, email: "fernanda.santos@demillus.com", telefone: "(11) 99999-0002", status: "Ativo", observacoes: "" },
    { id: 3, matricula: "2003", nome_completo: "Paulo Henrique Costa", cargo: "Coordenador de Vendas", funcao: "Vendas", area: "Comercial", secao: "Vendas", centro_custo: "CC003", situacao: "Ativo", tipo_contrato: "CLT", admissao: "2019-05-20", desligamento: null, tempo_casa: "5 anos", genero: "Masculino", data_nascimento: "1982-03-12", idade: 42, escolaridade: "Superior Completo", supervisor: "Ricardo Lima", gerente: "Ricardo Lima", coordenador: "Paulo Henrique Costa", local_trabalho: "Filial", tipo_jornada: "Presencial", turno: "Comercial", horario: "08:00-18:00", tipo_escala: "Segunda a Sábado", carga_horaria_semana: 44, email: "paulo.costa@demillus.com", telefone: "(11) 99999-0003", status: "Ativo", observacoes: "" },
    { id: 4, matricula: "2004", nome_completo: "Juliana Rodrigues Lima", cargo: "Operador de Produção", funcao: "Produção", area: "Operacional", secao: "Produção", centro_custo: "CC004", situacao: "Ativo", tipo_contrato: "CLT", admissao: "2022-01-15", desligamento: null, tempo_casa: "2 anos", genero: "Feminino", data_nascimento: "1995-09-18", idade: 29, escolaridade: "Ensino Médio", supervisor: "Marcos Antonio", gerente: "Marcos Antonio", coordenador: "Luciana Silva", local_trabalho: "Fábrica", tipo_jornada: "Presencial", turno: "Matutino", horario: "06:00-14:00", tipo_escala: "Segunda a Sexta", carga_horaria_semana: 40, email: "juliana.lima@demillus.com", telefone: "(11) 99999-0004", status: "Ativo", observacoes: "" },
    { id: 5, matricula: "2005", nome_completo: "André Luís Pereira", cargo: "Técnico de Manutenção", funcao: "Manutenção", area: "Técnica", secao: "Manutenção", centro_custo: "CC005", situacao: "Inativo", tipo_contrato: "CLT", admissao: "2018-11-30", desligamento: "2024-06-15", tempo_casa: "5 anos", genero: "Masculino", data_nascimento: "1987-04-25", idade: 37, escolaridade: "Técnico", supervisor: "Carlos Mendes", gerente: "Carlos Mendes", coordenador: "Roberto Santos", local_trabalho: "Fábrica", tipo_jornada: "Presencial", turno: "Vespertino", horario: "14:00-22:00", tipo_escala: "Segunda a Sexta", carga_horaria_semana: 40, email: "andre.pereira@demillus.com", telefone: "(11) 99999-0005", status: "Inativo", observacoes: "Desligamento por acordo mútuo" },
    { id: 6, matricula: "2006", nome_completo: "Camila Fernandes Silva", cargo: "Assistente Financeiro", funcao: "Financeiro", area: "Administrativa", secao: "Financeiro", centro_custo: "CC006", situacao: "Ativo", tipo_contrato: "CLT", admissao: "2023-03-01", desligamento: null, tempo_casa: "1 ano", genero: "Feminino", data_nascimento: "1992-11-30", idade: 32, escolaridade: "Superior Completo", supervisor: "Carlos Oliveira", gerente: "Carlos Oliveira", coordenador: "Patricia Rocha", local_trabalho: "Sede", tipo_jornada: "Presencial", turno: "Comercial", horario: "08:00-17:00", tipo_escala: "Segunda a Sexta", carga_horaria_semana: 40, email: "camila.silva@demillus.com", telefone: "(11) 99999-0006", status: "Ativo", observacoes: "" },
    { id: 7, matricula: "2007", nome_completo: "Gabriel Santos Rocha", cargo: "Estagiário", funcao: "Apoio", area: "Administrativa", secao: "RH", centro_custo: "CC007", situacao: "Ativo", tipo_contrato: "Estágio", admissao: "2024-02-01", desligamento: null, tempo_casa: "8 meses", genero: "Masculino", data_nascimento: "2002-08-14", idade: 22, escolaridade: "Superior Incompleto", supervisor: "Maria Santos", gerente: "Maria Santos", coordenador: "Ana Paula", local_trabalho: "Sede", tipo_jornada: "Presencial", turno: "Comercial", horario: "08:00-14:00", tipo_escala: "Segunda a Sexta", carga_horaria_semana: 30, email: "gabriel.rocha@demillus.com", telefone: "(11) 99999-0007", status: "Ativo", observacoes: "Estágio obrigatório - Faculdade XYZ" },
    { id: 8, matricula: "2008", nome_completo: "Larissa Martins Costa", cargo: "Supervisora de Qualidade", funcao: "Qualidade", area: "Técnica", secao: "Qualidade", centro_custo: "CC008", situacao: "Ativo", tipo_contrato: "CLT", admissao: "2020-09-15", desligamento: null, tempo_casa: "4 anos", genero: "Feminino", data_nascimento: "1988-06-10", idade: 36, escolaridade: "Superior Completo", supervisor: "Ricardo Alves", gerente: "Ricardo Alves", coordenador: "Larissa Martins Costa", local_trabalho: "Fábrica", tipo_jornada: "Presencial", turno: "Comercial", horario: "08:00-17:00", tipo_escala: "Segunda a Sexta", carga_horaria_semana: 40, email: "larissa.costa@demillus.com", telefone: "(11) 99999-0008", status: "Ativo", observacoes: "" }
  ]
};

// Permissões por perfil
const PERMISSOES = {
  Administrador: {
    funcionarios: ['create', 'read', 'update', 'delete'],
    usuarios: ['create', 'read', 'update', 'delete'],
    relatorios: ['full_access'],
    exportacao: ['csv', 'excel', 'pdf']
  },
  Gerente: {
    funcionarios: ['create', 'read', 'update', 'delete_own_section'],
    usuarios: ['read_own'],
    relatorios: ['section_only'],
    exportacao: ['csv', 'excel']
  },
  Coordenador: {
    funcionarios: ['read', 'update'],
    usuarios: ['read_own'],
    relatorios: ['limited'],
    exportacao: ['csv']
  },
  Analista: {
    funcionarios: ['read'],
    usuarios: ['read_own'],
    relatorios: ['consultation_only'],
    exportacao: ['csv']
  },
  Visualizador: {
    funcionarios: ['read'],
    usuarios: ['read_own'],
    relatorios: ['view_only'],
    exportacao: []
  }
};

// Estado da aplicação
let appState = {
  usuarios: JSON.parse(JSON.stringify(INITIAL_DATA.usuarios)),
  funcionarios: JSON.parse(JSON.stringify(INITIAL_DATA.funcionarios)),
  funcionarios_expandido: JSON.parse(JSON.stringify(INITIAL_DATA.funcionarios_expandido)),
  vagas_orcadas: JSON.parse(JSON.stringify(INITIAL_DATA.vagas_orcadas)),
  historico_uploads: JSON.parse(JSON.stringify(INITIAL_DATA.historico_uploads)),
  currentUser: null,
  sessionTimeout: null,
  editingItem: null
};

// Configurações
const CONFIG = {
  sessionTimeoutMinutes: 15
};

// Elementos do DOM
const elements = {
  loginPage: null,
  mainApp: null,
  loginForm: null,
  loginError: null
};

// Inicialização
window.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

function initializeApp() {
  elements.loginPage = document.getElementById('loginPage');
  elements.mainApp = document.getElementById('mainApp');
  elements.loginForm = document.getElementById('loginForm');
  elements.loginError = document.getElementById('loginError');
  
  // Event listeners
  elements.loginForm.addEventListener('submit', handleLogin);
  document.getElementById('logoutBtn').addEventListener('click', handleLogout);
  document.getElementById('formPrimeiroAcesso').addEventListener('submit', handlePrimeiroAcesso);
  document.getElementById('formAlterarSenha').addEventListener('submit', handleAlterarSenha);
  document.getElementById('formFuncionario').addEventListener('submit', handleSaveFuncionario);
  document.getElementById('formUsuario').addEventListener('submit', handleSaveUsuario);
  
  // Navegação
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const page = item.dataset.page;
      navigateToPage(page);
    });
  });
  
  // Filtros de funcionários
  document.getElementById('searchFuncionarios').addEventListener('input', filterFuncionarios);
  document.getElementById('filterSecao').addEventListener('change', filterFuncionarios);
  document.getElementById('filterStatus').addEventListener('change', filterFuncionarios);
  
  // Botões de adicionar
  const btnAddFuncionario = document.getElementById('btnAddFuncionario');
  if (btnAddFuncionario) {
    btnAddFuncionario.addEventListener('click', () => openModalFuncionario());
  }
  
  const btnAddUsuario = document.getElementById('btnAddUsuario');
  if (btnAddUsuario) {
    btnAddUsuario.addEventListener('click', () => openModalUsuario());
  }
}

function handleLogin(e) {
  e.preventDefault();
  const matricula = document.getElementById('matricula').value;
  const senha = document.getElementById('senha').value;
  
  const user = appState.usuarios.find(u => u.matricula === matricula && u.senha === senha && u.ativo);
  
  if (user) {
    appState.currentUser = user;
    
    if (user.primeiro_acesso) {
      showModal('modalAlterarSenha');
    } else {
      enterSystem();
    }
  } else {
    showLoginError('Matrícula ou senha inválidos');
  }
}

function handlePrimeiroAcesso(e) {
  e.preventDefault();
  const novaSenha = document.getElementById('novaSenhaPrimeiroAcesso').value;
  const confirmarSenha = document.getElementById('confirmarSenhaPrimeiroAcesso').value;
  
  if (novaSenha !== confirmarSenha) {
    alert('As senhas não coincidem!');
    return;
  }
  
  if (novaSenha.length < 4) {
    alert('A senha deve ter no mínimo 4 caracteres');
    return;
  }
  
  // Atualizar senha
  const userIndex = appState.usuarios.findIndex(u => u.id === appState.currentUser.id);
  appState.usuarios[userIndex].senha = novaSenha;
  appState.usuarios[userIndex].primeiro_acesso = false;
  appState.currentUser = appState.usuarios[userIndex];
  
  closeModal('modalAlterarSenha');
  enterSystem();
}

function enterSystem() {
  elements.loginPage.style.display = 'none';
  elements.mainApp.style.display = 'flex';
  
  // Configurar interface baseada no perfil
  setupUserInterface();
  
  // Iniciar timeout de sessão
  resetSessionTimeout();
  
  // Carregar dashboard
  loadDashboard();
  
  // Inicializar upload handlers
  initUploadHandlers();
}

function setupUserInterface() {
  const user = appState.currentUser;
  document.getElementById('userInfo').textContent = `${user.nome} (${user.perfil})`;
  
  // Mostrar/esconder navegação de usuários e upload apenas para admin
  const navUsuarios = document.getElementById('navUsuarios');
  const navUpload = document.getElementById('navUpload');
  if (user.perfil === 'Administrador') {
    navUsuarios.style.display = 'flex';
    navUpload.style.display = 'flex';
  } else {
    navUsuarios.style.display = 'none';
    navUpload.style.display = 'none';
  }
  
  // Configurar botões baseado em permissões
  updateUIPermissions();
}

function updateUIPermissions() {
  const perfil = appState.currentUser.perfil;
  const perms = PERMISSOES[perfil];
  
  // Botão adicionar funcionário
  const btnAddFuncionario = document.getElementById('btnAddFuncionario');
  if (btnAddFuncionario) {
    btnAddFuncionario.style.display = perms.funcionarios.includes('create') ? 'inline-flex' : 'none';
  }
}

function loadDashboard() {
  const funcionarios = getFilteredFuncionariosExpandido();
  
  // Estatísticas
  const ativos = funcionarios.filter(f => f.situacao_func === 'Ativo').length;
  const inativos = funcionarios.filter(f => f.situacao_func !== 'Ativo').length;
  const secoes = new Set(funcionarios.map(f => f.nome_secao)).size;
  const cargos = new Set(funcionarios.map(f => f.funcao_atual)).size;
  
  document.getElementById('totalAtivos').textContent = ativos;
  document.getElementById('totalInativos').textContent = inativos;
  document.getElementById('totalSecoes').textContent = secoes;
  document.getElementById('totalCargos').textContent = cargos;
  
  // Gráficos
  createCharts(funcionarios);
  
  // Popular filtros
  populateFilters();
}

function getFilteredFuncionarios() {
  const perfil = appState.currentUser.perfil;
  let funcionarios = appState.funcionarios;
  
  // Gerentes veem apenas sua seção
  if (perfil === 'Gerente') {
    funcionarios = funcionarios.filter(f => f.secao === appState.currentUser.secao);
  }
  
  return funcionarios;
}

function createCharts(funcionarios) {
  // Gráfico por Seção
  const secoesCounts = {};
  funcionarios.forEach(f => {
    secoesCounts[f.nome_secao] = (secoesCounts[f.nome_secao] || 0) + 1;
  });
  
  createChart('chartSecao', {
    type: 'bar',
    data: {
      labels: Object.keys(secoesCounts),
      datasets: [{
        label: 'Funcionários',
        data: Object.values(secoesCounts),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } }
    }
  });
  
  // Gráfico por Gênero
  const generoCounts = {};
  funcionarios.forEach(f => {
    generoCounts[f.genero] = (generoCounts[f.genero] || 0) + 1;
  });
  
  createChart('chartGenero', {
    type: 'pie',
    data: {
      labels: Object.keys(generoCounts),
      datasets: [{
        data: Object.values(generoCounts),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
  
  // Gráfico por Status
  const statusCounts = {};
  funcionarios.forEach(f => {
    const status = f.situacao_func || 'Ativo';
    statusCounts[status] = (statusCounts[status] || 0) + 1;
  });
  
  createChart('chartStatus', {
    type: 'doughnut',
    data: {
      labels: Object.keys(statusCounts),
      datasets: [{
        data: Object.values(statusCounts),
        backgroundColor: ['#1FB8CD', '#DB4545']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
  
  // Gráfico por Tipo de Contrato
  const contratoCounts = {};
  funcionarios.forEach(f => {
    contratoCounts[f.tipo_func] = (contratoCounts[f.tipo_func] || 0) + 1;
  });
  
  createChart('chartContrato', {
    type: 'bar',
    data: {
      labels: Object.keys(contratoCounts),
      datasets: [{
        label: 'Funcionários',
        data: Object.values(contratoCounts),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#5D878F']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } }
    }
  });
}

let chartInstances = {};

function createChart(canvasId, config) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  
  // Destruir gráfico existente
  if (chartInstances[canvasId]) {
    chartInstances[canvasId].destroy();
  }
  
  const ctx = canvas.getContext('2d');
  chartInstances[canvasId] = new Chart(ctx, config);
}

function populateFilters() {
  const funcionarios = getFilteredFuncionariosExpandido();
  const secoes = [...new Set(funcionarios.map(f => f.nome_secao))].sort();
  const contratos = [...new Set(funcionarios.map(f => f.tipo_func))].sort();
  
  // Filtro de seção na página de funcionários
  const filterSecao = document.getElementById('filterSecao');
  if (filterSecao) {
    filterSecao.innerHTML = '<option value="">Todas as Seções</option>';
    secoes.forEach(s => {
      const option = document.createElement('option');
      option.value = s;
      option.textContent = s;
      filterSecao.appendChild(option);
    });
  }
  
  // Filtros de relatórios
  const reportSecao = document.getElementById('reportSecao');
  if (reportSecao) {
    reportSecao.innerHTML = '<option value="">Todas</option>';
    secoes.forEach(s => {
      const option = document.createElement('option');
      option.value = s;
      option.textContent = s;
      reportSecao.appendChild(option);
    });
  }
  
  const reportContrato = document.getElementById('reportContrato');
  if (reportContrato) {
    reportContrato.innerHTML = '<option value="">Todos</option>';
    contratos.forEach(c => {
      const option = document.createElement('option');
      option.value = c;
      option.textContent = c;
      reportContrato.appendChild(option);
    });
  }
}

function navigateToPage(page) {
  // Atualizar navegação ativa
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  document.querySelector(`[data-page="${page}"]`).classList.add('active');
  
  // Esconder todas as páginas
  document.querySelectorAll('.page-content').forEach(p => p.style.display = 'none');
  
  // Mostrar página selecionada
  const pageElement = document.getElementById(`${page}Page`);
  if (pageElement) {
    pageElement.style.display = 'block';
  }
  
  // Atualizar título
  const titles = {
    dashboard: 'Dashboard',
    funcionarios: 'Gestão de Funcionários',
    relatorios: 'Relatórios',
    usuarios: 'Gerenciamento de Usuários',
    configuracoes: 'Configurações'
  };
  document.getElementById('pageTitle').textContent = titles[page];
  
  // Carregar conteúdo da página
  if (page === 'dashboard') {
    loadDashboard();
  } else if (page === 'upload') {
    loadUploadPage();
  } else if (page === 'vagas') {
    loadVagasPage();
  } else if (page === 'headcount') {
    loadHeadcountPage();
  } else if (page === 'funcionarios') {
    loadFuncionarios();
  } else if (page === 'usuarios') {
    loadUsuarios();
  }
  
  // Reset session timeout
  resetSessionTimeout();
}

function loadFuncionarios() {
  const funcionarios = getFilteredFuncionariosExpandido();
  const thead = document.querySelector('#tableFuncionarios thead');
  const tbody = document.querySelector('#tableFuncionarios tbody');
  
  // Atualizar cabeçalho com todas as colunas
  thead.innerHTML = `
    <tr>
      <th>Chapa</th>
      <th>Nome</th>
      <th>Cód. Seção</th>
      <th>Nome Seção</th>
      <th>Função Atual</th>
      <th>Situação</th>
      <th>Data Admissão</th>
      <th>Salário</th>
      <th>Ações</th>
    </tr>
  `;
  
  tbody.innerHTML = '';
  
  funcionarios.forEach((f, index) => {
    const tr = document.createElement('tr');
    const status = f.situacao_func || 'Ativo';
    tr.innerHTML = `
      <td>${f.chapa}</td>
      <td>${f.nome}</td>
      <td>${f.cod_secao}</td>
      <td>${f.nome_secao}</td>
      <td>${f.funcao_atual}</td>
      <td><span class="status-badge ${status.toLowerCase()}">${status}</span></td>
      <td>${formatDate(f.data_admissao)}</td>
      <td>R$ ${formatCurrency(f.salario_atual)}</td>
      <td class="action-buttons">
        <button class="btn btn--sm btn--secondary" onclick="viewFuncionarioDetalhes(${index})"><i class="fas fa-eye"></i></button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function getFilteredFuncionariosExpandido() {
  const perfil = appState.currentUser.perfil;
  let funcionarios = appState.funcionarios_expandido;
  
  // Gestores veem apenas sua seção
  if (perfil === 'Gerente') {
    // Mapear nome do gestor para código da seção
    const gestorMap = {
      'Eloi': ['100', '101'],
      'Maria Santos': ['200', '201'],
      'Carlos Oliveira': ['300'],
      'Ricardo Lima': ['400']
    };
    const secoes = gestorMap[appState.currentUser.nome] || [];
    funcionarios = funcionarios.filter(f => secoes.includes(f.cod_secao));
  }
  
  return funcionarios;
}

function formatCurrency(value) {
  if (!value) return '0,00';
  const num = parseFloat(value);
  return num.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

window.viewFuncionarioDetalhes = function(index) {
  const funcionarios = getFilteredFuncionariosExpandido();
  const f = funcionarios[index];
  
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.style.display = 'flex';
  modal.innerHTML = `
    <div class="modal-content modal-large">
      <div class="modal-header">
        <h3>Detalhes do Funcionário - ${f.nome}</h3>
        <button class="modal-close" onclick="this.closest('.modal').remove()">&times;</button>
      </div>
      <div class="modal-body" style="max-height: 70vh; overflow-y: auto;">
        <h4 style="margin-top: 0; color: var(--color-primary);">Dados Pessoais</h4>
        <div class="form-grid">
          <div><strong>COL+CHAPA:</strong> ${f.col_chapa}</div>
          <div><strong>CHAPA:</strong> ${f.chapa}</div>
          <div><strong>Nome:</strong> ${f.nome}</div>
          <div><strong>Sexo:</strong> ${f.sexo}</div>
          <div><strong>Estado Civil:</strong> ${f.estado_civil}</div>
          <div><strong>Data Nascimento:</strong> ${formatDate(f.data_nascimento)}</div>
          <div><strong>Grau Instrução:</strong> ${f.grau_instrucao}</div>
          <div><strong>PCD:</strong> ${f.pcd}</div>
        </div>
        
        <h4 style="margin-top: 24px; color: var(--color-primary);">Dados Funcionais</h4>
        <div class="form-grid">
          <div><strong>Cód. Seção:</strong> ${f.cod_secao}</div>
          <div><strong>Nome Seção:</strong> ${f.nome_secao}</div>
          <div><strong>Cód. Função:</strong> ${f.cod_funcao_atual}</div>
          <div><strong>Função Atual:</strong> ${f.funcao_atual}</div>
          <div><strong>Cód. CBO:</strong> ${f.cod_cbo_atual}</div>
          <div><strong>Situação:</strong> ${f.situacao_func}</div>
          <div><strong>Tipo Func.:</strong> ${f.tipo_func}</div>
          <div><strong>Data Admissão:</strong> ${formatDate(f.data_admissao)}</div>
          ${f.data_demissao ? `<div><strong>Data Demissão:</strong> ${formatDate(f.data_demissao)}</div>` : ''}
        </div>
        
        <h4 style="margin-top: 24px; color: var(--color-primary);">Hierarquia</h4>
        <div class="form-grid">
          <div><strong>Chapa Superior:</strong> ${f.chapa_sup_hierarq}</div>
          <div><strong>Nome Superior:</strong> ${f.nome_sup_hierarq}</div>
        </div>
        
        <h4 style="margin-top: 24px; color: var(--color-primary);">Remuneração</h4>
        <div class="form-grid">
          <div><strong>Salário Hora:</strong> R$ ${formatCurrency(f.salario_hora)}</div>
          <div><strong>Salário Atual:</strong> R$ ${formatCurrency(f.salario_atual)}</div>
          <div><strong>Comissão Vendas:</strong> R$ ${formatCurrency(f.comissao_vendas)}</div>
          <div><strong>Produção/Tarefa:</strong> R$ ${formatCurrency(f.producao_tarefa)}</div>
          <div><strong>Média Líquida:</strong> R$ ${formatCurrency(f.media_liquido_mes)}</div>
          <div><strong>Periculosidade:</strong> ${f.periculosidade}</div>
          <div><strong>Insalubridade:</strong> ${f.insalubridade}</div>
          <div><strong>Tipo Recebimento:</strong> ${f.tipo_recebimento}</div>
        </div>
        
        <h4 style="margin-top: 24px; color: var(--color-primary);">Jornada e Horário</h4>
        <div class="form-grid">
          <div><strong>Cód. Horário:</strong> ${f.cod_horario}</div>
          <div><strong>Horário:</strong> ${f.horario}</div>
          <div><strong>Jornada Mensal:</strong> ${f.jornada_mensal}h</div>
          <div><strong>Mês Data Base:</strong> ${f.mes_data_base}</div>
        </div>
        
        <h4 style="margin-top: 24px; color: var(--color-primary);">Centro de Custo</h4>
        <div class="form-grid">
          <div><strong>Cód. C. Custo:</strong> ${f.cod_c_custo_contabil}</div>
          <div><strong>Nome C. Custo:</strong> ${f.nome_c_custo_contabil}</div>
        </div>
        
        ${f.tipo_afastamento ? `
        <h4 style="margin-top: 24px; color: var(--color-primary);">Afastamento</h4>
        <div class="form-grid">
          <div><strong>Tipo:</strong> ${f.tipo_afastamento}</div>
          <div><strong>Motivo:</strong> ${f.motivo_afastamento}</div>
          <div><strong>Início:</strong> ${formatDate(f.dt_inicio_afast)}</div>
          <div><strong>Fim:</strong> ${formatDate(f.dt_fim_afast)}</div>
        </div>
        ` : ''}
        
        <h4 style="margin-top: 24px; color: var(--color-primary);">Benefícios</h4>
        <div class="form-grid">
          <div><strong>Plano de Saúde:</strong> ${f.plano_saude}</div>
        </div>
        
        <h4 style="margin-top: 24px; color: var(--color-primary);">Empresa</h4>
        <div class="form-grid">
          <div><strong>Cód. Coligada:</strong> ${f.cod_coligada}</div>
          <div><strong>Nome Coligada:</strong> ${f.nome_coligada}</div>
          <div><strong>Estado:</strong> ${f.estado_coligada}</div>
        </div>
        
        <h4 style="margin-top: 24px; color: var(--color-primary);">Sindicato</h4>
        <div class="form-grid">
          <div><strong>Órgão Classe:</strong> ${f.orgao_classe}</div>
          <div><strong>Cód. Sindicato:</strong> ${f.cod_sindicato}</div>
          <div><strong>Nome Sindicato:</strong> ${f.nome_sindicato}</div>
        </div>
        
        ${f.funcao_anterior ? `
        <h4 style="margin-top: 24px; color: var(--color-primary);">Histórico de Alterações</h4>
        ${f.secao_anterior ? `
        <div style="margin-bottom: 16px;">
          <strong>Seção Anterior:</strong> ${f.secao_anterior}<br>
          <strong>Data Alteração:</strong> ${formatDate(f.data_ultima_alteracao_secao)}<br>
          <strong>Motivo:</strong> ${f.motivo_mudanca_secao}
        </div>
        ` : ''}
        ${f.funcao_anterior ? `
        <div style="margin-bottom: 16px;">
          <strong>Função Anterior:</strong> ${f.funcao_anterior}<br>
          <strong>Data Alteração:</strong> ${formatDate(f.data_ultima_alteracao_funcao)}<br>
          <strong>Motivo:</strong> ${f.motivo_mudanca_funcao}
        </div>
        ` : ''}
        ${f.salario_anterior ? `
        <div style="margin-bottom: 16px;">
          <strong>Salário Anterior:</strong> R$ ${formatCurrency(f.salario_anterior)}<br>
          <strong>Data Alteração:</strong> ${formatDate(f.data_ultima_alteracao_salario)}<br>
          <strong>Motivo:</strong> ${f.motivo_mudanca_salario}
        </div>
        ` : ''}
        ` : ''}
      </div>
      <div class="modal-footer">
        <button class="btn btn--secondary" onclick="exportFuncionarioData(${index})"><i class="fas fa-download"></i> Exportar Dados</button>
        <button class="btn btn--primary" onclick="this.closest('.modal').remove()">Fechar</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
};

window.exportFuncionarioData = function(index) {
  alert('Exportação de dados do funcionário iniciada!');
};

function filterFuncionarios() {
  const search = document.getElementById('searchFuncionarios').value.toLowerCase();
  const secaoFilter = document.getElementById('filterSecao').value;
  const statusFilter = document.getElementById('filterStatus').value;
  
  let funcionarios = getFilteredFuncionariosExpandido();
  
  if (search) {
    funcionarios = funcionarios.filter(f => 
      f.nome.toLowerCase().includes(search) ||
      f.chapa.toLowerCase().includes(search) ||
      f.funcao_atual.toLowerCase().includes(search) ||
      f.nome_secao.toLowerCase().includes(search)
    );
  }
  
  if (secaoFilter) {
    funcionarios = funcionarios.filter(f => f.nome_secao === secaoFilter);
  }
  
  if (statusFilter) {
    funcionarios = funcionarios.filter(f => f.situacao_func === statusFilter);
  }
  
  const tbody = document.querySelector('#tableFuncionarios tbody');
  tbody.innerHTML = '';
  
  funcionarios.forEach((f, index) => {
    const tr = document.createElement('tr');
    const status = f.situacao_func || 'Ativo';
    tr.innerHTML = `
      <td>${f.chapa}</td>
      <td>${f.nome}</td>
      <td>${f.cod_secao}</td>
      <td>${f.nome_secao}</td>
      <td>${f.funcao_atual}</td>
      <td><span class="status-badge ${status.toLowerCase()}">${status}</span></td>
      <td>${formatDate(f.data_admissao)}</td>
      <td>R$ ${formatCurrency(f.salario_atual)}</td>
      <td class="action-buttons">
        <button class="btn btn--sm btn--secondary" onclick="viewFuncionarioDetalhes(${index})"><i class="fas fa-eye"></i></button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function canEditFuncionario() {
  const perms = PERMISSOES[appState.currentUser.perfil];
  return perms.funcionarios.includes('update');
}

function canDeleteFuncionario(funcionario) {
  const perfil = appState.currentUser.perfil;
  const perms = PERMISSOES[perfil];
  
  if (perms.funcionarios.includes('delete')) {
    return true;
  }
  
  if (perms.funcionarios.includes('delete_own_section') && funcionario.secao === appState.currentUser.secao) {
    return true;
  }
  
  return false;
}

function openModalFuncionario(funcionario = null) {
  appState.editingItem = funcionario;
  const modal = document.getElementById('modalFuncionario');
  const form = document.getElementById('formFuncionario');
  const title = document.getElementById('modalFuncionarioTitle');
  
  if (funcionario) {
    title.textContent = 'Editar Funcionário';
    // Preencher formulário
    Object.keys(funcionario).forEach(key => {
      const input = form.querySelector(`[name="${key}"]`);
      if (input && key !== 'id') {
        input.value = funcionario[key] || '';
      }
    });
  } else {
    title.textContent = 'Adicionar Funcionário';
    form.reset();
  }
  
  showModal('modalFuncionario');
}

function handleSaveFuncionario(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const data = {};
  
  formData.forEach((value, key) => {
    data[key] = value;
  });
  
  if (appState.editingItem) {
    // Editar
    const index = appState.funcionarios.findIndex(f => f.id === appState.editingItem.id);
    appState.funcionarios[index] = { ...appState.funcionarios[index], ...data };
  } else {
    // Adicionar
    const newId = Math.max(...appState.funcionarios.map(f => f.id)) + 1;
    data.id = newId;
    data.situacao = data.status;
    appState.funcionarios.push(data);
  }
  
  closeModal('modalFuncionario');
  loadFuncionarios();
  loadDashboard();
}

window.editFuncionario = function(id) {
  const funcionario = appState.funcionarios.find(f => f.id === id);
  if (funcionario) {
    openModalFuncionario(funcionario);
  }
};

window.deleteFuncionario = function(id) {
  if (confirm('Tem certeza que deseja excluir este funcionário?')) {
    appState.funcionarios = appState.funcionarios.filter(f => f.id !== id);
    loadFuncionarios();
    loadDashboard();
  }
};

function loadUsuarios() {
  const tbody = document.querySelector('#tableUsuarios tbody');
  tbody.innerHTML = '';
  
  appState.usuarios.forEach(u => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${u.matricula}</td>
      <td>${u.nome}</td>
      <td>${u.perfil}</td>
      <td>${u.secao}</td>
      <td><span class="status-badge ${u.ativo ? 'ativo' : 'inativo'}">${u.ativo ? 'Ativo' : 'Inativo'}</span></td>
      <td class="action-buttons">
        <button class="btn btn--sm btn--secondary" onclick="editUsuario(${u.id})"><i class="fas fa-edit"></i></button>
        <button class="btn btn--sm btn--danger" onclick="deleteUsuario(${u.id})"><i class="fas fa-trash"></i></button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function openModalUsuario(usuario = null) {
  appState.editingItem = usuario;
  const modal = document.getElementById('modalUsuario');
  const form = document.getElementById('formUsuario');
  const title = document.getElementById('modalUsuarioTitle');
  
  if (usuario) {
    title.textContent = 'Editar Usuário';
    form.querySelector('[name="matricula"]').value = usuario.matricula;
    form.querySelector('[name="nome"]').value = usuario.nome;
    form.querySelector('[name="perfil"]').value = usuario.perfil;
    form.querySelector('[name="secao"]').value = usuario.secao || '';
    form.querySelector('[name="ativo"]').value = usuario.ativo.toString();
  } else {
    title.textContent = 'Adicionar Usuário';
    form.reset();
  }
  
  showModal('modalUsuario');
}

function handleSaveUsuario(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  
  const data = {
    matricula: formData.get('matricula'),
    nome: formData.get('nome'),
    perfil: formData.get('perfil'),
    secao: formData.get('secao'),
    ativo: formData.get('ativo') === 'true',
    senha: '1234',
    primeiro_acesso: true
  };
  
  if (appState.editingItem) {
    const index = appState.usuarios.findIndex(u => u.id === appState.editingItem.id);
    appState.usuarios[index] = { ...appState.usuarios[index], ...data };
  } else {
    const newId = Math.max(...appState.usuarios.map(u => u.id)) + 1;
    data.id = newId;
    appState.usuarios.push(data);
  }
  
  closeModal('modalUsuario');
  loadUsuarios();
}

window.editUsuario = function(id) {
  const usuario = appState.usuarios.find(u => u.id === id);
  if (usuario) {
    openModalUsuario(usuario);
  }
};

window.deleteUsuario = function(id) {
  if (id === appState.currentUser.id) {
    alert('Você não pode excluir seu próprio usuário!');
    return;
  }
  
  if (confirm('Tem certeza que deseja excluir este usuário?')) {
    appState.usuarios = appState.usuarios.filter(u => u.id !== id);
    loadUsuarios();
  }
};

function handleAlterarSenha(e) {
  e.preventDefault();
  const senhaAtual = document.getElementById('senhaAtual').value;
  const novaSenha = document.getElementById('novaSenha').value;
  const confirmarSenha = document.getElementById('confirmarSenha').value;
  
  if (senhaAtual !== appState.currentUser.senha) {
    alert('Senha atual incorreta!');
    return;
  }
  
  if (novaSenha !== confirmarSenha) {
    alert('As senhas não coincidem!');
    return;
  }
  
  if (novaSenha.length < 4) {
    alert('A senha deve ter no mínimo 4 caracteres');
    return;
  }
  
  const userIndex = appState.usuarios.findIndex(u => u.id === appState.currentUser.id);
  appState.usuarios[userIndex].senha = novaSenha;
  appState.currentUser = appState.usuarios[userIndex];
  
  alert('Senha alterada com sucesso!');
  e.target.reset();
}

window.generateReport = function() {
  const periodo = document.getElementById('reportPeriodo').value;
  const secao = document.getElementById('reportSecao').value;
  const status = document.getElementById('reportStatus').value;
  const contrato = document.getElementById('reportContrato').value;
  
  let funcionarios = getFilteredFuncionarios();
  
  if (secao) {
    funcionarios = funcionarios.filter(f => f.secao === secao);
  }
  
  if (status) {
    funcionarios = funcionarios.filter(f => f.status === status);
  }
  
  if (contrato) {
    funcionarios = funcionarios.filter(f => f.tipo_contrato === contrato);
  }
  
  const resultsDiv = document.getElementById('reportResults');
  const total = funcionarios.length;
  const ativos = funcionarios.filter(f => f.status === 'Ativo').length;
  const inativos = funcionarios.filter(f => f.status === 'Inativo').length;
  
  const masculino = funcionarios.filter(f => f.genero === 'Masculino').length;
  const feminino = funcionarios.filter(f => f.genero === 'Feminino').length;
  
  resultsDiv.innerHTML = `
    <h3>Resultado do Relatório</h3>
    <div class="report-summary">
      <div class="report-stat">
        <h4>${total}</h4>
        <p>Total</p>
      </div>
      <div class="report-stat">
        <h4>${ativos}</h4>
        <p>Ativos</p>
      </div>
      <div class="report-stat">
        <h4>${inativos}</h4>
        <p>Inativos</p>
      </div>
      <div class="report-stat">
        <h4>${masculino}</h4>
        <p>Masculino</p>
      </div>
      <div class="report-stat">
        <h4>${feminino}</h4>
        <p>Feminino</p>
      </div>
    </div>
    <div class="export-section" style="margin-top: 20px;">
      <button class="btn btn--secondary" onclick="exportData('csv')">
        <i class="fas fa-file-csv"></i> Exportar CSV
      </button>
    </div>
  `;
};

window.exportData = function(format) {
  const funcionarios = getFilteredFuncionarios();
  const perms = PERMISSOES[appState.currentUser.perfil];
  
  if (!perms.exportacao.includes(format)) {
    alert('Você não tem permissão para exportar neste formato.');
    return;
  }
  
  alert(`Exportação em ${format.toUpperCase()} iniciada! (${funcionarios.length} registros)`);
};

function handleLogout() {
  if (confirm('Deseja realmente sair do sistema?')) {
    clearSessionTimeout();
    appState.currentUser = null;
    elements.mainApp.style.display = 'none';
    elements.loginPage.style.display = 'flex';
    elements.loginForm.reset();
  }
}

function resetSessionTimeout() {
  clearSessionTimeout();
  const timeoutMs = CONFIG.sessionTimeoutMinutes * 60 * 1000;
  appState.sessionTimeout = setTimeout(() => {
    alert('Sua sessão expirou por inatividade.');
    handleLogout();
  }, timeoutMs);
}

function clearSessionTimeout() {
  if (appState.sessionTimeout) {
    clearTimeout(appState.sessionTimeout);
    appState.sessionTimeout = null;
  }
}

function showModal(modalId) {
  document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

window.closeModal = closeModal;

function showLoginError(message) {
  elements.loginError.textContent = message;
  elements.loginError.classList.add('show');
  setTimeout(() => {
    elements.loginError.classList.remove('show');
  }, 3000);
}

function formatDate(dateString) {
  if (!dateString) return '-';
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('pt-BR');
}

// Reset session timeout em qualquer interação
document.addEventListener('click', () => {
  if (appState.currentUser) {
    resetSessionTimeout();
  }
});

document.addEventListener('keypress', () => {
  if (appState.currentUser) {
    resetSessionTimeout();
  }
});

// Upload functionality
function initUploadHandlers() {
  const fileInputFuncionarios = document.getElementById('fileInputFuncionarios');
  const fileInputVagas = document.getElementById('fileInputVagas');
  
  if (fileInputFuncionarios) {
    fileInputFuncionarios.addEventListener('change', (e) => handleFileUpload(e, 'funcionarios'));
  }
  
  if (fileInputVagas) {
    fileInputVagas.addEventListener('change', (e) => handleFileUpload(e, 'vagas'));
  }
  
  // Drag and drop handlers
  setupDragDrop('uploadAreaFuncionarios', fileInputFuncionarios);
  setupDragDrop('uploadAreaVagas', fileInputVagas);
}

function setupDragDrop(areaId, fileInput) {
  const area = document.getElementById(areaId);
  if (!area) return;
  
  area.addEventListener('dragover', (e) => {
    e.preventDefault();
    area.classList.add('dragover');
  });
  
  area.addEventListener('dragleave', () => {
    area.classList.remove('dragover');
  });
  
  area.addEventListener('drop', (e) => {
    e.preventDefault();
    area.classList.remove('dragover');
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      fileInput.files = files;
      const event = new Event('change');
      fileInput.dispatchEvent(event);
    }
  });
}

function handleFileUpload(event, type) {
  const file = event.target.files[0];
  if (!file) return;
  
  const progressId = type === 'funcionarios' ? 'uploadProgressFuncionarios' : 'uploadProgressVagas';
  const progressDiv = document.getElementById(progressId);
  
  progressDiv.style.display = 'block';
  const progressFill = progressDiv.querySelector('.progress-fill');
  const progressText = progressDiv.querySelector('.progress-text');
  
  progressFill.style.width = '30%';
  progressText.textContent = 'Lendo arquivo...';
  
  const reader = new FileReader();
  
  reader.onload = function(e) {
    try {
      progressFill.style.width = '60%';
      progressText.textContent = 'Processando dados...';
      
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(firstSheet);
      
      progressFill.style.width = '90%';
      progressText.textContent = 'Atualizando sistema...';
      
      if (type === 'funcionarios') {
        processarFuncionarios(jsonData);
      } else {
        processarVagas(jsonData);
      }
      
      // Adicionar ao histórico
      const newUpload = {
        id: appState.historico_uploads.length + 1,
        tipo: type,
        data_upload: new Date().toISOString().split('T')[0],
        hora_upload: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        usuario: appState.currentUser.nome,
        quantidade_registros: jsonData.length,
        status: 'Sucesso'
      };
      appState.historico_uploads.unshift(newUpload);
      
      progressFill.style.width = '100%';
      progressText.textContent = `Sucesso! ${jsonData.length} registros processados.`;
      progressText.style.color = 'var(--color-success)';
      
      setTimeout(() => {
        progressDiv.style.display = 'none';
        progressFill.style.width = '0%';
        progressText.style.color = '';
        event.target.value = '';
        loadUploadPage();
      }, 2000);
      
    } catch (error) {
      progressFill.style.width = '100%';
      progressFill.style.background = 'var(--color-error)';
      progressText.textContent = 'Erro ao processar arquivo: ' + error.message;
      progressText.style.color = 'var(--color-error)';
    }
  };
  
  reader.readAsArrayBuffer(file);
}

function processarFuncionarios(data) {
  // Mapear colunas do Excel para estrutura do sistema
  appState.funcionarios_expandido = data.map((row, index) => ({
    col_chapa: row['COL+CHAPA'] || '',
    chapa: row['CHAPA'] || '',
    nome: row['NOME'] || '',
    cod_secao: row['CÓD. SEÇÃO'] || '',
    nome_secao: row['NOME SEÇÃO'] || '',
    chapa_sup_hierarq: row['CHAPA SUP. HIERARQ.'] || '',
    nome_sup_hierarq: row['NOME SUP. HIERARQ.'] || '',
    cod_c_custo_contabil: row['CÓD. C. CUSTO CONTÁBIL'] || '',
    nome_c_custo_contabil: row['NOME C. CUSTO CONTÁBIL'] || '',
    sexo: row['SEXO'] || '',
    estado_civil: row['ESTADO CIVIL'] || '',
    data_nascimento: row['DATA DE NASCIMENTO'] || '',
    data_admissao: row['DATA DE ADMISSÃO'] || '',
    data_demissao: row['DATA DE DEMISSÃO'] || '',
    cod_horario: row['CÓD. HORÁRIO'] || '',
    horario: row['HORÁRIO'] || '',
    cod_funcao_atual: row['CÓD. FUNÇÃO ATUAL'] || '',
    funcao_atual: row['FUNÇÃO ATUAL'] || '',
    cod_cbo_atual: row['CÓD. CBO ATUAL'] || '',
    salario_hora: row['SALÁRIO HORA'] || '',
    salario_atual: row['SALÁRIO ATUAL'] || '',
    comissao_vendas: row['COMISSÃO_VENDAS'] || '',
    producao_tarefa: row['PRODUÇÃO_TAREFA'] || '',
    media_liquido_mes: row['MEDIA LIQUIDO DO MÊS'] || '',
    periculosidade: row['PERICULOSIDADE'] || '',
    insalubridade: row['INSALUBRIDADE'] || '',
    grau_instrucao: row['GRAU DE INSTRUÇÃO'] || '',
    data_ultima_alteracao_secao: row['DATA DA ÚTLTIMA ALTERAÇÃO DE SEÇÃO'] || '',
    secao_anterior: row['SEÇÃO ANTERIOR'] || '',
    motivo_mudanca_secao: row['MOTIVO MUDANÇA SEÇÃO'] || '',
    data_ultima_alteracao_funcao: row['DATA DA ÚTLTIMA ALTERAÇÃO DE FUNÇÃO'] || '',
    funcao_anterior: row['FUNÇÃO ANTERIOR'] || '',
    motivo_mudanca_funcao: row['MOTIVO MUDANÇA FUNÇÃO'] || '',
    data_ultima_alteracao_salario: row['DATA DA ÚTLTIMA ALTERAÇÃO DE SALÁRIO'] || '',
    salario_anterior: row['SALÁRIO ANTERIOR'] || '',
    motivo_mudanca_salario: row['MOTIVO MUDANÇA SALÁRIO'] || '',
    jornada_mensal: row['JORNADA MENSAL'] || '',
    mes_data_base: row['MÊS DE DATA BASE'] || '',
    tipo_recebimento: row['TIPO RECEBIMENTO'] || '',
    tipo_func: row['TIPO FUNC.'] || '',
    situacao_func: row['SITUAÇÃO FUNC.'] || '',
    tipo_afastamento: row['TIPO AFASTAMENTO'] || '',
    motivo_afastamento: row['MOTIVO AFASTAMENTO'] || '',
    dt_inicio_afast: row['DT. INÍCIO AFAST.'] || '',
    dt_fim_afast: row['DT. FIM AFAST.'] || '',
    plano_saude: row['PLANO DE SAÚDE'] || '',
    cod_coligada: row['CÓD. COLIGADA'] || '',
    nome_coligada: row['NOME COLIGADA'] || '',
    estado_coligada: row['ESTADO COLIGADA'] || '',
    orgao_classe: row['ÓRGÃO DA CLASSE'] || '',
    cod_sindicato: row['CÓD. SINDICATO'] || '',
    nome_sindicato: row['NOME SINDICATO'] || '',
    pcd: row['PCD'] || ''
  }));
}

function processarVagas(data) {
  appState.vagas_orcadas = data.map((row, index) => ({
    id: index + 1,
    numero_empresa: row['Nº da Empresa'] || '',
    empresa: row['Empresa'] || '',
    centro_custo_contabil: row['Centro de Custo Contábil'] || '',
    centro_custo_folha: row['Centro de Custo Folha'] || '',
    cod_secao: row['Cód. Seção'] || '',
    atividade: row['Atividade'] || '',
    superintendente: row['Superintendente'] || '',
    gestor_area: row['Gestor da Área'] || '',
    responsavel_setor: row['Responsável pelo setor'] || '',
    descricao_secao: row['Descrição da Seção'] || '',
    cod_funcao: row['Cód. Função'] || '',
    descricao_funcao: row['Descrição da Função'] || '',
    total_orcado: parseInt(row['Total Orçado']) || 0,
    total_realizado: parseInt(row['Total Realizado']) || 0,
    vagas_abertas: parseInt(row['Total Orçado'] || 0) - parseInt(row['Total Realizado'] || 0)
  }));
}

function loadUploadPage() {
  const tbody = document.getElementById('uploadHistoryTable');
  if (!tbody) return;
  
  tbody.innerHTML = '';
  appState.historico_uploads.forEach(upload => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><span class="status-badge ${upload.tipo === 'funcionarios' ? 'ativo' : 'info'}">${upload.tipo === 'funcionarios' ? 'Funcionários' : 'Vagas'}</span></td>
      <td>${formatDate(upload.data_upload)}</td>
      <td>${upload.hora_upload}</td>
      <td>${upload.usuario}</td>
      <td>${upload.quantidade_registros}</td>
      <td><span class="status-badge ${upload.status === 'Sucesso' ? 'ativo' : 'inativo'}">${upload.status}</span></td>
    `;
    tbody.appendChild(tr);
  });
}

function loadVagasPage() {
  const perfil = appState.currentUser.perfil;
  let vagas = appState.vagas_orcadas;
  
  // Filtrar por gestor se não for admin
  if (perfil === 'Gerente') {
    vagas = vagas.filter(v => v.gestor_area === appState.currentUser.nome);
  }
  
  // Estatísticas
  const totalOrcadas = vagas.reduce((sum, v) => sum + v.total_orcado, 0);
  const totalPreenchidas = vagas.reduce((sum, v) => sum + v.total_realizado, 0);
  const totalAbertas = vagas.reduce((sum, v) => sum + v.vagas_abertas, 0);
  const totalAreas = new Set(vagas.map(v => v.gestor_area)).size;
  
  document.getElementById('totalVagasOrcadas').textContent = totalOrcadas;
  document.getElementById('totalVagasPreenchidas').textContent = totalPreenchidas;
  document.getElementById('totalVagasAbertas').textContent = totalAbertas;
  document.getElementById('totalAreasVagas').textContent = totalAreas;
  
  // Gráfico
  const vagasPorArea = {};
  vagas.forEach(v => {
    if (!vagasPorArea[v.gestor_area]) {
      vagasPorArea[v.gestor_area] = { orcadas: 0, preenchidas: 0, abertas: 0 };
    }
    vagasPorArea[v.gestor_area].orcadas += v.total_orcado;
    vagasPorArea[v.gestor_area].preenchidas += v.total_realizado;
    vagasPorArea[v.gestor_area].abertas += v.vagas_abertas;
  });
  
  createChart('chartVagasPorArea', {
    type: 'bar',
    data: {
      labels: Object.keys(vagasPorArea),
      datasets: [
        {
          label: 'Orçadas',
          data: Object.values(vagasPorArea).map(v => v.orcadas),
          backgroundColor: '#1FB8CD'
        },
        {
          label: 'Preenchidas',
          data: Object.values(vagasPorArea).map(v => v.preenchidas),
          backgroundColor: '#5D878F'
        },
        {
          label: 'Abertas',
          data: Object.values(vagasPorArea).map(v => v.abertas),
          backgroundColor: '#DB4545'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { stacked: false },
        y: { stacked: false }
      }
    }
  });
  
  // Tabela
  const header = document.getElementById('vagasTableHeader');
  const tbody = document.getElementById('vagasTableBody');
  
  if (perfil === 'Administrador') {
    // Cabeçalho Admin
    header.innerHTML = `
      <tr>
        <th>Nº Empresa</th>
        <th>Empresa</th>
        <th>C.C. Contábil</th>
        <th>C.C. Folha</th>
        <th>Cód. Seção</th>
        <th>Atividade</th>
        <th>Superintendente</th>
        <th>Gestor da Área</th>
        <th>Responsável</th>
        <th>Descrição Seção</th>
        <th>Cód. Função</th>
        <th>Descrição Função</th>
        <th>Total Orçado</th>
        <th>Total Realizado</th>
      </tr>
    `;
  } else {
    // Cabeçalho Gestor
    header.innerHTML = `
      <tr>
        <th>Empresa</th>
        <th>Cód. Seção</th>
        <th>Gestor da Área</th>
        <th>Descrição da Seção</th>
        <th>Cód. Função</th>
        <th>Descrição da Função</th>
        <th>Total Orçado</th>
        <th>Total Realizado</th>
      </tr>
    `;
  }
  
  tbody.innerHTML = '';
  vagas.forEach(v => {
    const tr = document.createElement('tr');
    if (perfil === 'Administrador') {
      tr.innerHTML = `
        <td>${v.numero_empresa}</td>
        <td>${v.empresa}</td>
        <td>${v.centro_custo_contabil}</td>
        <td>${v.centro_custo_folha}</td>
        <td>${v.cod_secao}</td>
        <td>${v.atividade}</td>
        <td>${v.superintendente}</td>
        <td>${v.gestor_area}</td>
        <td>${v.responsavel_setor}</td>
        <td>${v.descricao_secao}</td>
        <td>${v.cod_funcao}</td>
        <td>${v.descricao_funcao}</td>
        <td>${v.total_orcado}</td>
        <td>${v.total_realizado}</td>
      `;
    } else {
      tr.innerHTML = `
        <td>${v.empresa}</td>
        <td>${v.cod_secao}</td>
        <td>${v.gestor_area}</td>
        <td>${v.descricao_secao}</td>
        <td>${v.cod_funcao}</td>
        <td>${v.descricao_funcao}</td>
        <td>${v.total_orcado}</td>
        <td>${v.total_realizado}</td>
      `;
    }
    tbody.appendChild(tr);
  });
  
  // Filtro de busca
  const searchInput = document.getElementById('searchVagas');
  if (searchInput) {
    searchInput.oninput = filterVagas;
  }
}

function filterVagas() {
  const search = document.getElementById('searchVagas').value.toLowerCase();
  const perfil = appState.currentUser.perfil;
  let vagas = appState.vagas_orcadas;
  
  if (perfil === 'Gerente') {
    vagas = vagas.filter(v => v.gestor_area === appState.currentUser.nome);
  }
  
  if (search) {
    vagas = vagas.filter(v =>
      v.gestor_area.toLowerCase().includes(search) ||
      v.descricao_secao.toLowerCase().includes(search) ||
      v.descricao_funcao.toLowerCase().includes(search)
    );
  }
  
  const tbody = document.getElementById('vagasTableBody');
  tbody.innerHTML = '';
  vagas.forEach(v => {
    const tr = document.createElement('tr');
    if (perfil === 'Administrador') {
      tr.innerHTML = `
        <td>${v.numero_empresa}</td>
        <td>${v.empresa}</td>
        <td>${v.centro_custo_contabil}</td>
        <td>${v.centro_custo_folha}</td>
        <td>${v.cod_secao}</td>
        <td>${v.atividade}</td>
        <td>${v.superintendente}</td>
        <td>${v.gestor_area}</td>
        <td>${v.responsavel_setor}</td>
        <td>${v.descricao_secao}</td>
        <td>${v.cod_funcao}</td>
        <td>${v.descricao_funcao}</td>
        <td>${v.total_orcado}</td>
        <td>${v.total_realizado}</td>
      `;
    } else {
      tr.innerHTML = `
        <td>${v.empresa}</td>
        <td>${v.cod_secao}</td>
        <td>${v.gestor_area}</td>
        <td>${v.descricao_secao}</td>
        <td>${v.cod_funcao}</td>
        <td>${v.descricao_funcao}</td>
        <td>${v.total_orcado}</td>
        <td>${v.total_realizado}</td>
      `;
    }
    tbody.appendChild(tr);
  });
}

function loadHeadcountPage() {
  const perfil = appState.currentUser.perfil;
  const vagas = getFilteredVagas();
  
  const header = document.getElementById('headcountTableHeader');
  const tbody = document.getElementById('headcountTableBody');
  
  if (perfil === 'Administrador') {
    // Tabela Headcount Administrador
    header.innerHTML = `
      <tr>
        <th>Nº Empresa</th>
        <th>Empresa</th>
        <th>C.C. Contábil</th>
        <th>C.C. Folha</th>
        <th>Cód. Seção</th>
        <th>Atividade</th>
        <th>Superintendente</th>
        <th>Gestor da Área</th>
        <th>Responsável</th>
        <th>Descrição Seção</th>
        <th>Cód. Função</th>
        <th>Descrição Função</th>
        <th>Total Orçado</th>
        <th>Total Realizado</th>
      </tr>
    `;
    
    tbody.innerHTML = '';
    vagas.forEach(v => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${v.numero_empresa}</td>
        <td>${v.empresa}</td>
        <td>${v.centro_custo_contabil}</td>
        <td>${v.centro_custo_folha}</td>
        <td>${v.cod_secao}</td>
        <td>${v.atividade}</td>
        <td>${v.superintendente}</td>
        <td>${v.gestor_area}</td>
        <td>${v.responsavel_setor}</td>
        <td>${v.descricao_secao}</td>
        <td>${v.cod_funcao}</td>
        <td>${v.descricao_funcao}</td>
        <td>${v.total_orcado}</td>
        <td>${v.total_realizado}</td>
      `;
      tbody.appendChild(tr);
    });
  } else {
    // Tabela Headcount Gestor
    header.innerHTML = `
      <tr>
        <th>Empresa</th>
        <th>Cód. Seção</th>
        <th>Gestor da Área</th>
        <th>Descrição da Seção</th>
        <th>Cód. Função</th>
        <th>Descrição da Função</th>
        <th>Total Orçado</th>
        <th>Total Realizado</th>
      </tr>
    `;
    
    tbody.innerHTML = '';
    vagas.forEach(v => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${v.empresa}</td>
        <td>${v.cod_secao}</td>
        <td>${appState.currentUser.nome}</td>
        <td>${v.descricao_secao}</td>
        <td>${v.cod_funcao}</td>
        <td>${v.descricao_funcao}</td>
        <td>${v.total_orcado}</td>
        <td>${v.total_realizado}</td>
      `;
      tbody.appendChild(tr);
    });
  }
  
  // Popular filtro de seção
  const filterSecao = document.getElementById('filterSecaoHeadcount');
  const secoes = [...new Set(vagas.map(v => v.descricao_secao))].sort();
  filterSecao.innerHTML = '<option value="">Todas as Seções</option>';
  secoes.forEach(s => {
    const option = document.createElement('option');
    option.value = s;
    option.textContent = s;
    filterSecao.appendChild(option);
  });
  
  // Filtros
  document.getElementById('searchHeadcount').oninput = filterHeadcount;
  filterSecao.onchange = filterHeadcount;
}

function getFilteredVagas() {
  const perfil = appState.currentUser.perfil;
  let vagas = appState.vagas_orcadas;
  
  if (perfil === 'Gerente') {
    vagas = vagas.filter(v => v.gestor_area === appState.currentUser.nome);
  }
  
  return vagas;
}

function filterHeadcount() {
  const search = document.getElementById('searchHeadcount').value.toLowerCase();
  const secaoFilter = document.getElementById('filterSecaoHeadcount').value;
  const perfil = appState.currentUser.perfil;
  
  let vagas = getFilteredVagas();
  
  if (search) {
    vagas = vagas.filter(v =>
      v.empresa.toLowerCase().includes(search) ||
      v.gestor_area.toLowerCase().includes(search) ||
      v.descricao_secao.toLowerCase().includes(search) ||
      v.descricao_funcao.toLowerCase().includes(search)
    );
  }
  
  if (secaoFilter) {
    vagas = vagas.filter(v => v.descricao_secao === secaoFilter);
  }
  
  const tbody = document.getElementById('headcountTableBody');
  tbody.innerHTML = '';
  
  vagas.forEach(v => {
    const tr = document.createElement('tr');
    if (perfil === 'Administrador') {
      tr.innerHTML = `
        <td>${v.numero_empresa}</td>
        <td>${v.empresa}</td>
        <td>${v.centro_custo_contabil}</td>
        <td>${v.centro_custo_folha}</td>
        <td>${v.cod_secao}</td>
        <td>${v.atividade}</td>
        <td>${v.superintendente}</td>
        <td>${v.gestor_area}</td>
        <td>${v.responsavel_setor}</td>
        <td>${v.descricao_secao}</td>
        <td>${v.cod_funcao}</td>
        <td>${v.descricao_funcao}</td>
        <td>${v.total_orcado}</td>
        <td>${v.total_realizado}</td>
      `;
    } else {
      tr.innerHTML = `
        <td>${v.empresa}</td>
        <td>${v.cod_secao}</td>
        <td>${appState.currentUser.nome}</td>
        <td>${v.descricao_secao}</td>
        <td>${v.cod_funcao}</td>
        <td>${v.descricao_funcao}</td>
        <td>${v.total_orcado}</td>
        <td>${v.total_realizado}</td>
      `;
    }
    tbody.appendChild(tr);
  });
}