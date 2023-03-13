import Sidebar from './components/Sidebar';
import AccordionPage from './pages/AccordionPage'
import ButtonPage from './pages/ButtonPage'
import CounterPage from './pages/CounterPage';
import DropdownPage from './pages/DropdownPage'
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';
import Route from "./Route";


function App() {
return <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
<Sidebar/>
<div>
</div>
<div className=''>
<Route path='/accordion'>
    <AccordionPage></AccordionPage>
  </Route>
  <Route path='/button'>
  <ButtonPage></ButtonPage>
  </Route>
  <Route path='/'>
  <DropdownPage></DropdownPage>
  </Route>
  <Route path='/modal'>
  <ModalPage/>
  </Route>
  <Route path='/table'>
  <TablePage/>
  </Route>
  <Route path='/counter'>
  <CounterPage initialCount={10}/>
  </Route>
</div>
  
</div>
}
export default App;