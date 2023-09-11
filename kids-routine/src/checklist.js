import React, { useState, useEffect} from 'react';
import tooth from './img/tooth.png';
import potty from './img/potty.png';
import books from './img/books.png';
import hearts from './img/hearts.png'


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
        const newForm={dinner: form.dinner, shower: form.shower, pajamas: form.pajamas, cleanUp: form.cleanUp,
        brush: form.brush, potty: form.potty, story: form.story, hugs: form.hugs,
    }
}
const [form, setForm ]=useState(initialValues);   

const onChange = event=>{ 
    const { checked, type, name} = event.target
    const valueInput = type === 'checkbox'? checked: value

    setForm({...form, [name]:valueInput})
}
    return (
        <div>
            <form className='checklist'>
            <h1>Night Time Routine Checklist</h1>
            <label> Dinner
                <input
                    type='checkbox'
                    name='dinner'
                    value='dinner'
                    onChange={onChange}
                    checked={form.dinner}
                    />
                </label>
            <label> Shower
                <input
                    type='checkbox'
                    name='shower'
                    />
                </label>
                <label> Pajamas
                <input
                type='checkbox'
                name='pajamas'
                checked={form.pajamas}
                onChange={onChange}
                />
                </label>
                <label> straighten up room/ pick up toys
                <input
                    type='checkbox'
                    name='straighten up'
                    />
                </label>
                
            <label>
                Brush Teeth
                <input className='checkbox'
                type='checkbox'
                name='brush'
                
                checked={form.brush}
                onChange={onChange}
                
                />
                <img src={tooth} alt='tooth fairy'/>
            </label>
            
                <label>Potty
                    <input
                    type='checkbox'
                    name='potty'
                    />
                   <img src={potty} alt='toilet with face'/>
                </label>
               
                <label> Bedtime story
                <input
                    type='checkbox'
                    name='story'
                    />
                    <img src={books} alt='books with glasses on top'/>
                </label>
                <label> Hugs and Kisses goodnight
                <input
                    type='checkbox'
                    name='hugs'
                    />
                    <img src={hearts} alt='three hearts'/>
                </label>
                <br></br>
                <button id='button'>Completed</button>
            </form>

        </div>
    )
}

export default Checklist;