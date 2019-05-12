var pron = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
/*se declaran funciones de cada paso*/

var arraypronAndAdjAndNoun = [];
function domainNameGenerator() 
{

    for(i=0;i<pron.length;i++)/*comienzo con el primer pronombre*/
    {    
          
        for(j=0;j<adj.length;j++)/* se junta el pronombre iterado con cada adjetivo */
        {
            
            
            for(k=0;k<noun.length;k++)
            {
               arraypronAndAdjAndNoun.push(pron[i] + adj[j] + noun[k]); 
            }

        }
    }
    console.log(arraypronAndAdjAndNoun); 
} 

domainNameGenerator();
