import type { StaticImageData } from "next/image";
import adFlowImage from "@/images/AdFlow.jpg";
import japaneseImage from "@/images/japones-site.jpg";
import roseImage from "@/images/rose-campaign-hero.png";
import advocacyImage from "@/images/monteiro-vasconcelos-hero.png";
import vitaDentalImage from "@/images/vitadental-hero.png";
import nexoImage from "@/images/nexo-contabilidade-hero.png";

export type Project = {
  slug: string;
  index: string;
  name: string;
  category: string;
  status: string;
  summary: string;
  overview: string;
  objective: string;
  direction: string;
  tags: string[];
  image: StaticImageData;
  imageAlt: string;
  externalUrl: string;
  trimArtboard?: boolean;
  wideArtwork?: boolean;
};

export const projects: Project[] = [
  {
    slug: "adflow",
    index: "01",
    name: "AdFlow",
    category: "Produto digital",
    status: "Projeto publicado",
    summary: "Uma presença clara e orientada a decisão para uma plataforma de performance em anúncios.",
    overview:
      "A página apresenta a proposta do AdFlow com uma narrativa direta, interface limpa e visual do produto como principal prova.",
    objective:
      "Facilitar a compreensão da oferta e conduzir o visitante da promessa inicial até a exploração do produto.",
    direction:
      "Hierarquia objetiva, demonstração do produto, leitura rápida de benefícios e chamadas para ação consistentes.",
    tags: ["Estratégia", "Landing page", "Produto digital"],
    image: adFlowImage,
    imageAlt: "Página inicial do projeto AdFlow com painel de performance de anúncios",
    externalUrl: "https://adflow-orpin.vercel.app/",
  },
  {
    slug: "rose-conceito-premium",
    index: "02",
    name: "Rosé",
    category: "Beleza e e-commerce",
    status: "Projeto conceitual",
    summary: "Direção editorial para uma marca de beleza que precisava transmitir cuidado e sofisticação.",
    overview:
      "Um estudo de redesign para explorar posicionamento premium, navegação de catálogo e apresentação visual de produtos.",
    objective:
      "Criar percepção de valor desde a primeira tela e organizar a experiência para descoberta da coleção.",
    direction:
      "Tipografia editorial, imagens de produto em destaque e uma composição com bastante respiro visual.",
    tags: ["Redesign", "E-commerce", "Direção visual"],
    image: roseImage,
    imageAlt: "Página conceitual Rosé para uma marca premium de beleza",
    externalUrl: "https://v0-redesign-de-marca-premium.vercel.app/",
    wideArtwork: true,
  },
  {
    slug: "advocacia-estrategica",
    index: "03",
    name: "Monteiro & Vasconcelos",
    category: "Advocacia",
    status: "Projeto conceitual",
    summary: "Uma experiência sóbria para traduzir segurança, proximidade e autoridade jurídica.",
    overview:
      "O conceito organiza áreas de atuação, posicionamento e contato em uma presença digital adequada a serviços jurídicos.",
    objective:
      "Transmitir confiança com clareza, sem excesso de elementos ou linguagem visual genérica do segmento.",
    direction:
      "Composição sóbria, tipografia elegante, contraste suave e caminhos de contato fáceis de encontrar.",
    tags: ["Site institucional", "Serviços", "Autoridade"],
    image: advocacyImage,
    imageAlt: "Equipe da Monteiro & Vasconcelos Advocacia em um escritório",
    externalUrl: "https://v0-criar-arquivo-css.vercel.app/",
  },
  {
    slug: "vitadental",
    index: "04",
    name: "VitaDental",
    category: "Odontologia",
    status: "Projeto publicado",
    summary: "Um site acolhedor que apresenta os cuidados odontológicos e aproxima o paciente do agendamento pelo WhatsApp.",
    overview:
      "A presença digital da VitaDental reúne serviços, informações sobre a clínica e caminhos de contato em uma experiência pensada para toda a família.",
    objective:
      "Ajudar o paciente a conhecer os tratamentos, encontrar as informações de que precisa e dar o primeiro passo para agendar uma consulta.",
    direction:
      "Tons claros e verde profundo, fotografia centrada no cuidado e uma hierarquia que torna os serviços e o agendamento fáceis de encontrar.",
    tags: ["Site institucional", "Odontologia", "WhatsApp"],
    image: vitaDentalImage,
    imageAlt: "Página da VitaDental com paciente em atendimento e a chamada Sorrir bem faz parte de uma vida melhor",
    externalUrl: "https://vitadental-eight.vercel.app",
    wideArtwork: true,
  },
  {
    slug: "nexo-contabilidade",
    index: "05",
    name: "Nexo Contabilidade",
    category: "Contabilidade",
    status: "Projeto publicado",
    summary: "Uma presença profissional que organiza os serviços contábeis com clareza e facilita o contato de empresas com um especialista.",
    overview:
      "O site apresenta a Nexo Contabilidade, suas soluções para empresas e os caminhos para conversar sobre abertura de negócio e gestão contábil.",
    objective:
      "Tornar a oferta contábil mais fácil de entender e conduzir o empresário até uma conversa sobre as necessidades do seu negócio.",
    direction:
      "Contraste entre preto e dourado, tipografia editorial e imagens de escritório compõem uma identidade sóbria, com serviços e chamadas de contato bem definidos.",
    tags: ["Site institucional", "Contabilidade", "Direção visual"],
    image: nexoImage,
    imageAlt: "Página da Nexo Contabilidade em preto e dourado com a chamada Menos burocracia. Mais crescimento para o seu negócio",
    externalUrl: "https://nexo-contabil-khaki.vercel.app/#inicio",
    wideArtwork: true,
  },
  {
    slug: "koi-tokyo",
    index: "06",
    name: "Kōi Tokyo",
    category: "Gastronomia",
    status: "Projeto conceitual",
    summary: "Uma experiência imersiva para apresentar gastronomia japonesa com apelo contemporâneo.",
    overview:
      "O estudo visual valoriza atmosfera, especialidades e reserva em uma landing page de hospitalidade premium.",
    objective:
      "Fazer a proposta gastronômica ser percebida antes mesmo da visita e encurtar o caminho até a reserva.",
    direction:
      "Fotografia em grande escala, tipografia editorial e chamadas de ação integradas à narrativa.",
    tags: ["Hospitalidade", "Landing page", "Experiência"],
    image: japaneseImage,
    imageAlt: "Página conceitual do restaurante japonês Kōi Tokyo",
    externalUrl: "https://website-japones.vercel.app/",
    trimArtboard: true,
  },
];

