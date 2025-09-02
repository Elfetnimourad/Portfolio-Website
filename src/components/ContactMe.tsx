import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './contact.css';
 
function ContactMe() {
  return (
   <div className="d-flex flex-row contact align-items-center">
   <div className="part-one w-50 p-4">
    <h2>Contact Me</h2>
    <div className="p-3">
    I would Love to hear about your project and <br />
    how could i help.please fill in the form,and I <br />
    will get back to fyou as soon as possible
    </div>

     
     </div>
      <div className="part-two">
      <form action="">
<Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
      className='d-flex flex-column'
    >
        <TextField id="standard-basic" label="Name" variant="standard" style={{width:"200%",color:'white'}}  />

      <TextField id="standard-basic" label="Email" variant="standard" style={{width:"200%",color:'white'}} />
        <TextField
         style={{width:"200%",color:'white'}}
          id="standard-textarea"
          label="Message"
          multiline
                    rows={4}

          variant="standard"
        />
              <Button variant="contained" endIcon={<SendIcon />} style={{justifySelf:"flex-end"}}>
    Send
      </Button>
    </Box>   
      </form>
      
      </div>

   </div>
  )
}

export default ContactMe