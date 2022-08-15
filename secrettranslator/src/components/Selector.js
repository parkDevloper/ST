import { Grid,Box ,Button} from "@mui/material";
import { Icon } from '@iconify/react';



function Selector()
{
    return(

        <Grid container direction="row" justifyContent="center" alignment="center" my={25}>
          <Button href='/main'>
                <Box
                    sx={{
                    boxShadow: 3,
                    width: '20',
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
                    }}
                >
                  go with mic
            
                  <Box m={25} component="span" sx={{ boarder:1}}>

                      <Icon icon="bi:mic-fill" color="blue" width="200" height="200" />
                  </Box>   
                </Box>

        </Button>

            
        <Button href="/upload">
            <Box
              sx={{
                boxShadow: 3,
                width: '20',
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
                
              }}
              >
          
              upload as file

                <Box m={25} component="span" sx={{}}>
                    <Icon icon="bi:upload" color="blue" width="200" height="200" />
                </Box>   
            </Box>
        </Button>
       


      </Grid>
    );
}

export default Selector;