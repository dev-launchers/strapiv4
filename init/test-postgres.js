const { PostgreSqlContainer } = require ('@testcontainers/postgresql');
const { spawn } = require('node:child_process');

const run = async () => {
    const container = await new PostgreSqlContainer().start();

    console.log(`PG container started on port ${container.getPort()}`);
    process.env.DATABASE_PORT=container.getPort();
    process.env.TEST_CONTAINER= 'true';

    console.log('Running tests...');
    const program = spawn('nyc', ['playwright', 'test']);

    program.stdout.pipe(process.stdout);
    program.stderr.pipe(process.stderr);

    program.on('close', (code) => {
        console.log('Tests finished with code', code);  
        container.stop().then(() => console.log('PG container stopped'));
    }); 
};

run();