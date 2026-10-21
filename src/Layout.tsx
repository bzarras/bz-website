import { ContentRow } from './ContentRow';

export function Layout(props: any) {
  return (
    <div className='font-sans'>
      {props.contents.map((content: any) => <ContentRow key={content.title} title={content.title} body={content.body} />)}
    </div>
  )
}
