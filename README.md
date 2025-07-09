# Boolean Chart

Uma biblioteca Angular elegante e simples para criar gráficos booleanos visuais (switches/toggles) com ícones FontAwesome.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Características](#características)
- [Instalação](#instalação)
- [Uso](#uso)
- [API](#api)
- [Exemplos](#exemplos)
- [Desenvolvimento](#desenvolvimento)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Suporte](#suporte)

## 🎯 Sobre o Projeto

O **Boolean Chart** é um componente Angular que renderiza um indicador visual booleano estilizado como um switch/toggle. O componente utiliza ícones FontAwesome para criar uma interface intuitiva que mostra estados ligado/desligado com animações suaves e design responsivo.

### Características

✨ **Simples e Intuitivo**: Interface clara para representar estados booleanos  
🎨 **Personalizável**: Cor de fundo configurável  
📱 **Responsivo**: Design adaptável para diferentes tamanhos de tela  
⚡ **Leve**: Dependências mínimas e alta performance  
🔧 **Fácil Integração**: Compatível com Angular 20+  
🎭 **Ícones FontAwesome**: Utiliza ícones profissionais para melhor UX  

## 📦 Instalação

### Usando npm

```bash
npm install @angulartoolsdr/boolean-chart
```

### Usando yarn

```bash
yarn add @angulartoolsdr/boolean-chart
```

### Usando pnpm

```bash
pnpm add @angulartoolsdr/boolean-chart
```

### Dependências

Certifique-se de ter as seguintes dependências peer instaladas:

```bash
npm install @angular/common@20.0.6 @angular/core@20.0.6
```

### FontAwesome

Este componente requer FontAwesome para os ícones. Adicione ao seu `index.html`:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
```

Ou instale via npm:

```bash
npm install @fortawesome/fontawesome-free
```

## 🚀 Uso

### Importação

```typescript
import { BooleanChartComponent } from '@angulartoolsdr/boolean-chart';

@Component({
  selector: 'app-example',
  template: `
    <lib-boolean-chart 
      [value]="isActive" 
      [backgroundColor]="'#28a745'">
    </lib-boolean-chart>
  `,
  imports: [BooleanChartComponent]
})
export class ExampleComponent {
  isActive = true;
}
```

### Uso Básico

```html
<!-- Estado ativo (true) -->
<lib-boolean-chart [value]="true" [backgroundColor]="'#28a745'"></lib-boolean-chart>

<!-- Estado inativo (false) -->
<lib-boolean-chart [value]="false" [backgroundColor]="'#dc3545'"></lib-boolean-chart>
```

## 📖 API

### Propriedades de Entrada

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|--------|-----------|
| `value` | `boolean` | `undefined` | Estado booleano do componente (true/false) |
| `backgroundColor` | `string` | `undefined` | Cor de fundo do componente em formato CSS |

### Seletor

```
lib-boolean-chart
```

### Estrutura do Componente

O componente renderiza um container com:
- **Dimensões**: 110px × 54px
- **Formato**: Bordas arredondadas (border-radius: 50px)
- **Ícones**: FontAwesome power-off e circle
- **Estados**: Posicionamento dinâmico baseado no valor booleano

## 💡 Exemplos

### Exemplos Visuais do Componente

![Exemplo 1](images/boolean-chart-1.jpeg)

![Exemplo 2](images/boolean-chart-2.jpeg)

![Exemplo 3](images/boolean-chart-3.jpeg)

### Exemplo com Estados Dinâmicos

```typescript
@Component({
  selector: 'app-dynamic-example',
  template: `
    <div class="example-container">
      <h3>Status do Sistema</h3>
      <lib-boolean-chart 
        [value]="systemStatus" 
        [backgroundColor]="getStatusColor()">
      </lib-boolean-chart>
      <button (click)="toggleStatus()">
        {{ systemStatus ? 'Desligar' : 'Ligar' }} Sistema
      </button>
    </div>
  `,
  imports: [BooleanChartComponent]
})
export class DynamicExampleComponent {
  systemStatus = false;

  toggleStatus() {
    this.systemStatus = !this.systemStatus;
  }

  getStatusColor(): string {
    return this.systemStatus ? '#28a745' : '#dc3545';
  }
}
```

### Exemplo com Múltiplos Indicadores

```typescript
@Component({
  selector: 'app-dashboard',
  template: `
    <div class="dashboard">
      <div class="indicator">
        <label>Servidor Online</label>
        <lib-boolean-chart 
          [value]="serverStatus" 
          [backgroundColor]="'#007bff'">
        </lib-boolean-chart>
      </div>
      
      <div class="indicator">
        <label>Backup Ativo</label>
        <lib-boolean-chart 
          [value]="backupStatus" 
          [backgroundColor]="'#ffc107'">
        </lib-boolean-chart>
      </div>
      
      <div class="indicator">
        <label>Manutenção</label>
        <lib-boolean-chart 
          [value]="maintenanceMode" 
          [backgroundColor]="'#6f42c1'">
        </lib-boolean-chart>
      </div>
    </div>
  `,
  styles: [`
    .dashboard {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }
    .indicator {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
    label {
      font-weight: bold;
      font-size: 14px;
    }
  `],
  imports: [BooleanChartComponent]
})
export class DashboardComponent {
  serverStatus = true;
  backupStatus = false;
  maintenanceMode = false;
}
```

## 🛠️ Desenvolvimento

### Pré-requisitos

- Node.js 18+
- Angular CLI 18+
- npm, yarn ou pnpm

### Configuração do Ambiente

```bash
# Clone o repositório
git clone https://github.com/angulartools/boolean-chart.git

# Entre no diretório
cd boolean-chart

# Instale as dependências
npm install
```

### Scripts Disponíveis

```bash
# Build da biblioteca
ng build boolean-chart

# Executar testes
ng test boolean-chart

# Gerar componente
ng generate component component-name --project boolean-chart

# Publicar (após build)
cd dist/boolean-chart && npm publish
```

### Estrutura do Projeto

```
boolean-chart/
├── src/
│   ├── lib/
│   │   ├── boolean-chart.component.ts    # Componente principal
│   │   ├── boolean-chart.component.html  # Template
│   │   └── boolean-chart.component.scss  # Estilos
│   └── public-api.ts                     # API pública
├── package.json                          # Configurações do pacote
├── ng-package.json                       # Configurações ng-packagr
└── README.md                            # Documentação
```

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Para contribuir:

1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. **Abra** um Pull Request

### Diretrizes de Contribuição

- Siga os padrões de código Angular
- Adicione testes para novas funcionalidades
- Atualize a documentação quando necessário
- Use mensagens de commit descritivas
- Certifique-se de que todos os testes passam

### Reportar Bugs

Para reportar bugs, abra uma [issue](https://github.com/angulartools/boolean-chart/issues) incluindo:

- Descrição detalhada do problema
- Passos para reproduzir
- Versão do Angular e do componente
- Screenshots (se aplicável)

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🆘 Suporte

- **Documentação**: [GitHub Repository](https://github.com/angulartools/boolean-chart)
- **Issues**: [GitHub Issues](https://github.com/angulartools/boolean-chart/issues)
- **NPM**: [@angulartoolsdr/boolean-chart](https://www.npmjs.com/package/@angulartoolsdr/boolean-chart)

---

<div align="center">

**Feito com ❤️ pela equipe [Angular Tools](https://github.com/angulartools)**

[⬆ Voltar ao topo](#boolean-chart)

</div>