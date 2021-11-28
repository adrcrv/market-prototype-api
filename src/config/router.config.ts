import path from 'path';
import fs from 'fs';

const PATH = '../app/router';

export default function router(app: any): void {
  const directory: string = path.join(__dirname, PATH);
  fs.readdirSync(directory).forEach(async (file: string) => {
    const routerPath: string = path.join(directory, file);
    const { default: currentRouter }: any = await import(`${routerPath}`);
    currentRouter(app); // Dynamic Router Injection
  });
}
