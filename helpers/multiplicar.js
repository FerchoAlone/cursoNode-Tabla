const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 1,l=false,h=10)=>{
    try {
        let withFormat = '';
        let withOutFormat = '';
        const nameFile =`tabla-${base}.txt`;
        
        for(let n=1;n<=h;n++){
            withFormat+= base.toString().underline.cyan+' x '.red + n.toString().underline.cyan +' = '.red+(base*n).toString().yellow+'\n';
            withOutFormat+=base+' x '+ n +'= '+(base*n)+'\n';
        }

        if(l){
            console.log('Tabla del'.green,base);
            console.log(withFormat);
        }

    
        const res = await fs.writeFileSync('./output/'+nameFile,withOutFormat);
        return nameFile;
    } catch (error) {
        throw error;
    }
    

    
}


module.exports={
    crearArchivo
}