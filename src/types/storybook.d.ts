declare module 'storybook' {
  export function action(name: string): (...args: any[]) => void;
}