export const faqs = [
  {
    question: "Quanto custa criar um site?",
    answer:
      "O investimento depende do escopo, quantidade de páginas, conteúdo e integrações necessárias. Depois de entender o seu negócio, a NexDrop apresenta uma proposta adequada ao projeto, sem publicar um preço genérico que não represente a sua necessidade.",
  },
  {
    question: "Quanto tempo leva para o site ficar pronto?",
    answer:
      "O prazo é definido após o diagnóstico e varia conforme o tamanho do projeto e a agilidade nas aprovações. O cronograma é combinado antes do início, com etapas claras de estratégia, design, desenvolvimento e publicação.",
  },
  {
    question: "Preciso já ter domínio e hospedagem?",
    answer:
      "Não. Se você ainda não tiver domínio ou hospedagem, orientamos a escolha e a configuração. As contas e os acessos podem permanecer em nome do seu negócio.",
  },
  {
    question: "O site funciona bem no celular?",
    answer:
      "Sim. Cada projeto é pensado para telas pequenas desde o início, com navegação, leitura e botões adequados para uso no celular.",
  },
  {
    question: "O site pode aparecer no Google?",
    answer:
      "O site é entregue com estrutura técnica preparada para indexação, conteúdo semântico, metadata e sitemap. A posição nos resultados depende de fatores externos e de uma estratégia contínua; não prometemos colocação garantida.",
  },
  {
    question: "Vocês integram o site ao WhatsApp?",
    answer:
      "Sim. O WhatsApp pode ser incluído nos pontos mais importantes da jornada, com mensagem inicial preparada para facilitar o primeiro contato.",
  },
  {
    question: "Posso solicitar alterações depois?",
    answer:
      "Sim. O formato de manutenção e futuras melhorias é combinado de acordo com o projeto. Também avaliamos a necessidade de uma área de edição de conteúdo.",
  },
  {
    question: "A NexDrop cria sites para quais tipos de negócio?",
    answer:
      "Atendemos profissionais e negócios de serviço, como advogados, dentistas, clínicas, personal trainers, contadores, arquitetos, consultores e empresas locais. A estrutura é criada para cada negócio — não revendemos um template pronto.",
  },
] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
