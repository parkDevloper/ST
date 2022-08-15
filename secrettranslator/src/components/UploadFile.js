
import { Grid,Box ,Button, Input,MenuItem,FormControl,InputLabel,Select,FormHelperText, Stack} from "@mui/material";
import { Icon } from '@iconify/react';
import { useState } from "react";

/**local imports */
import { uploadFile } from "./services/api";

const initialValues={
    inputLang:"marathi",
    outputLang:"hindi",
    audioFile:""
    
  };

  const languages={
    'afrikaans':'afrikaans',
    'albanian':'albanian',
    'amharic':'amharic',
    'arabic':'arabic',
    'armenian':'armenian',
    'azerbaijani':'azerbaijani',
    'basque':'basque',
    'belarusian':'belarusian',
    'bengali':'bengali',
    'bosnian':'bosnian',
    'bulgarian':'bulgarian',
    'catalan':'catalan',
    'cebuano':'cebuano',
    'chichewa':'chichewa',
    'chinese (simplified)':'chinese (simplified)',
    'chinese (traditional)':'chinese (traditional)',
    'corsican':'corsican',
    'croatian':'croatian',
    'czech':'czech',
    'danish':'danish',
    'dutch':'dutch',


  }

function UploadFile()
{
    const [ilang, setilang] = useState('marathi');

    const [olang, setolang] = useState('hindi');

    const [data , setdata] = useState(initialValues);
    // const handleChange = (e) => {
    //     setdata({...user,[e.target.name]:e.target.value})
    // };
    //const ilang='marathi';
    //const olang='hindi';
    //const {a,b,c}=data;

    const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };

    const handleChange=(e)=>{
        if(e.target.name ==="audioFile"){
            setdata({...data,[e.target.name]:e.target.files[0]})
            console.log(e.target.files[0],'ghj');
        }
        else{
            setdata({...data,[e.target.name]:e.target.value})
            if(e.target.name==='inputLang')
                setilang(e.target.value);
            else
                setolang(e.target.value);
            console.log(e.target.value);
        }
          //console.log(data);
    }

    const handleSubmit=(e)=>{
        e.preventDefault(); //vvvvvvvvvvvvvvvvvvvvvviiiiiiiiiiiiiiiiiiiiiiimmmmmmmmmmmmmmmmmmmmmmmmmmm (very imp)
        console.log(data)
        uploadFile(data,config);
    }

    //const mapping = languages.map((x)=>{return x;})

    return(
        <>

            <Grid container direction="row" justifyContent="center" alignment="center" my={25} mr={50}>
                <Stack>
                    <div>
                        <FormControl required sx={{ m: 1, minWidth: 300 }}>
                                <InputLabel id="demo-simple-select-required-label">Input Language</InputLabel>
                                <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                value={ilang}
                                name="inputLang"
                                label="Input Language *"
                                onChange={(e)=>handleChange(e)}
                                required
                                >
                               
                                
                                <MenuItem value='marathi'>marathi</MenuItem>
                                <MenuItem value='hindi'>hindi</MenuItem>
                                <MenuItem value='english'>english</MenuItem>
                                </Select>
                                <FormHelperText>Required</FormHelperText>
                        </FormControl>

                    </div>

                    <div>
                        <FormControl required sx={{ m: 1, minWidth: 300 }}>
                                <InputLabel id="demo-simple-select-required-label">Output Language</InputLabel>
                                <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                value={olang}
                                name="outputLang"
                                label="Output Language"
                                onChange={(e)=>handleChange(e)}
                                required 
                                >
                                
                                
                                <MenuItem value='marathi'>marathi</MenuItem>
                                <MenuItem value='hindi'>hindi</MenuItem>
                                <MenuItem value='english'>english</MenuItem>
                                </Select>
                                
                                <FormHelperText>Required</FormHelperText>
                        </FormControl>

                    </div>
                </Stack>
                
                <Box
                    sx={{
                    boxShadow: 3,
                    width: '700px',
                    height: '20',
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                    color: (theme) =>
                        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                    p: 1,
                    m: 1,
                    borderRadius: 5,
                    textAlign: 'center',
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    alignment:'center'
                    }}
                    alignment="center"
                    justifyContent="center"
                    >
  
                    <Input
                        style={{
                        display: "none"
                        }}
                        accept=".json"  // specify the file type that you wanted to accept
                        id="choose-file"
                        type="file"
                        name="audioFile"
                        onChange={(e)=>handleChange(e)}
                    />
                        <label htmlFor="choose-file">
                            <Icon icon="bi:upload" color="blue" width="200" height="200" />
                        </label>

  

                        <Box>
                        <Button variant="outlined" color='success' onClick={(e)=>handleSubmit(e)}>Submit</Button>
                        </Box>
                </Box>
            </Grid>
            
        </>
    );



}


export default UploadFile;