import React from 'react'
import {useState} from 'react'
import { useRef } from 'react'
import {FaTrash} from 'react-icons/fa'
import {FaPlus} from 'react-icons/fa'
import './Content.css'
const Content = () => {
    const [wlist,setWlist]= useState([]);
    
    const [newitem,setNewitem]=useState('')
    const handledelete=(id)=>{
             let slist=wlist.filter((item)=>{
                return item.id!==id
             })

             setWlist(slist)
    }

    const handleadd=(e)=>{

        e.preventDefault()
        const id=wlist.length===0?1:(wlist.length)+1
        console.log(newitem);
        if(newitem){
          let obj={id:id,value:newitem}
            let slist=[...wlist,obj]
          setWlist(slist);
          setNewitem('')
        }
        
    }

    const iref=useRef()

  return (
    <main>
      
      <section className='additem'>
            <form on onSubmit={(e)=>handleadd(e)}>
            <input type="text" name="addit" 
                    placeholder='enter to add'
                     value={newitem}
                     onChange={(e)=>setNewitem(e.target.value)}
                      ref={iref}
                     required 
                      ></input>
            <button type='submit' className='picon' onClick={() => iref.current.focus()} ><FaPlus/></button>
            </form>
        </section>

     { wlist.length ?(
        <ul>
            {wlist.map((items)=>(
                   <li className='item' key={items.id}>
                       <p>{items.value}</p>
                       <FaTrash
                        onClick={()=>handledelete(items.id)}
                         role="button"
                         tab-index="0"
                       />
                   </li>
            ))}
        </ul>
      ) : (
           <p className='empty'>Your List is Empty</p>
      )}
    </main>
)
}

export default Content