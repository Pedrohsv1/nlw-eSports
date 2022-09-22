import * as ToggleGroup from '@radix-ui/react-toggle-group'

interface Props {
  dia: string;
}

export function CreateToggleGroupItem({dia} : Props) {
  return(
    <ToggleGroup.Item
     value='0' 
     className='w-8 h-8 bg-zinc-900 rounded'
     title='Domingo'>{dia}</ToggleGroup.Item>
  )
}