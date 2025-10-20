// server.ts
import express, { Request, Response, NextFunction } from 'express';

const app = express();
const port = 3000;

// Example middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`Request URL: ${req.url}`);
  next();
});

// Example route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Angular SSR + Express!');
});

// Handle 404
app.use((req: Request, res: Response) => {
  res.status(404).send('Page not found');
});

// Start server
app.listen(port, (error?: any) => {
  if (error) console.error('Error starting server:', error);
  else console.log(`Server running at http://localhost:${port}`);
});
