import cors from "cors";

const corsOptions = {
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    preflightContinue: true,
    allowedHeaders: [
        'Content-Type',
        'Access-Control-Allow-Origin',
        'Access-Control-Allow-Headers',
        'Access-Control-Allow-Methods'],
    optionsSuccessStatus: 204
};

const corsInitializer = (app)=>{
    app.use(cors(corsOptions));
};

export default corsInitializer;
