import express, { Response, Request} from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';

//Rotas
import mainRoutes from './routes/index';

dotenv.config();

const server = express();

//Configuração do templates engines
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

//Configuração da página Estática
server.use(express.static(path.join(__dirname,"../public")));

//Rotas
server.use(mainRoutes)

server.use((req: Request, res: Response)=>{
   res.render('pages/404');
})
//Rodar o servidor
server.listen(process.env.PORT);

