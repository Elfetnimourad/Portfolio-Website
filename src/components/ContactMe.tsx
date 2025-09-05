import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './contact.css';
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';

 
function ContactMe() {
  const[name,setName] = useState("");
  const[email,setEmail] =useState('');
  const[message,setMessage] = useState("");
  const [submitted,setSubmitted] = useState(false);
   const  handleSubmit = async(e:React.FormEvent)=>{
    e.preventDefault();
    try{
      const res = await fetch('https://formspree.io/f/myzddqzj',{
        method:'POST',
headers:{
  'Content-Type':'application/json'
},
body:JSON.stringify({name,email,message})
      })
      setEmail("");
      setName('');
      setMessage('')
      setSubmitted(true)
      if(res.ok && submitted) {
return (
  <p>
      Thanks for joining.
    </p>
)
  }
    }catch (err){
    console.log(err)
   }
    
   }
  
  return (
    <>
   <div className="d-flex flex-row contact align-items-center">
       {submitted && name && email && message &&  
       <Modal
        open={submitted}
        onClose={()=>setSubmitted(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{width: 400,  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3, border: '2px solid #000',color:'white', transform: 'translate(-50%, -50%)' ,position: 'absolute',
  top: '50%',
  left: '50%',bgcolor:'#121212' }}>
          <h2 id="parent-modal-title">Successfuly</h2>
          <p id="parent-modal-description">
            Thanks For Joining, I Will Answer as soon as possible.
          </p>
         
        </Box>
      </Modal>}
   <div className="part-one w-50 p-4">
    <h2>Contact Me</h2>
    <div className="p-3">
    I would Love to hear about your project and <br />
    how could i help.please fill in the form,and I <br />
    will get back to fyou as soon as possible
    </div>

     
     </div>
      <div className="part-two">
<Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
      className='d-flex flex-column'
      onSubmit={handleSubmit}
      
    >
   
        <TextField value={name} onChange={(e)=>setName(e.target.value)} id="standard-basic" label="Name" variant="standard" style={{width:"200%",color:'white'}}  />

      <TextField value={email} onChange={(e)=>setEmail(e.target.value)} required id="standard-basic" type='email' label="Email" variant="standard" style={{width:"200%",color:'white'}} />
   
        <TextField
         style={{width:"200%",color:'white'}}
          id="standard-textarea"
          label="Message"
          multiline
                    rows={4}
required
          variant="standard"
          value={message} onChange={(e)=>setMessage(e.target.value)}
        />
       
      <Button type="submit"  variant="contained" endIcon={<SendIcon />} style={{justifySelf:"flex-end"}}>
    Send
      </Button>
    </Box>   
      
      </div>
</div>
  <Divider style={{borderColor:'white'}}></Divider>

   </>
  )
}

export default ContactMe