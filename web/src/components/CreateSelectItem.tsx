import * as Select from '@radix-ui/react-select'

interface Props {
  id: string;
  value: string;
  title: string;
}

export function CreateSelectItem({title, id, value} : Props) {

  return (
    <Select.Item className='hover:bg-violet-500 p-2 rounded' value={value} key={id}> 
      <Select.ItemText >{title}</Select.ItemText>
      <Select.ItemIndicator />
    </Select.Item>
  )
}