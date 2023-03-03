import Button from "../components/Button";
import {GoBell, GoCloudDownload , GoDatabase} from 'react-icons/go'

function ButtonPage (){
  const handleClick = ()=>{
    console.log('hi')
  }
  return (
<div>
<div>

<Button secondary rounded outline className="mb-5">
<GoBell className="mr-1"/>
Click Here</Button>
</div>
<div>
<Button warning  onClick={handleClick}> <GoCloudDownload/>buy now</Button>
</div>
<div>
<Button danger outline > <GoDatabase/>seal deal</Button>
</div>
<div>
<Button primary>masti nhi </Button>
</div>
<div>
<Button secondary>goli beta</Button>
</div>
</div>
  )
}
export default ButtonPage;