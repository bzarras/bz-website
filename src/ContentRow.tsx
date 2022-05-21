import ReactMarkdown from 'react-markdown';
import { Content } from './content/Content';

export function ContentRow(props: Content) {
  return (
    <div className='md:flex md:flex-row'>
      <div className='border-t border-emerald-700 md:border-t-0 md:border-r flex-none min-w-[256px] px-4 py-4'>
        {props.title}
      </div>
      <div className='grow max-w-3xl px-4 py-4 space-y-2'>
        <ReactMarkdown children={props.body} />
      </div>
    </div>
  );
}
