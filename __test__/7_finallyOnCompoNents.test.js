// src/components/Greeting.tsx
// if it is typeScript, and have a component :

// type GreetingProps = {
//   name: string;
// };

// export function Greeting({ name }: GreetingProps) {
//   return <h1>Hello {name}</h1>;
// }

////////////////////////////////////////////////////////
// src/components/__tests__/Greeting.test.tsx
// import { render, screen } from '@testing-library/react';
// import { Greeting } from '../Greeting';

// test('renders greeting with name', () => {
//   render(<Greeting name="Mahmoud" />);
//   expect(screen.getByText('Hello Mahmoud')).toBeInTheDocument();
// });