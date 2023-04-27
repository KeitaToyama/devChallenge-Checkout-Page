import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PublicIcon from '@mui/icons-material/Public';
import WorkIcon from '@mui/icons-material/Work';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

function App() {
  const [bagcount, setbagCount] = useState(1)

  return (
    <>
    <div id='container'
    className='max-w-[80vw] mx-auto flex flex-col p-6 '
    >
      <h1
      className='text-6xl font-bold p-6'
      >Checkout</h1>
      <div id='main'
      className='flex md:flex-row-reverse flex-col justify-between'
      >
<div id='imgs' className='bg-gray-200 flex rounded-2xl flex-col p-4'>
  
  <div id='item1'>
  <div className='flex flex-row'>
<img src='https://h-yoshikawa44.github.io/ch-checkout-page/assets/photo1.516dbc6a.png' className='w-48 rounded-xl p-4'/>
<div id='detail' className='flex flex-col text-2xl text-start gap-4 p-4'>
<h3>vintage bag</h3>
<h3>$54</h3>
<div id='count' className='flex flex-row gap-4'>
<Button variant="contained" onClick={() => 
  {if (1 <= bagcount) {
  setbagCount(bagcount - 1)
  }
  }}>-</Button>
  {bagcount}
<Button variant="contained" onClick={() => setbagCount(bagcount + 1)}>+</Button>
</div>
</div>
  </div></div>
  <div id='item2'>
  <div className='flex flex-row'>
<img src='https://h-yoshikawa44.github.io/ch-checkout-page/assets/photo2.ed26afb0.png' className='w-48 rounded-xl p-4'/>
<div id='detail' className='flex flex-col text-2xl text-start gap-4 p-4'>
<h3>Levi Shoes</h3>
<h3>$74</h3>
<div id='count' className='flex flex-row gap-4'>
<Button variant="contained" onClick={() => 
  {if (1 <= bagcount) {
  setbagCount(bagcount - 1)
  }
  }}>-</Button>
  {bagcount}
<Button variant="contained" onClick={() => setbagCount(bagcount + 1)}>+</Button>
</div>
</div>
  </div></div>

<div id='' className='place-self-end'>aaaa</div>

</div>

<div id='forms' className=' flex flex-col md:max-w-[40%] flex-auto'>
<div id='contact-infos' className='flex flex-col gap-8 p-6'>
  <h3 className='text-2xl '>Contact Infomation</h3>
  <TextField id="outlined-basic" label="Email" variant="outlined" 
 className=''
 InputProps={{
    startAdornment: (
      <InputAdornment position="start" >
<MailOutlineIcon />
      </InputAdornment>
    ),
  }}
  />
  <TextField id="outlined-basic" label="phone" variant="outlined" 
 className=''
 InputProps={{
    startAdornment: (
      <InputAdornment position="start" >
<PhoneIcon />
      </InputAdornment>
    ),
  }}
  />

</div>
<div id='contact-infos' className='flex flex-col gap-8 p-6'>
  <h3 className='text-2xl '>shipping-adress</h3>
  <TextField id="outlined-basic" label="Full name" variant="outlined" 
 className=''
 InputProps={{
    startAdornment: (
      <InputAdornment position="start" >
<AccountCircleIcon />
      </InputAdornment>
    ),
  }}
  />
  <TextField id="outlined-basic" label="Adress" variant="outlined" 
 className=''
 InputProps={{
    startAdornment: (
      <InputAdornment position="start" >
<HomeIcon />
      </InputAdornment>
    ),
  }}
  />
  <TextField id="outlined-basic" label="City" variant="outlined" 
 className=''
 InputProps={{
    startAdornment: (
      <InputAdornment position="start" >
<LocationCityIcon />
      </InputAdornment>
    ),
  }}
  />
  
  <div id='countryandzip'
  className='flex flex-row'
  >

<FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"
        
        >Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={}
          label="country"
          // onChange={}

          
        >
          <MenuItem value='japan'>Japan</MenuItem>
          <MenuItem value='korea'>Korea</MenuItem>
          <MenuItem value='china'>China</MenuItem>
        </Select>
      </FormControl>
  
  <TextField id="outlined-basic" label="Postal code" variant="outlined" 
 className=''
 InputProps={{
    startAdornment: (
      <InputAdornment position="start" >
<WorkIcon />
      </InputAdornment>
    ),
  }}
  />

  </div>

  <div id='checkboxandcontinue0' className='flex flex-row justify-between'>
    <div id='checkbox' className='flex flex-row items-center'>
<Checkbox />
<span>some agreement text</span>
    </div>

    <Button variant="contained">continue</Button>
  </div>

</div>

</div>
      </div>
    </div>
    </>
  )
}

export default App
