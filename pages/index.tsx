import {useState} from 'react';
import type { NextPage,NextPageContext } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {

  const [form, setForm] = useState({
    cabeza:false,
    cuerpo:false,
    articulacion:false,
    fiebre:false,
    tos:false,
    nazal:false,
    respiracion:false
  });

  function onChange(e:any){
    const {name,value} = e.target;
    console.log(e.target.value)
    setForm({
      ...form,
      [name]:value
    })
  }

  function validateForm():number {
    let valid:number = 0;
    Object.values(form).forEach((val: any) => {
        if (val === 'true') {
            valid = valid+1;
        }
    })
    return valid;
}

  function evaluar(){
    const valid = validateForm();
    if(valid>=1 && valid<=3){
      alert('Posiblemente tengas un resfriado, acude a tu medico')
    }else if(valid == 0){
      alert('Estas sano!!!!');
    }else {
      alert('Acude a tu centro medico mas cercano urgentemente!!!!')
    }
  }
  return (
    <div>
      <h3>¿Tienes dolor de cabeza?</h3>
      <label>SI</label>
      <input type="radio" name="cabeza"  value='true' onChange={onChange} />
      <label>NO</label>
      <input type="radio" name="cabeza" value="false" onChange={onChange}/>
      <br/>
      <h3>¿Tienes cuerpo cortado?</h3>
      <label>SI</label>
      <input type="radio" name="cuerpo" value='true' onChange={onChange} />
      <label>NO</label>
      <input type="radio" name="cuerpo" value="false" onChange={onChange}/>
      <br/>
      <h3>¿Tienes dolor en las articulaciones?</h3>
      <label>SI</label>
      <input type="radio" name="articulacion" value='true' onChange={onChange} />
      <label>NO</label>
      <input type="radio" name="articulacion" value="false" onChange={onChange}/>
      <br/>
      <h3>¿Has tenido fiebre superior a 38.5 C°?</h3>
      <label>SI</label>
      <input type="radio" name="fiebre" value='true' onChange={onChange} />
      <label>NO</label>
      <input type="radio" name="fiebre" value="false" onChange={onChange}/>
      <br/>
      <h3>¿Has tenido tos seca en los ultimos dias?</h3>
      <label>SI</label>
      <input type="radio" name="tos" value='true' onChange={onChange} />
      <label>NO</label>
      <input type="radio" name="tos" value="false" onChange={onChange}/>
      <br/>
      <h3>¿Tienes escurrimiento nazal?</h3>
      <label>SI</label>
      <input type="radio" name="nazal" value='true' onChange={onChange} />
      <label>NO</label>
      <input type="radio" name="nazal" value="false" onChange={onChange}/>
      <br/>
      <h3>¿Tienes dificultad para respirar?</h3>
      <label>SI</label>
      <input type="radio" name="respiracion" value='true' onChange={onChange} />
      <label>NO</label>
      <input type="radio" name="respiracion" value="false" onChange={onChange}/>
      <br/>
      <br/>
      <br/>
     <button onClick={evaluar}>Evaluar</button> 
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  return {
    'name':"Jacobo Hernandez Mendieta"
  }
}

export default Home
