import React, { useState, useEffect} from 'react';
import potty from './img/potty.png';
import books from './img/books.png';
import hearts from './img/hearts.png';
import pajamas from './img/pajamas.png';
import shower from './img/shower.png';
import dinner from './img/dinner.png';
import tooth from './img/tooth.png';
import cleanUp from './img/clean-up.png';
import axios from 'axios';


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


const Checklist= (props)=>{
    const { value, submit } = props
    const onSubmit= event=>{
        event.preventDefault()
        alert('it works')
        axios.post(https://localhost)
        const newForm={
            dinner: form.dinner, 
            shower: form.shower, 
            pajamas: form.pajamas, 
            cleanUp: form.cleanUp, 
            brush: form.brush,
            potty: form.potty, 
            story: form.story, 
            hugs: form.hugs,
    }
   
}
const [form, setForm ]=useState(initialValues);   
const [disabled, setDisabled] = useState(true);
const onChange = event=>{ 
    const { checked, type, name} = event.target
    const valueInput = type === 'checkbox'? checked: value
    console.log(form)
    setForm({...form, [name]:valueInput})
}
    return (
        <div>
            <form className='checklist' onSubmit={onSubmit}>
            <h1>Night Time Routine Checklist</h1>
            <label>  
                <img className='image' src={dinner} alt='dinner plate with food'/>
                Dinner
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
                Shower
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
                    Pajamas
                <input
                type='checkbox'
                name='pajamas'
                checked={form.pajamas}
                onChange={onChange}
                />
                </label>
                <label> 
                <img className='image' src={cleanUp} alt='kids cleaning room'/>
                    straighten up room/ pick up toys
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
                Brush Teeth
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
                    Potty
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
                    Bedtime story
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
                    Hugs and Kisses goodnight
                <input
                    type='checkbox'
                    name='hugs'
                    value='hugs'
                    onChange={onChange}
                    checked={form.hugs}
                    />
                </label>
                <br></br>
                <button id='button' disabled ={disabled}>Completed</button>
            </form>

        </div>
    )
}

export default Checklist;