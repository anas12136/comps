import Accordion from "../components/Accordion";
function AccordionPage() {

  const items = [
    { 
      id: 'qwert',
      label: 'can i use React in my own project?',
      content: ' you can use React in any project you want . you can use React in any project you want. you can use React in any project you want.you can use React in any project you want.you can use React in any project you want'
    },
    {
      id: 'qwertaaa',
      label: 'can i use React in my own project?',
      content: ' you can use React in any project you want. you can use React in any project you want. you can use React in any project you want. you can use React in any project you want'

    },
    {
      id: 'qwertsss',
      label: 'can i use React in my own project?',
      content: ' you can use React in any project you want '

    }
  ]



  return (
    <div>
      <Accordion items={items} />
    </div>
  )
}
export default AccordionPage;