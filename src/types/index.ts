export type IProps = {
    img: string;
    text: string;
    languages: (text: string) => void;
  };

  export type IFooter = {
    languages: (texto: string) => void;
  };

  export const idioma = [{
      en: "Hello, my name is Diogo Silva and I am a Full Stack Developer, Technologies that I have experience:",
      pt: "Olá, meu nome é Diogo Silva e eu sou Desenvolvedor Full Stack, Tecnologias que tenho experiência:",
      es:"Hola, mi nombre es Diogo Silva y soy Desarrollador Full Stack, Tecnologías en las que tengo experiencia:"
  }];
  
  export const stacks = [
    'Java',
    'SpringBoot',
    'React',
    'VueJs',
    'Javascript',
    'TypeScript',
    'Tailwind Css',
    'Styled Components',
    'Angular',
    'SQL',
    'Node'
]