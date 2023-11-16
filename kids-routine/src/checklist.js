import React, { useState, useEffect } from 'react';
import potty from './img/potty.png';
import books from './img/books.png';
import hearts from './img/hearts.png';
import pajamas from './img/pajamas.png';
import shower from './img/shower.png';
import dinner from './img/dinner.png';
import tooth from './img/tooth.png';
import cleanUp from './img/clean-up.png';
import axios from 'axios';

// figure out why check marks arent showing up
// if all boxes checked then enable submit button
// go to a congrats page when submitted

const initialValues= {
    dinner:'',
    shower:'',
    pajamas:'',
    cleanUp:'',
    brush:'',
    potty:'',
    story:'',
    hugs: '',
}

 const baseUrl='https://reqres.in/api/';

const Checklist= (props)=>{
    const { value, submit } = props
    const [name, setName]=useState('');
   
    const onSubmit= event=>{
        event.preventDefault()
        console.log(`${name}, Yay all tasks completed`)
     const newForm={
            name: form.name,
            dinner: form.dinner, 
            shower: form.shower, 
            pajamas: form.pajamas, 
            cleanUp: form.cleanUp, 
            brush: form.brush,
            potty: form.potty, 
            story: form.story, 
            hugs: form.hugs,
    }
    axios.post(baseUrl, {...form})
    .then((res)=>{
        setForm(res.data)
        console.log(res.data)
    })  
    .catch((err)=>{console.log(err.response)})


}
const [form, setForm ]=useState('');   
const [disabled, setDisabled] = useState(false);
const onChange = event=>{ 
    const name = event.target.name
    const type = event.target.type
    const checked = event.target.checked
    const valueInput = type === 'checkbox'? checked: value
    console.log(name)
    setForm({...form,  valueInput})
    
}

    return (
        <div>
            <form className='checklist' onSubmit={onSubmit}>
            <h1>Night Time Routine Checklist</h1>
            <label >Name 
               <div style={{color: 'red'}}> 
               </div>
                <input 
                id='name-input'
                name='inputName'
                type='text'
                maxLength='50'
                placeholder='first name'
                value={form.inputName}
                onChange={(event)=> setName(event.target.value)}
                />
             </label>
             <div className='container'>
            <label>  
               
                <img className='image' src={dinner} alt='dinner plate with food'/>
                Dinner<span></span>  
                <input
                    type='checkbox'
                    name='dinner'
                    value='dinner'
                    onChange={onChange}
                    checked={form.dinner}
                    />
                    
                </label>
            <label> 
            <img className='image' src={shower} alt='shower heard water coming out'/>
                Shower<span></span> 
                <input
                    type='checkbox'
                    name='shower'
                    value='shower'
                    checked={form.shower}
                    onChange={onChange}
                    />
                </label>

                <label> 
                <img className='image' src={pajamas} alt='top and bottom pajama set'/>
                    Pajamas<span></span> 
                <input
                type='checkbox'
                name='pajamas'
                checked={form.pajamas}
                onChange={onChange}
                />
                </label>
                <label> 
                <img className='image' src={cleanUp} alt='kids cleaning room'/>
                    straighten up room/ pick up toys<span></span> 
                <input
                    type='checkbox'
                    name='cleanUp'
                    value='cleanUp'
                    checked={form.cleanUp}
                    onChange={onChange}
                    />
                </label>
                
            <label>
                <img className='image' src={tooth} alt='tooth fairy'/>
                Brush Teeth<span></span> 
                <input className='checkbox'
                type='checkbox'
                name='brush'
                value='brush'
                checked={form.brush}
                onChange={onChange}
                
                />
            </label>
            
                <label>
                    <img className='image' src={potty} alt='toilet with face'/>
                    Potty<span></span> 
                    <input
                    type='checkbox'
                    name='potty'
                    value='potty'
                    checked={form.potty}
                    onChange={onChange}
                    />
                </label>
               
                <label> 
                    <img className='image'src={books} alt='books with glasses on top'/>
                    Bedtime story<span></span> 
                <input
                    type='checkbox'
                    name='story'
                    value='story'
                    checked={form.story}
                    onChange={onChange}
                    />
                </label>
                <label> 
                    <img className='image' src={hearts} alt='three hearts'/>
                    Hugs and Kisses goodnight<span></span> 
                <input
                    type='checkbox'
                    name='hugs'
                    value='hugs'
                    onChange={onChange}
                    checked={form.hugs}
                    />
                </label>
                </div>
                <br></br>
                <button onSubmit={submit} disabled={disabled} type='submit'>Completed</button>
            </form>
        </div>
    )
}

export default Checklist;