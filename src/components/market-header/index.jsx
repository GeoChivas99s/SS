import React from 'react';
import {View, Navbar, Overlay} from '../signature/index';

const MarketHeader = () => {

    return (
        <View>

       
        <Navbar>
            
        </Navbar>


        <div>
        <p>
            Todo negócio é único
        </p>
        <p>
            Procure e encontre o software que necessita.
        </p>
       <input type="text" placeholder="procurar"/>
       <h5>Em destaque</h5>
       <h5>Softwares que recomendamos para si e para o seu negócio</h5>
        </div>
        <Overlay></Overlay>
        </View>
    );
}

export default MarketHeader;
