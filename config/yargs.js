const argv = require('yargs')
                .option('b',{
                    alias:'base',
                    type: 'number',
                    demandOption: true,
                    describe:'Base de la tabla' 
                })
                .option('l',{
                    alias:'listar',
                    type: 'boolean',
                    describe: 'Muestra la tabla en consola',
                    demandOption:false
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    describe:'Limite superior de la tabla',
                    default:10
                })
                .check( (argv,options) => {
                    if( isNaN( argv.b )){
                        throw 'La base debe ser un numero';
                    }
                    if(isNaN(argv.h)){
                        throw 'El "hasta" debe ser un numero';
                    }
                    if(argv.h<=0){
                        throw 'El "hasta" debe ser mayor que 0';
                    }
                    return true;
                })
               .argv;

module.exports=argv;