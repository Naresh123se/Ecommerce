import React, {Children, ReactNode} from 'react'
type Props = {
    children: ReactNode;
  };
const Wrap:React.FC<Props> = ({children}) => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
{children}
    </div>
  )
}

export default Wrap